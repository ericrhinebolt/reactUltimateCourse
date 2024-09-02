import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleRange(e) {
    setStep(Number(e.target.value));
  }

  function handleCount(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <main>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => handleRange(e)}
        />
        {step}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          placeholder="Item..."
          value={count}
          onChange={(e) => handleCount(e)}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <span>
        {count === 0 && <div>Today is {date.toDateString()}</div>}
        {count === 1 && (
          <div>
            {count} day from today is {date.toDateString()}
          </div>
        )}
        {count > 1 && (
          <div>
            {count} days from today is {date.toDateString()}
          </div>
        )}
        {count === -1 && (
          <div>
            {count} day ago was {date.toDateString()}
          </div>
        )}
        {count < -1 && (
          <div>
            {count} days ago was {date.toDateString()}
          </div>
        )}
      </span>
      <div className={count === 0 && step === 1 ? "hide" : ""}>
        <button onClick={handleReset}>Reset</button>
      </div>
    </main>
  );
}

export default App;
