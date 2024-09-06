import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter-session ">
      <button
        onClick={decrement}
        className={count <= 1 ? "disabled-btn" : "active-btn"}
      
        >-
      </button>
      <h1>Count : {count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
