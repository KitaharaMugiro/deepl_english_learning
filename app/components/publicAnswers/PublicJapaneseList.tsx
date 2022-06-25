import { Button, Dialog, DialogContent, DialogProps, DialogTitle } from "@mui/material";
import { useAtom } from "jotai";
import { useState } from "react";
import { AtomJapanse } from "../../models/jotai/StudyJotai";
import usePhrase from "../../models/util-hooks/usePhrase";
import { useQueryPublicJapaneseQuery } from "../../src/generated/graphql";
import TappablePublicAnswerCard from "./TappablePublicAnswerCard";

interface Props {
    topicId: number
}

export default (props: Props) => {
    const { data, loading, error } = useQueryPublicJapaneseQuery({
        variables: { topicId: props.topicId }
    });
    const [_, setJapanese] = useAtom(AtomJapanse)
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
    const { openPhraseList } = usePhrase()

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClickCard = (text: string) => {
        setJapanese(text);
        setOpen(false);
    }

    const renderCards = () => {
        return data?.englister_PublicAnswers.map(d => {
            return <TappablePublicAnswerCard
                key={d.id}
                answer={d.japanese || ""}
                onClick={() => onClickCard(d.japanese || "")} />
        })
    }

    if (loading) return <div />
    if (error) return <div >{JSON.stringify(error)}</div>
    if (data?.englister_PublicAnswers.length === 0) return <>
        <Button onClick={openPhraseList}>フレーズリストを開く</Button>
        <Button disabled>他の人の意見を参考にする(まだ他の人の投稿がありません)</Button>
    </>
    return <>
        <Button onClick={openPhraseList}>フレーズリストを開く</Button>
        <Button onClick={handleClickOpen('paper')}>他の人の意見を参考にする</Button>


        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">他の人の意見(クリックでコピー)</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
                {renderCards()}
            </DialogContent>

        </Dialog>

    </>
}