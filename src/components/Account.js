import React from "react";

export default function Account(){

    const createAccount = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return(
        <div className="text">
            <h3>You don't have an account?</h3>
            <p onClick={() => createAccount('https://github.com/join')}>Create an account</p>
        </div>
    )
}