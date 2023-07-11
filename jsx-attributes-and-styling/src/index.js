import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img src="https://picsum.photos/200" alt="random" />
    </div>
  </div>,
  document.getElementById("root")
);
