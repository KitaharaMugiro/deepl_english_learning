import { useState } from "react";

export default () => {
    const [loading, setLoading] = useState(false);

    const onClick = async (func: Function) => {
        if (!loading) {
            setLoading(true);
            await func();
            setLoading(false);
        } else {
            console.log("skip")
        }
    }

    return { onClick }
}