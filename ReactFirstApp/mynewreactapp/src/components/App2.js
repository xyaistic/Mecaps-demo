import React, { useState } from 'react';



function App2(){
    
    let [name,setName]=useState(0)
    let increaseBtn=()=>{
        setName(name+1)
        console.log(name)
        
    }
    let descBtn=()=>{
        setName(name-1)
        console.log(name)
    
    }
    return(
        <>
        <div>
            <h1>Status : {name}</h1>
            <button className='btn btn-primary m-3' onClick={increaseBtn}>Increase</button>
            <button className='btn btn-primary m-3' onClick={descBtn}>Decrease</button>
        </div>
        </>
    )
}

export default App2;