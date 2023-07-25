import { useContext } from "react"
import context from "../context/Context"

const Data = () => {
    const {count, increment, decrement} = useContext(context);

    return (
        <div style={{textAlign: "center"}}>
            <h1>{count}</h1>
            <button onClick={()=>decrement()}>-</button>
            <button onClick={()=>increment()}>+</button>
        </div>
    )
}

export default Data;