import React, {useState} from "react";

const StepCounter = ({initialValue = 0 , step = 1}) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + step);
    const decrement = () => setCount(count - step);

    const reset = () => setCount(initialValue);

    return (
        <div>
            <h2>Step Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
export default StepCounter;
