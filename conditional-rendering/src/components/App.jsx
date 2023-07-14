import React from "react";
import Login from "./Login";

let isLoggedIn = false;

let currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        // Ternary
        isLoggedIn ? <h1>Hello</h1> : <Login />
        // AND Operator
        // currentTime > 12 && <h1>It's time for work</h1>
      }
    </div>
  );
}

export default App;
