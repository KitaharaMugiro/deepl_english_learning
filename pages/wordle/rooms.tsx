import { Button, Divider, List, ListItem, TextField, Typography } from "@mui/material"
import { format, addHours, addMinutes } from "date-fns"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { useOnlineUsers } from "realtimely"
import CustomizedMetaTags, { OgpInfo } from "../../components/common/CustomizedMetaTags"
import { answers } from "../../components/wordle/const"
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

export default ({ ogpInfo }: any) => {
    const router = useRouter()
    const { onlineUserList } = useOnlineUsers()
    const [today] = useState(new Date())
    const utc = new Date(today.getTime() + today.getTimezoneOffset() * 60000);
    const roomCreatedAt = format(addMinutes(utc, -3), "yyyy-MM-dd HH:mm:ss")
    const rooms = useWordleRoomsSubscription({ variables: { date: roomCreatedAt } })
    const randomWord = makeid(10)
    const [createRoomMutation] = useCreateRoomMutation()
    const [joinRoomMutation] = useJoinRoomMutation()

    const onJoinRoom = async (slug: string) => {
        const player2 = LocalStorageHelper.getUserId()
        if (!player2) return
        await joinRoomMutation({
            variables: {
                slug: slug,
                player2: player2,
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
                    answer
                }
            })

            router.push(`/wordle/room/${slug}`)
        } catch {

        }

    }

    return <div style={{ padding: 40 }}>
        <CustomizedMetaTags ogpInfo={ogpInfo} />
        <Typography variant="h2" gutterBottom>
            Wordle Battle Online!
        </Typography>
        <Typography variant="body1">
            A battle between those who have confidence in Wordle.
        </Typography>
        <Typography variant="body2">
            Now online: <b>{onlineUserList.length}</b>
        </Typography>

        <div style={{ height: 20 }} />

        <Button variant="contained" size="large" onClick={() => onCreateRoom(randomWord)}>Create Room</Button>

        <Typography variant="h4" gutterBottom style={{ marginTop: 30 }}>
            Rooms created within 3 minutes
        </Typography>
        {rooms.data?.englister_WordleRoom.length === 0 && <Typography variant="subtitle1" gutterBottom>No rooms</Typography>}
        <List>
            {rooms.data?.englister_WordleRoom?.map(room => {
                return <ListItem key={room.slug}>
                    <Typography variant="h5">{room.slug}</Typography>
                    <Button onClick={() => onJoinRoom(room.slug)}>Battle with him/her</Button>
                </ListItem>
            })}
        </List>

    </div>
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
