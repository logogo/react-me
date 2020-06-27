import React, { useState, useRef,useEffect } from "react";

const Exam = () => {
    const [counter, setCounter] = useState({name:'gao',age:11});
    const counterRef = useRef(counter);
    const onAlertButtonClick = () => {
        setTimeout(() => {
          alert("Value: " + counterRef.current.name);
        }, 3000);
      };
    useEffect(() => {
      counterRef.current = counter;
    });
    return (
      <div>
        <p>You clicked {counter.name} times.</p>
        <button onClick={() => setCounter((counter=>{
            return {...counter, name:'li'}
        }))}>Click me</button>
        <button onClick={onAlertButtonClick}>
            Show me the value in 3 seconds
        </button>
      </div>
    );
    }
export default Exam;