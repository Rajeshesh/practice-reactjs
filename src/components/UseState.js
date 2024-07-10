import React, { useEffect, useMemo, useState } from "react";
import useFetch from "./hook/useFetch";

const UseState = () => {
  const [counter, setCounter] = useState({ value: 10, type: "counter" });
  const [para, setPara] = useState("");
  const fetchedData = useFetch("http");

  const increment = () => {
    setCounter((pre) => {
      return { ...pre, value: pre.value + 3 };
    });
  };

  const decrement = (e) => {
    if (e.target.innerText == "decrement -1")
      setCounter({ ...counter, value: counter.value - 1 });
  };

  const adding = (count) => {
    return count + 3;
  };
  // only works when counter's value change
  const addedValue = useMemo(() => adding(counter.value), [counter.value]);

  useEffect(() => {
    console.log("works every time. initial and state changes");
  });
  useEffect(() => {
    console.log("only works initial time");
  }, []);
  useEffect(() => {
    console.log("works initial and when counter state change");
  }, [counter]);

  useEffect(() => {
    //initial time
    console.log("effect goes here");
    const timeId = setInterval(() => {
      console.log("API call executing");
    }, 2000);
    return () => {
      //before exiting this component
      console.log("cleanup goes here");
      clearInterval(timeId);
    };
  }, []);

  useEffect(() => {
    console.log("effect goes here with counter");
    let timeIdWithCounter;
    if (counter.value) {
      timeIdWithCounter = setInterval(() => {
        console.log(counter);
      }, 2000);
    }
    return () => {
      console.log("cleanup goes here with counter");
      clearInterval(timeIdWithCounter);
    };
  }, [counter]);

  return (
    <div>
      <h2>useState hook</h2>
      <div>
        counter value is {counter.value} (added 3 {addedValue}) and type is{" "}
        {counter.type}. {para}
        {para && <button onClick={() => setPara("")}>delete para</button>}
      </div>
      <div>
        <button onClick={increment}>increment +3</button>
        <button onClick={decrement}>decrement -1</button>
        <input placeholder="enter to add in the para" />
        <button
          onClick={(e) => {
            setPara(para + e.target.previousElementSibling.value);
            e.target.previousElementSibling.value = "";
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default UseState;
