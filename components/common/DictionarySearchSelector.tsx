// @ts-ignore
import TextSelector from 'text-selection-react';
import { isMobile } from "react-device-detect";
import { useListPhraseQueryQuery, useSavePhraseMutation } from '../../src/generated/graphql';
import { Description } from '@mui/icons-material';
import usePhrase from '../../models/util-hooks/usePhrase';
import { useAtom } from 'jotai';
import { BackdropAtom } from '../../models/jotai/Backdrop';

export default () => {
    if (!process.browser) return null;
    const { openPhraseList } = usePhrase()
    const [savePhraseMutation] = useSavePhraseMutation()
    const { refetch } = useListPhraseQueryQuery()
    const [_, setOpenLoading] = useAtom(BackdropAtom)

    const onSearchOnDictionary = (html: any, text: string) => {
        window.open('https://ejje.weblio.jp/content/' + text, '_blank');
    }

    const registerPhrase = async (html: any, text: string) => {
        setOpenLoading(true)
        await savePhraseMutation({
            variables: {
                phrase: "",
                description: text
            }
        })
        await refetch()
        openPhraseList()
        setOpenLoading(false)
    }

    return <>
        {!isMobile &&
            <TextSelector
                events={[
                    {
                        text: '辞書で調べる',
                        handler: onSearchOnDictionary
                    },
                    {
                        text: 'フレーズ登録',
                        handler: registerPhrase
                    }
                ]}
                colorText={false}
            />}

    </>
}