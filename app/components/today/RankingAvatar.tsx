import { useMemo } from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

interface Props {
    key: string
}

export default (props: Props) => {
    const config = useMemo(() => genConfig({}), [props.key])
    return (
        <Avatar style={{
            flexShrink: 0,
            width: 40, height: 40, marginRight: 20
        }} {...config} />
    )
}