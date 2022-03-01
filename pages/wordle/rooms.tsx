import { Button, Divider, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import { addMinutes, format, formatDistance } from "date-fns"
import { useAtom } from "jotai"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useOnlineUsers } from "realtimely"
import CustomizedMetaTags, { OgpInfo } from "../../components/common/CustomizedMetaTags"
import { answers } from "../../components/wordle/const"
import EnglisterAds from "../../components/wordle/EnglisterAds"
import { DisplayHeaderAtom } from "../../models/jotai/Display"
import { AtomNameWithPersistence } from "../../models/jotai/StudyJotai"
import { LocalStorageHelper } from "../../models/localstorage/LocalStorageHelper"
import { useCreateRoomMutation, useJoinRoomMutation, useWordleRoomsSubscription } from "../../src/generated/graphql"
function makeid(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const rooms = ({ ogpInfo }: any) => {
    const router = useRouter()
    const { onlineUserList } = useOnlineUsers()
    const [today, setToday] = useState(new Date())
    const utc = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
    const roomCreatedAt = format(addMinutes(utc, -3), "yyyy-MM-dd HH:mm:ss")
    const rooms = useWordleRoomsSubscription({ variables: { date: roomCreatedAt } })
    const randomWord = makeid(10)
    const [createRoomMutation] = useCreateRoomMutation()
    const [joinRoomMutation] = useJoinRoomMutation()
    const [name, setName] = useAtom(AtomNameWithPersistence)
    const [_, setDisplayHeader] = useAtom(DisplayHeaderAtom)

    useEffect(() => {
        const interval = setInterval(() => {
            setToday(new Date())
        }, 30000)
        setDisplayHeader(false)
        return () => {
            clearInterval(interval)
        }

    }, [])

    const onJoinRoom = async (slug: string) => {
        const player2 = LocalStorageHelper.getUserId()
        if (!player2) return
        await joinRoomMutation({
            variables: {
                slug: slug,
                player2: player2,
                player2_name: name,
            }
        })
        router.push(`/wordle/room/${slug}`)
    }


    const onCreateRoom = async (slug: string) => {
        const randomIndex = Math.floor(Math.random() * answers.length)
        const answer = answers[randomIndex]
        const player1 = LocalStorageHelper.getUserId()
        if (!player1) return
        try {
            await createRoomMutation({
                variables: {
                    slug,
                    player1,
                    player1_name: name,
                    answer
                }
            })

            router.push(`/wordle/room/${slug}`)
        } catch {

        }

    }

    return <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ padding: 40, maxWidth: 800 }}>
                <CustomizedMetaTags ogpInfo={ogpInfo} />
                <img src="/static/ogp/wordle.png" style={{ width: "100%", maxHeight: 200, maxWidth: 500, objectFit: "cover" }} />
                <Typography variant="h4">
                    Wordle Battle Online
                </Typography>

                <Typography variant="body2">
                    Now online: <b>{onlineUserList.length}</b>
                </Typography>
                <div style={{ marginTop: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <TextField
                        placeholder="your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <div style={{ width: 20 }} />
                    <Button variant="contained" size="large" onClick={() => onCreateRoom(randomWord)}>Create Room</Button>
                </div>

                <Typography variant="h5" gutterBottom style={{ marginTop: 30 }}>
                    Recent created rooms
                </Typography>

                {rooms.data?.englister_WordleRoom.length === 0 && <Typography variant="subtitle1" gutterBottom>No rooms</Typography>}
                <List>
                    {rooms.data?.englister_WordleRoom?.map(room => {
                        return <ListItem key={room.slug}>

                            <ListItemText primary={room.player1_name} secondary={formatDistance(new Date(room.created_at), new Date(), { addSuffix: true })} />
                            <Button onClick={() => onJoinRoom(room.slug)}>Battle with him/her</Button>
                            <Divider />
                        </ListItem>
                    })}
                </List>
            </div>

        </div>
        <EnglisterAds />
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const ogpInfo: OgpInfo = {
        title: "Wordle Battle Online | Featured by Englister",
        description: "Do you have confidence of playing Wordle? Let's battle together!",
        image: `https://english.yunomy.com/static/ogp/wordle.png`,
    }
    return {
        props: {
            ogpInfo
        }
    }
}

export default rooms