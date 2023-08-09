import "./styles.css";
import { useCallback, useState } from "react";
import List from "./List";

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getNum = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const styling = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333"
  };

  return (
    <div style={styling}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setDark((preValue) => !preValue)}>
        toggle button
      </button>
      <List getNum={getNum} />
    </div>
  );
}
