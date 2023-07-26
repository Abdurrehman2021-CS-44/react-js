import { useContext, useEffect, useRef } from "react"
import context from "../context/Context"

const Data = () => {
    const {state, increment, decrement} = useContext(context);

    let isChange = false;

    const onIncrease = () => {
        if (state.count % 10 === 0) {
            isChange = !isChange;
        }
        increment();
    }

    const onDecrease = () => {
        if (state.count % 10 ===0) {
            isChange = !isChange;
        }
        decrement();
    }

    useEffect(()=>{
        alert(state.count);
    }, [state.count])

    return (
        <div style={{textAlign: "center"}}>
            <h1>{state.count}</h1>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

export default Data;