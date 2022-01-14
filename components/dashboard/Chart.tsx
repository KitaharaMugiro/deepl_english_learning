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

export default function Chart(props: Props) {
    const options = {
        title: {
            text: ''
        },
        series: [{
            data: props.data
        }],
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
