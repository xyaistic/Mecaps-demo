import React, { useState } from 'react'
let newText;

const TextBox = (props) => {
    const handleToUp = () => {
        newText = text.toUpperCase()
        setText(newText)
    }
    const handleTodown = () => {
        newText = text.toLowerCase()
        setText(newText)
    }
    const handleToclear = () => {
        setText(" ")
    }

    const handleToChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    }

    const [text, setText] = useState(" ")
    return (
        <>
            <div>
                <div className="form-group container w-50 ml-5 d-f p-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleToChange} value={text} ></textarea>
                    <div className='container d-flex w-100'>
                    <button className='w-50 mt-4 p-3 btn-primary border-0 m-3' onClick={handleToUp}>Convert To UpperCase</button>
                    <button className='w-50 mt-4 p-3 btn-primary border-0 m-3' onClick={handleTodown}>Convert To LowerCase</button>
                    <button className='w-50 mt-4 p-3 btn-primary border-0 m-3' onClick={handleToclear}>Clear</button>
                    </div>
                    <p> {text.split(" ").length} Words and {text.length} Characters</p>
                </div>
            </div>
        </>
    )
}

export default TextBox
