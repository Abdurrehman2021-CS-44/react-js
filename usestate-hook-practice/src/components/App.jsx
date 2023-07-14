import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  let [timeInquired, setTime] = useState(time);

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  // setInterval(getTime, 1000);

  console.log(timeInquired);
  return (
    <div className="container">
      <h1>{timeInquired.slice(0, timeInquired.indexOf(" "))}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
