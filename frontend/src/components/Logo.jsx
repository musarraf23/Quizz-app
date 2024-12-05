import React from 'react'

function Logo({className}) {
    return (
        <div className={`inline-flex flex-row ${className}`}>
            <p className="font-bold text-inherit">QUIZZ</p>
            <span className="text-sky-500 font-bold mx-1">.</span>
            APP
        </div>
    )
}

export default Logo