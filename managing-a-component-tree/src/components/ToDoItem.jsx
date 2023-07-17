import React, { useState } from "react";

function ToDoItem(props) {
  const [change, setChange] = useState(false);

  function handleChange() {
    setChange((prevValue) => !prevValue);
    setTimeout(() => {
      props.changeArray(props.id);
      setChange((prevValue) => !prevValue);
    }, 100);
  }

  return (
    <li
      style={{ textDecoration: change && "line-through" }}
      onClick={handleChange}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
