import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleWordStartUpClick = ()=>{
        // For Capitalizing the first letter of each word in a string i refered: https://flexiple.com/javascript/javascript-capitalize-first-letter/
        // console.log("Uppercase was clicked: " + text);
        const arr = text.split(" ");

        //loop through each element of the array and capitalize the first letter.
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        //Join all the elements of the array back into a string 
        //using a blankspace as a separator 
        const str2 = arr.join(" ");
        // console.log(str2);
        let newText = str2;
        setText(newText);
    }

    // Harry's video no #11
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // Harry's video no #11
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = '';
        setText(newText);
    }

    // Agar, hum React me kabhi bhi kisi event ko agar listen krre hai 
    // jaise hum yaha onChange ko listen kr rahe hai 
    // tb yeh hota hai ki jo yeh onChange={handleOnChange} wala function hai
    // woh toh run hoga he hoga jaise mai koi change karoonga
    // aur saath he saath hume yaha ek free me object bhi milega
    // yaha hum us object ko koi bhi naam se skte hai 
    // as, here we have named it event

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // Below, approach will throw an error, as we cannot directly change the state value
    // text = "add new text";
    // setText("add new text");
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} placeholder="Enter text here" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#799cd2':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleWordStartUpClick}>Convert Word Start to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            {/* Here, text.split(" ") yeh hume array dega jisme words honge;
            and us array ki length will be our no. of words */}
            {/* And our text.length will give us the total characters  */}
            <p>{text.split(" ").length} words and {text.length} characters</p>
            {/* Here, in the below code we have taken the time in minutes that on an average 
            how many words can be read by the normal user in 1 minute which is 125
            which means to read one word we will require 1/125 = 0.008sec 
            So, to read the total words written in textarea will be calculated as
            (time to read a word in seconds * total no. of words) = 0.008 * text.split(" ").length
            */}
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter some text to preview it here"}</p>
        </div>
        </>
    )
}
