import { useState } from "react";

const CounterComp = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <h4>The Count is {count}</h4>
   
    <button onClickCapture={() => setCount(count + 1)}>Increment</button> 
    <button onClick={() => setCount (count -1)}>Decrement</button>
    <button onClick = {() => setCount(0)}>Reset</button>
    </>
  );
};

export default CounterComp