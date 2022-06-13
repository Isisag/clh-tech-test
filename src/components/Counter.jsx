import React, { useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addCount = () => {
    counter < 20 ? setCounter(counter + 1) : setCounter(20);
  };

  const restCount = () => {
    counter > 0 ? setCounter(counter - 1) : setCounter(0);
  };

  return (
    <div className="counter-container">
      <button className="button-rest" onClick={restCount}>
        <AiFillMinusCircle />
      </button>
      <p>{counter}</p>
      <button className="button-add" onClick={addCount}>
        <AiFillPlusCircle />
      </button>
    </div>
  );
};

export default Counter;
