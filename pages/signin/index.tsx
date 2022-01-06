import React from "react";
import SigninFrame from "../../components/signin/SigninFrame";
import useSignin from "../../models/util-hooks/useSignin";



export default () => {
    const { openSignin } = useSignin()
    return <div>
        <button onClick={openSignin}>test</button>
    </div>
}

