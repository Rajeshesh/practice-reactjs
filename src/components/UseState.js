import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState({ value: 100, type: "counter" });

  const increment = () => {
    setCounter((pre) => {
      return { ...pre, value: pre.value + 3 };
    });
  };

  const decrement = (e) => {
    if (e.target.innerText == "decrement -1")
      setCounter({ ...counter, value: counter.value - 1 });
  };

  return (
    <div>
      <h2>useState hook</h2>
      <div>
        counter value is {counter.value} and type is {counter.type}
      </div>
      <div>
        <button onClick={increment}>increment +3</button>
        <button onClick={decrement}>decrement -1</button>
      </div>
    </div>
  );
};

export default UseState;
