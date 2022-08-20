import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleWordStartUpClick = ()=>{
        const arr = text.split(" ");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        const str2 = arr.join(" ");
        let newText = str2;
        setText(newText);
    }

    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2 className="mb-4">{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#799cd2':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleWordStartUpClick}>Convert Word Start to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{
                return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{
                return element.length !== 0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
        </>
    )
}
