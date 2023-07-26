import { useContext, useRef } from "react"
import context from "../context/Context"

const Data = () => {
    const {state, increment, decrement} = useContext(context);

    const onIncrease = () => {
        increment();
    }

    const onDecrease = () => {
        decrement();
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>{state.count}</h1>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

export default Data;