import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleFullName(event) {
    const { name: inputName, value: inputValue } = event.target;

    setFullName((preValue) => {
      if (inputName === "fName") {
        return { fName: inputValue, lName: preValue.lName };
      } else {
        return { fName: preValue.fName, lName: inputValue };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}!
      </h1>
      <form>
        <input
          onChange={handleFullName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleFullName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
