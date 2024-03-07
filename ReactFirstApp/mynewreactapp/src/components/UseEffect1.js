import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("click in useEffect")
    })

    const up = () => {
        setCount(count + 1)
    }
    const down = () => {
        setCount2(count2 +1)
    }
    return (
        <div>
            <h1>count: {count}</h1>
            <h1>count : {count2}</h1>
            <button className='btn btn-primary m-3' onClick={up}>Up</button>
            <button className='btn btn-primary' onClick={down}>down</button>
        </div>
    )
}

export default UseEffect1;