import React from "react";
import ReactDOM from "react-dom";

const styleHeading = {
  color: "red",
  fontSize: "100px",
  border: "1px dotted red",
  marginLeft: "10%"
};

ReactDOM.render(
  <h1 style={styleHeading}>Hello World!</h1>,
  document.getElementById("root")
);
