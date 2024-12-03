import { useState } from "react";
import './Counter.css';

export default function Counter () {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1);
  
    const handleInputValue = (event) => {
      setStep(event.target.value)
    }
  
    const handleOnClickIncrement = () => {
      let countCheck=parseInt(step) + count
      if (countCheck > 100) {
        countCheck=100;
      }
      setCount(countCheck)
    }
    const handleOnClickDecrement = () => {
      let countCheck = count - parseInt(step)
      if (countCheck <= 0) {
        countCheck=0;
      }
      
      setCount(countCheck)
    }
    const handleOnClickReset = () => {
      setCount(0)
    }
  return (
    <>
    <section className="counterContainer">
    <section>
      <h1 className="headerStyle">
        useState Challange
      </h1>
    </section>
    <section className="counterStep">
      <p >Count:<span className={count>=100?'maxColor':''}>{count}</span></p>
      <p>Step:<input type='Number' min={1} value={step} onChange={handleInputValue} />
        </p>
    </section>
    <section className="counterButtons">
      <button onClick={handleOnClickIncrement} disabled={count >=100}>
        Increment
      </button>
      <button onClick={handleOnClickDecrement}>
        Decrement
      </button>
      <button onClick={handleOnClickReset}>
        Reset
      </button>
    </section>
  </section>
  </>
  )
}
