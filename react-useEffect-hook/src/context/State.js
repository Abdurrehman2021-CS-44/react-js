import { useReducer, useState } from "react";
import context from "./Context";

const reducer = (currentState, action) => {
    switch (action.type){
        case "increment":
            return {
                ...currentState,
                count: currentState.count + 1
            }
        case "decrement":
            return {
                ...currentState,
                count: currentState.count - 1
            }
        default:
            return {}
    }
}

const State = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {count: 0});

    const increment = () => {
        dispatch({type: "increment"})
    }

    const decrement = () => {
        dispatch({type: "decrement"})
    }

    return (
        <context.Provider value={{state, increment, decrement}}>
            {children}
        </context.Provider>
    );
}

export default State;