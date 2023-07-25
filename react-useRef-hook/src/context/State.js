import { useState } from "react";
import context from "./Context";

const State = ({children}) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevValue) => {
            return prevValue + 1;
        })
    }

    const decrement = () => {
        setCount((prevValue) => {
            return prevValue - 1;
        })
    }

    return (
        <context.Provider value={{count, increment, decrement}}>
            {children}
        </context.Provider>
    );
}

export default State;