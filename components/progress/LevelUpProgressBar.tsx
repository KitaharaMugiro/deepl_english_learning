import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";

interface Props {
    value: number
    maxValue: number
}

export default (props: Props) => {


    return <ProgressBar
        completed={props.value}
        maxCompleted={props.maxValue}
        customLabel={`${props.value}pt`}
        bgColor="#009dff"
        baseBgColor="#e0e0de"
        height="20px"
        width="100%"
    />;
}