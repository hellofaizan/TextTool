import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Typeform(props) {
    const handleTextArea = (event) => {
        setText(event.target.value  )
    }
    const buttonClick = () => {
        let text = document.getElementById('myBox').value;
        setText(text.toUpperCase());
    }
    const titleCase = () => {
        let text = document.getElementById('myBox').value;
        let newText = text.toLowerCase().split(" ").map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join(" ");
        setText(newText);
    }
    const clearText = () => {
        document.getElementById('myBox').value = "";
        setText("");
        setShow(false);
    }
    const copyCB = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        setShow(true);
    }
    const speakText = () => {
        let text = document.getElementById('myBox').value;
        let speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }
    const [text, setText] = useState("");  
    const [show, setShow] = useState(false);  
  return (
    <>
    <div className='container'>
        <h1 className='heading'>{props.heading}</h1>
        <div className="mb-3">
            <i className="bi bi-x-lg float-end copyS" onClick={clearText}></i>
            <i className="bi bi-clipboard float-end copyS" onClick={copyCB}></i>
            <i className="bi bi-megaphone float-end copyS" onClick={speakText}></i>
            <textarea className="form-control" id="myBox" value={text} onChange={handleTextArea} placeholder="Enter Your Text to Capitalize It." rows="8"></textarea>
        </div>
        {show?<div className="alert alert-success alert-dismissible fade show" role="alert"><strong>Congo!</strong> Copied to Clipboard</div>:null}
    </div>
        <button className="btn btn-primary float-end" onClick={buttonClick}>UpperCase</button>
        <button className="btn btn-primary float-end" title='Upper case 1st letter of each word' onClick={titleCase}>Title Case</button>
    <div className="container beloww">
        <h1 className='textMorrr '>Text Summary</h1>
        <h6><b>{text.split(" ").length - 1}</b> Words, <b>{text.length}</b> Characters</h6>
        <h1 className='textMorrr'>Preview</h1>
        <h6 className='previewt'>
            {text.length>0?text:"Nothing to Preview. Enter Something in the above text box."}
        </h6>
    </div>
    </>
  )
}

Typeform.propTypes = {
    heading: PropTypes.string.isRequired,
}

Typeform.defaultProps = {
    heading: "Set heading here",
}
