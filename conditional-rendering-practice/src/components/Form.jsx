import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.check && <Input type="password" placeholder="Confirm Password" />}
      {props.check ? <Button name="Login" /> : <Button name="Register" />}
    </form>
  );
}

export default Form;
