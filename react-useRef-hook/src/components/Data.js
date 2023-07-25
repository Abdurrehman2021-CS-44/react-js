import { useContext, useRef } from "react"
import context from "../context/Context"

const Data = () => {
    const {count, increment, decrement} = useContext(context);

    const hRef = useRef(null);

    const onIncrease = () => {
        hRef.current.textContent < 10
        &&
        increment()
        hRef.current.style.color = "yellow";
    }

    const onDecrease = () => {
        hRef.current.textContent > -10
        &&
        decrement()
        hRef.current.style.color = "red";
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1 ref={hRef}>{count}</h1>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

export default Data;