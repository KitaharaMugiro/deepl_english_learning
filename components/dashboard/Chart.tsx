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
            text: 'スコア履歴'
        },
        series: [{
            data: props.data
        }]
    }

    return (
        <React.Fragment>
            <Title></Title>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </React.Fragment>
    );
}
