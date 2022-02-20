import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import React, { useEffect, useState } from 'react';
import { ApiClient } from '../../api/ApiClient';
import { RecordApi } from '../../api/RecordApi';
import { StudyApi } from '../../api/StudyApi';
import Title from './Title';


if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

interface Props {
    data: number[]
}

function ma(series: number[], period: number) {
    var data = [];
    var sumForAverage = 0;
    var i;
    for (i = 0; i < series.length; i++) {
        sumForAverage += series[i];
        if (i < period) {
            data.push(null);
        } else {
            sumForAverage -= series[i - period];
            data.push(sumForAverage / period);
        }
    }
    return data
}

export default function Chart(props: Props) {
    const options = {
        title: {
            text: ''
        },
        series: [{
            data: props.data
        },
            // {
            //     data: ma(props.data, 5),
            //     name: "MA5"
            // }
        ],
        xAxis: {
            categories: [
                '1', '2', '3'
            ]
        },
        yAxis: {
            title: {
                text: 'Score'
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
            <Title>スコア履歴</Title>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </React.Fragment>
    );
}
