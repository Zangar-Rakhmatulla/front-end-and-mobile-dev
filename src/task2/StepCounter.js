import React,{useState} from "react";

const StepCounter = ({initialValue = 0, step = 1}) => {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([]);
    count[operationCount, setOperationCount] = useState(0);

    const increment = () => {
        setCount(count + step);
        setCount([...history, count + step]);
        setOperationCount(operationCount + 1);
    };

    const decrement = () => {
        setCount(count - step);
        setHistory([...history, count - step]);
        setOperationCount(operationCount + 1);
    };

    const reset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationCount(0);
    };

    return (
        <div>
            <h2>Step Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <p>Total operations: {operationCount}</p>
            <p>Last operation: {history.slice(-5).join(', ')}</p>
        </div>
    );
};
export default StepCounter;
