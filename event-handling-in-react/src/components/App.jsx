import React, { useState } from "react";

function App() {
  let [headingText, setHeadingText] = useState("Hello");
  let [change, setChange] = useState(null);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function changeBackgroundColor() {
    setChange({ backgroundColor: "black" });
  }

  function reChangeBackgroundColor() {
    setChange(null);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={change}
        onClick={handleClick}
        onMouseOver={changeBackgroundColor}
        onMouseOut={reChangeBackgroundColor}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
