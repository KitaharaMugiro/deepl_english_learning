import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, Rating, styled } from '@mui/material';
import usePlan from '../../models/util-hooks/usePlan';
interface Props {
    hearts: number;
    maxHearts: number
    showText: boolean
}


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    }
});

export default (props: Props) => {
    const { openPlanModal } = usePlan()
    if (props.maxHearts === 0) {
        return <div>{props.showText ? <Button onClick={openPlanModal}>追加する</Button> : ""}</div>
    }
    if (props.maxHearts > 10) return <div>
        {props.showText ? "💕 Unlimited" : ""}
    </div>

    if (props.maxHearts === 10) {
        const topHearts = Math.min(props.hearts, 5)
        const bottomHearts = props.hearts - 5
        return <div>
            <div>
                <StyledRating
                    readOnly
                    value={topHearts}
                    max={5}
                    precision={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
            </div>

            <div>
                <StyledRating
                    readOnly
                    value={bottomHearts}
                    max={5}
                    precision={1}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                />
            </div>

        </div>
    }

    return <div>
        <StyledRating
            readOnly
            value={props.hearts}
            max={props.maxHearts}
            precision={1}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
    </div>
}