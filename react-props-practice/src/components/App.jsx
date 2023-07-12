import React from "react";

function Card() {}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>Jack Bauer</h2>
          <img
            src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>+123 456 789</p>
          <p>b@beyonce.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
