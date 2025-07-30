import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText]=useState("Enter the text:");
    let mytext1=()=>{
        console.log("Button is working")
        let textnew=text.toUpperCase();
        setText(textnew)
    }
    let mytext2=()=>{
        console.log("Button is working")
        let textnew2=text.toLowerCase();
        setText(textnew2)
    }
    let mytext3=()=>{
        console.log("Button is working")
        setText("")
    }
    const handleCopyClick=()=>{
        navigator.clipboard.writeText(text);
        alert("Text copid to clipboard")
    }
    
    
    let textchange=(event)=>{
        console.log("Text is working.")
        setText(event.target.value)
    }
  return (
    <>
    <div className="container my-3" style={{ backgroundColor: "#ff6f61", padding: "20px", borderRadius: "10px" }}>

        <h1>Enter your text</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={textchange} id="myBox" rows="3"></textarea>
            <button className="btn btn-primary mx-1 mt-3" onChange={textchange} onClick={mytext1}>Uppercase</button>
            <button className="btn btn-primary mx-1 mt-3" onChange={textchange} onClick={mytext2}>Lowercase</button>
            <button className="btn btn-primary mx-1 mt-3" onChange={textchange} onClick={mytext3}>Clear</button>
            <button className="btn btn-primary mx-1 mt-3" onChange={textchange} onClick={handleCopyClick}>Copy text</button>
        </div>
    </div>
    <div className="container">
        <h1>Text Information</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>

    </div>
    
    </>
  )
}
