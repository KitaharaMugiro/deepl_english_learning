import { Card, IconButton, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { StudyApi } from "../../api/StudyApi"
import AddIcon from '@mui/icons-material/Add'
import usePhrase from "../../models/util-hooks/usePhrase"
import useUser from "../../models/util-hooks/useUser"
import { useListPhraseQueryQuery, useSavePhraseMutation } from "../../src/generated/graphql"
import useSignupActivation from "../../models/util-hooks/useSignupActivation"
import { useAtom } from "jotai"
import { BackdropAtom } from "../../models/jotai/Backdrop"
interface Props {
    english: string
    translation: string
}

export default (props: Props) => {
    const [words, setWords] = useState<{ headword: string, meaning: string, level: string }[]>([])
    const { english, translation } = props

    //この辺共通のhookにしたい
    const { openPhraseList } = usePhrase()
    const [savePhraseMutation] = useSavePhraseMutation()
    const { user } = useUser()
    const { openSignupActivationModal } = useSignupActivation()
    const { refetch } = useListPhraseQueryQuery()
    const [_, setOpenLoading] = useAtom(BackdropAtom)


    const registerPhrase = async (word: string, meaning: string) => {
        if (!user) {
            openSignupActivationModal()
            return
        }
        setOpenLoading(true)
        //TODO: 本当はphraseに英語、descriptionに日本語を入れたいが、現状だとphraseに日本語を入れてdescriptionに英語を入れないといけない。API側を逆にしたい。
        await savePhraseMutation({
            variables: {
                phrase: meaning,
                description: word
            }
        })
        await refetch()
        openPhraseList()
        setOpenLoading(false)
    }

    useEffect(() => {
        if (english && translation) {
            StudyApi.compare(english, translation).then(res => {
                setWords(res.userShouldRememberThisWords)
            })
        }
    }, [english, translation])

    const renderCards = () => {
        return words.map((word) => {
            return <Card variant="outlined" style={{ padding: 20, display: "flex", marginBottom: 10 }}>
                <div style={{ flexGrow: 2 }}>
                    <Typography variant="h5">{word.headword}</Typography>
                    <Typography variant="body2" color="text.secondary">{word.meaning}</Typography>
                </div>
                <div>
                    <IconButton onClick={() => registerPhrase(word.headword, word.meaning)}><AddIcon /></IconButton>
                </div>
            </Card >
        })
    }

    if (words.length === 0) return null

    return <div>
        <Typography variant="body1" textAlign={"center"} style={{ marginBottom: 10 }}><b>覚えておきたい単語</b></Typography>
        {renderCards()}
    </div>
}