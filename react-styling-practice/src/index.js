//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var greeting = "Good Morning!";

var time = new Date().getHours();

var dynamicStyle = {
  color: "red"
};

if (time < 12) {
  greeting = "Good Morning";
} else if (time < 18) {
  greeting = "Good Afternoon";
  dynamicStyle.color = "green";
} else {
  greeting = "Good Evening";
  dynamicStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={dynamicStyle}>
    {greeting}!
  </h1>,
  document.getElementById("root")
);
