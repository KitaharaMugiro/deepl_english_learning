import { Icon, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useMemo } from 'react';
import useUser from '../../models/util-hooks/useUser';
import { useQueryTodayPublciAnswerRankingQuery } from '../../src/generated/graphql';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import RankingAvatar from './RankingAvatar';

interface Props {
    todayTopicId: string
}

export default (props: Props) => {
    const { data, loading, error, refetch } = useQueryTodayPublciAnswerRankingQuery({
        variables: { todayTopicId: props.todayTopicId }
    })

    const { user } = useUser()



    const renderItems = () => {
        const cards = data?.englister_PublicAnswers.map((answer, index) => {
            let name = <span>{(answer.name || "anon") + "さん"}</span>
            if (answer.createdBy === user?.attributes.sub) {
                name = <b>{(answer.name || "anon")}さん(You)</b>
            }
            return <ListItem
                key={answer.id}
                secondaryAction={<span>{answer.age}歳相当</span>}>
                <Icon style={{ marginRight: 10, width: 40, height: 40 }}>
                    {index === 0 && <LooksOneIcon style={{ width: 40, height: 40, color: "gold" }} />}
                    {index === 1 && <LooksTwoIcon style={{ width: 40, height: 40, color: "silver" }} />}
                    {index === 2 && <Looks3Icon style={{ width: 40, height: 40, color: "bronze" }} />}
                </Icon>
                <ListItemAvatar>
                    <RankingAvatar key={String(answer.id)} />
                </ListItemAvatar>
                <ListItemText primary={name} />

            </ListItem>
        })
        if (cards?.length === 0) return <Typography variant="body1">まだ他の人は回答を投稿していません。</Typography>
        return cards
    }


    if (error) return <div />
    if (!user?.attributes.sub) return <Typography variant="caption">ログインするとランキングを閲覧・共有できるようになります。</Typography>

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {renderItems()}
        </List>
    );
}