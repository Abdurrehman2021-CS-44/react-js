import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [debouceText, setDebouceText] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebouceText(input);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleChange} />
      <h2>Debounce Text: {debouceText}</h2>
    </div>
  );
}
