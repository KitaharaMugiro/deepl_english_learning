import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import classes from "./styles.module.css"

interface Props {
    score: number
}

export default function Deposits(props: Props) {
    return (
        <React.Fragment>
            <Title>あなたの英語力</Title>
            <Typography component="p" variant="h4">
                {props.score}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 15 March, 2021
            </Typography>
            {/* <div>
                <Link color="primary" href="#">
                    詳細
                </Link>
            </div> */}
        </React.Fragment>
    );
}