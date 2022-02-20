import { Typography } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

interface Props {
    data: number[]
    date: string[]
    name: string
}

export default (props: Props) => {
    const options = {
        title: {
            text: ''
        },
        series: [{
            data: props.data
        }],
        xAxis: {
            categories: props.date
        },
        yAxis: {
            title: {
                text: '年齢'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: true
        },
        legend: {
            enabled: false,
        },
        tooltip: {
            enabled: false
        }
    }

    return (
        <React.Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                <b>{props.name}さん</b>の年齢推移
            </Typography>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </React.Fragment>
    );
}