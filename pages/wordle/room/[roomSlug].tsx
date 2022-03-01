import { Box, Button, Chip, Divider, LinearProgress, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useOnlineUsers } from "realtimely"
import { useCountdownTimer } from "use-countdown-timer"
import CustomizedMetaTags, { OgpInfo } from "../../../components/common/CustomizedMetaTags"
import { resultMatcher } from "../../../components/wordle/AnswerMatcher"
import { answers } from "../../../components/wordle/const"
import KeyboardView from "../../../components/wordle/KeyboardView"
import MyConfetti from "../../../components/wordle/MyConfetti"
import SkippedWords from "../../../components/wordle/SkippedWords"
import useWordleSubmit from "../../../components/wordle/useWordleSubmit"
import WordleAi from "../../../components/wordle/WordleAi"
import WordleBoard from "../../../components/wordle/WordleBoard"
import { DisplayHeaderAtom } from "../../../models/jotai/Display"
import { AtomNameWithPersistence } from "../../../models/jotai/StudyJotai"
import { ActiveWordleRow } from "../../../models/jotai/Wordle"
import { LocalStorageHelper } from "../../../models/localstorage/LocalStorageHelper"
import { SoundPlayer } from "../../../models/SoundPlayer"
import { useSnackMessage } from "../../../models/util-hooks/useSnackMessage"
import { useCreateRoomMutation, useJoinRoomMutation, useSkipMutation, useWordleRoomSubscription, useDeleteRoomMutation, useSkippedWordsSubscription } from "../../../src/generated/graphql"
const room = ({ ogpInfo }: any) => {
    //get room info
    const router = useRouter()
    const { roomSlug } = router.query
    const { displaySuccessMessage } = useSnackMessage()
    const { onlineUserList } = useOnlineUsers(5000)
    const isOpponentPresent = onlineUserList.length > 1

    const { data, loading } = useWordleRoomSubscription({ variables: { slug: roomSlug as string } })
    const { data: skippedWords } = useSkippedWordsSubscription({ variables: { slug: roomSlug as string } })
    const [createRoomMutation] = useCreateRoomMutation()
    const [joinRoomMutation] = useJoinRoomMutation()
    const [deleteRoomMutation] = useDeleteRoomMutation()
    const isEmpty = data?.englister_WordleRoom_by_pk === null
    const [isAiMode, setIsAiMode] = useState(false)
    const player1 = data?.englister_WordleRoom_by_pk?.player1
    const player2 = data?.englister_WordleRoom_by_pk?.player2
    const isUserOnlyOne = data?.englister_WordleRoom_by_pk?.player2 === ""
    const isPlayer1 = data?.englister_WordleRoom_by_pk?.player1 === LocalStorageHelper.getUserId()
    const isPlayer2 = data?.englister_WordleRoom_by_pk?.player2 === LocalStorageHelper.getUserId()
    const opponentId = isPlayer1 ? data?.englister_WordleRoom_by_pk?.player2 : data?.englister_WordleRoom_by_pk?.player1
    const isWatcher = !isPlayer1 && !isPlayer2
    const wordleRow = data?.englister_WordleRoom_by_pk
    const answer = wordleRow?.answer
    const rows = [wordleRow?.one || "", wordleRow?.two || "", wordleRow?.three || "", wordleRow?.four || "", wordleRow?.five || "", wordleRow?.six || ""]
    const [activeRow, setActiveRow] = useAtom(ActiveWordleRow)
    const [yourTurn, setYourTurn] = useState(false)
    const [winner, setWinner] = useState("")
    const [isTimerExpired, setIsTimerExpired] = useState(false)
    const { displayCenterWarningMessage } = useSnackMessage()
    const { submit } = useWordleSubmit()
    const [skipTurn] = useSkipMutation()
    const [name, setName] = useAtom(AtomNameWithPersistence)
    const isEndGame = winner !== "" || activeRow === 6
    const youWin = (isPlayer1 && winner === "player1") || (isPlayer2 && winner === "player2")
    const [_, setDisplayHeader] = useAtom(DisplayHeaderAtom)

    const { countdown, start, reset } = useCountdownTimer({
        timer: 30000, interval: 1000,
        onExpire: () => {
            setIsTimerExpired(true)
        }
    })

    useEffect(() => {
        if (onlineUserList.length > 1) {
            setIsAiMode(false)
        }
    }, [onlineUserList])

    useEffect(() => {
        if (skippedWords?.englister_WordleSkippedWords) {
            if (skippedWords?.englister_WordleSkippedWords.length > 0) {
                const latest = skippedWords?.englister_WordleSkippedWords[skippedWords?.englister_WordleSkippedWords.length - 1]
                displayCenterWarningMessage(`${latest.word} is not in word list`)
            }
        }
    }, [skippedWords])

    useEffect(() => {
        if (isEndGame) return
        if (isAiMode && !yourTurn) {
            if (countdown === 1000 || countdown === 10000 || countdown === 15000 || countdown === 20000 || countdown === 25000) {
                submit(WordleAi(answer || "", activeRow), () => { }, roomSlug as string, LocalStorageHelper.getUserId() || "")
            }
        }
    }, [countdown])

    useEffect(() => {
        if (isTimerExpired) {
            if (!yourTurn) {
                skipTurn({
                    variables: {
                        roomSlug: roomSlug as string,
                        turn: LocalStorageHelper.getUserId() || ""
                    }
                })
            }

            reset()
            start()
            setIsTimerExpired(false)
        }
    }, [isTimerExpired])

    useEffect(() => {
        setActiveRow(0)

        //WARN: elseで結ぶと最初のやつしか反映されない
        if (wordleRow?.one) {
            setActiveRow(1)
        }
        if (wordleRow?.two) {
            setActiveRow(2)
        }
        if (wordleRow?.three) {
            setActiveRow(3)
        }
        if (wordleRow?.four) {
            setActiveRow(4)
        }
        if (wordleRow?.five) {
            setActiveRow(5)
        }
        if (wordleRow?.six) {
            setActiveRow(6)
        }

        if (wordleRow?.one === answer || wordleRow?.two === answer || wordleRow?.three === answer || wordleRow?.four === answer || wordleRow?.five === answer || wordleRow?.six === answer) {
            const nextPlayer1 = wordleRow?.turn === player1
            if (nextPlayer1) {
                setWinner("player2")
            } else {
                setWinner("player1")
            }
        } else {
            setWinner("")
        }

        if (wordleRow?.turn === LocalStorageHelper.getUserId()) {
            setYourTurn(true)
            if (player1 && player2) {
                new SoundPlayer().playWhenSubmit()
            }
        } else {
            setYourTurn(false)
        }

        if (isWatcher) {
            setYourTurn(false)
        }

        reset()
        start()

    }, [wordleRow])

    useEffect(() => {
        if (wordleRow?.player2) {
            new SoundPlayer().playWhenStart()
        }

    }, [wordleRow?.player2])

    useEffect(() => {
        setDisplayHeader(false)
    }, [])

    const onCreateRoom = async () => {
        const randomIndex = Math.floor(Math.random() * answers.length)
        const answer = answers[randomIndex]
        const player1 = LocalStorageHelper.getUserId()
        if (!player1) return
        await createRoomMutation({
            variables: {
                slug: roomSlug as string,
                player1: player1,
                player1_name: name,
                answer: answer
            }
        })
    }

    const share = () => {
        let win = false
        if (isPlayer1) {
            win = winner === "player1"
        } else if (isPlayer2) {
            win = winner === "player2"
        }
        if (winner === "") win = false
        const winText = win ? "I win the game!!" : "I lost the game..."
        const text = resultMatcher([wordleRow?.one || "", wordleRow?.two || "", wordleRow?.three || "", wordleRow?.four || "", wordleRow?.five || "", wordleRow?.six || ""], answer || "")

        let title = `Wordle Battle Online - ${winText}\n${text}`
        title += "\n#Wordle #WordleBattleOnline"
        const url = `https://english.yunomy.com/wordle/rooms`

        if (navigator.share) {
            navigator.share({
                text: title,
                url
            })
        } else {
            navigator.clipboard.writeText(title + "\n" + url)
            displaySuccessMessage("URLをクリップボードにコピーしました")
        }
    };

    const shareRoomUrl = () => {

        let tweetText = `Let's play Wordle Battle Online with me! First one player is only accepted. `
        tweetText += "\n#Wordle #WordleBattleOnline"
        const url = "https://english.yunomy.com" + router.asPath

        if (navigator.share) {
            navigator.share({
                text: tweetText,
                url
            })
        } else {
            navigator.clipboard.writeText(tweetText + "\n" + url)
            displaySuccessMessage("URLをクリップボードにコピーしました")
        }
    };

    const renderCountdown = () => {
        return <Typography variant="body1" textAlign="center">
            {countdown / 1000}
        </Typography>
    }


    const onJoinRoom = async () => {
        const player2 = LocalStorageHelper.getUserId()
        if (!player2) return
        await joinRoomMutation({
            variables: {
                slug: roomSlug as string,
                player2: player2,
                player2_name: name
            }
        })
    }

    const startWithAi = async () => {
        const player2 = "ai"
        await joinRoomMutation({
            variables: {
                slug: roomSlug as string,
                player2: player2,
            }
        })
        setIsAiMode(true)
    }

    const deleteRoom = () => {
        deleteRoomMutation({
            variables: {
                roomSlug: roomSlug as string,
            }
        })
        router.push("/wordle/rooms")
    }

    const renderResult = () => {
        if (youWin) {
            return <>
                <Typography variant="h3" textAlign="center" color="primary">You win!</Typography>
                <Typography variant="h4" textAlign="center">The answer was <b>{answer}</b></Typography>
            </>
        } else {
            return <>
                <Typography variant="h3" textAlign="center" color="error">You lose!</Typography>
                <Typography variant="h4" textAlign="center">The answer was <b>{answer}</b></Typography>
            </>
        }
    }

    const presenceDisplay = () => {
        if (isEndGame) return null
        if (isAiMode) {
            return <Typography variant="subtitle2" textAlign="center">AI Mode</Typography>
        }
        if (isOpponentPresent) {
            return null
            // return <Chip label="opponent online" color="primary" />
        } else {
            return <>
                {/* <Chip label="opponent offline" color="warning" /> */}
                <Typography variant="subtitle2" textAlign="center">opponent offline</Typography>
                <Button onClick={() => { setIsAiMode(true) }}>Do you want AI mode?</Button>
            </>
        }
    }

    if (loading) return <div>
        <CustomizedMetaTags ogpInfo={ogpInfo} />
    </div>

    if (isEmpty) {
        //create room
        return <div style={{
            marginTop: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <CustomizedMetaTags ogpInfo={ogpInfo} />
            <Button
                onClick={onCreateRoom}
                variant="contained" size="large">Create Room</Button>
        </div>
    }

    if (isUserOnlyOne) {
        if (player1 === LocalStorageHelper.getUserId()) {
            return <div style={{
                display: "flex", flexDirection: "column",
                justifyContent: "center", alignItems: "center",
                padding: 30
            }}>
                <CustomizedMetaTags ogpInfo={ogpInfo} />
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                <Typography style={{ marginTop: 50, marginBottom: 50 }} variant="body1" textAlign="center">
                    Wait here for a minute. someone is coming in...
                </Typography>
                <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    onClick={shareRoomUrl}
                >
                    <Typography variant="h4">
                        Share this room url to your friend
                    </Typography>
                </Button>

                <div style={{ height: 100 }} />
                <Divider flexItem>
                    OR
                </Divider>

                <Button onClick={startWithAi} disableElevation >
                    Play with AI mode
                </Button>
                <div style={{ height: 20 }} />
                <Button onClick={deleteRoom} variant="contained" disableElevation color="error">
                    Delete Room and Go back to Rooms
                </Button>
            </div>
        }

        return <div style={{
            marginTop: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <CustomizedMetaTags ogpInfo={ogpInfo} />
            <Button
                onClick={onJoinRoom}
                variant="contained" size="large">Join Room</Button>
        </div>
    }

    if (isWatcher) {
        return <div>
            <CustomizedMetaTags ogpInfo={ogpInfo} />
            <div>
                Sorry. The room is full now. <br />
                Please create a new room <Button href="/wordle/rooms">here</Button>.
            </div>
        </div>

    }

    return <div>
        <CustomizedMetaTags ogpInfo={ogpInfo} />
        <div style={{ height: 20 }} />

        {!isEndGame && yourTurn && <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography variant="h4" textAlign="center" style={{ marginRight: 5 }} color="primary"><b>Your Turn</b></Typography>

        </div>}
        {!isEndGame && !yourTurn && <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography variant="h4" textAlign="center" style={{ marginRight: 5 }} color="error"><b>Opponent Turn</b> </Typography>
        </div>}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {presenceDisplay()}
        </div>

        {!isEndGame && renderCountdown()}
        {isEndGame && renderResult()}
        {
            isEndGame && <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Button
                    variant="outlined"
                    onClick={share}
                >
                    Share Result
                </Button>
                <div style={{ width: 20 }} />
                <Button variant="outlined" href="/wordle/rooms" size="small" color="error">Back to rooms</Button>
            </div>
        }

        <WordleBoard
            answer={answer || ""}
            row1={data?.englister_WordleRoom_by_pk?.one || ""}
            row2={data?.englister_WordleRoom_by_pk?.two || ""}
            row3={data?.englister_WordleRoom_by_pk?.three || ""}
            row4={data?.englister_WordleRoom_by_pk?.four || ""}
            row5={data?.englister_WordleRoom_by_pk?.five || ""}
            row6={data?.englister_WordleRoom_by_pk?.six || ""}
        />
        <div style={{ height: 50 }} />
        <KeyboardView
            rows={rows}
            answer={answer || ""}
            isYourTurn={yourTurn} slug={roomSlug as string}
            opponentId={opponentId || ""}
            isEndGame={isEndGame} />

        <MyConfetti run={youWin} />

        <SkippedWords
            skippedWords={skippedWords?.englister_WordleSkippedWords || []} />
    </div >
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

export default room