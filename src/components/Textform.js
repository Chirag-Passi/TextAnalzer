import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Upper Case Clicked ...!!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleDownClick = () => {
    console.log("Lower Case Clicked ...!!" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleRestClick = () => {
    console.log("Lower Case Clicked ...!!" + text);
    let newText = text.toLowerCase();
    setText("");
    props.showAlert("Text Cleared", "danger");
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "InValid Way to use Text";
  // setText("right way") to set text;

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="5"
            placeholder="Enter Text Here : "
          ></textarea>
        </div>
        <button className="btn  btn-success my-2 mx-2" onClick={handleUpClick}>
          Convert To Upper Case
        </button>

        <button
          className="btn  btn-success my-2 mx-2"
          onClick={handleDownClick}
        >
          Convert To Lower Case
        </button>

        <button className="btn  btn-danger my-2 mx-2" onClick={handleRestClick}>
          Clear
        </button>
      </div>

      <div
        className="container my-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Text Summary :</h2>
        <p>
          {" "}
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <h2>Preview : </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
