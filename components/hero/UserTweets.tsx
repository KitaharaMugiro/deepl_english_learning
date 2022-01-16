import { Card, Typography } from "@mui/material"
import { HeroCardWidth } from "./HeroCardConst"
import UserTweet from "./UserTweet"

const TweetIdList: string[] = [
    "1478189276106223617",
    "1478223476867485697",
    "1478379934318206980",
    "1478213615220330503",
    "1481223266748743681",
    "1482274872219037696",
    "1481042807464685568",
    "1480172890486353939",
    "1478629532647456768",
    "1479228989508288515",
    "1479426574852272128",
    "1481184913856819200",
    "1481067692551553027",
    "1478714330728513536",
    "1478198155066093569"]
export default () => {
    const tweets = () => TweetIdList.map(id => {
        return <UserTweet key={id} tweetId={id} />
    })

    return <Card elevation={1} style={{ padding: 20, paddingBottom: 30, margin: 20, width: "100%", maxWidth: HeroCardWidth }}>
        <Typography
            component="h1" variant="h4"
            align="center" color="textPrimary"
            gutterBottom>
            <b>利用者さまの声</b>
        </Typography>
        <div style={{ display: "flex", overflowX: "scroll" }}>
            {tweets()}
        </div>
    </Card>


}