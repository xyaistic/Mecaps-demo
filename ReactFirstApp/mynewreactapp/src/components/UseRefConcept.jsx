import React, { useEffect, useRef, useState } from 'react'

const UseRefConcept = () => {


    const [getVal, setVal] = useState(0)
    let refVal=useRef(0) 

    useEffect(()=>{
        refVal.current=refVal.current+1
        // setVal(getVal+1)
    })
return (
    <div>
        {/* <input className=" border-1-red" type="text" ref={refVal} /> */}
        {/* <h1>{refVal.current}</h1>    */}
        <h1>Ziya Afridi</h1>
        <h1>Account Balance: ${getVal}</h1>
        {/* <button className="btn btn-primary m-1" onClick={getValFun} >Click me</button> */}
    </div>
)
}

export default UseRefConcept
