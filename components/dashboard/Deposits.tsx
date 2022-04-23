import Typography from '@mui/material/Typography';
import React from 'react';
import Title from './Title';

interface Props {
    title: string
    score: number
}

export default function Deposits(props: Props) {
    return (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Typography component="p" variant="h3">
                <b>{props.score}</b>
            </Typography>
        </React.Fragment>
    );
}