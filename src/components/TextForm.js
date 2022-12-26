import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked." + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
        // setText("You have clicked on handleUpClick")
    }

    const handleClear = () => {
        let tem = "";
        setText(tem);
        props.showAlert("Text Cleared!", "success")
    }

    const handleDownClick = () => {
        let lower = text.toLowerCase();
        setText(lower)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);   // use regex covert array when more than one space
        setText(newText.join(" "));       // join by one space.
        props.showAlert("Remove Extra Spaces!", "success")
    }

    const handleCopy = () => {
        let text1 = document.getElementById("myBox")
        text1.select()
        navigator.clipboard.writeText(text1.value)
        props.showAlert("Copied to Clipboard!", "success")
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    // setText("New text")
    return (
        <>
            <div className='container' style = {{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1> {props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick} > Covert to UpperCase </button>
                <button className='btn btn-primary mx-2' onClick={handleDownClick} > Covert to LowerCase </button>
                <button className='btn btn-primary mx-2' onClick={handleClear} > Clear Text </button>
                <button className='btn btn-primary mx-2' onClick={handleCopy} > Copy Text </button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces} > Remove Extra Spaces </button>
            </div>
            <div className='container my-3' style = {{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1> Your text Summary </h1>
                <p> {text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2> Preview </h2>
                <p> {text.length > 0 ? text : "Enter something in the textbox above to preview it here"} </p>
            </div>
        </>
    )
}
