import { useWindowSize } from "react-use"
import Confetti from 'react-confetti';

interface Props {
    run: boolean
}

export default (props: Props) => {
    const { width, height } = useWindowSize()
    return <Confetti
        width={width}
        height={height}
        run={props.run}
        recycle={false}
        tweenDuration={10000}
        numberOfPieces={800}

    />

}