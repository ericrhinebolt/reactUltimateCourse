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
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const [date, setDateCount] = useState(currentDate.toDateString());

  function handleAddDays() {
    setCount(() => count + step);
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + step * 24);
    setDateCount(() => newDate.toDateString());
  }

  function handleRemoveDays() {
    setCount(() => count - step);
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() - step * 24);
    setDateCount(() => newDate.toDateString());
  }

  function handleAddSteps() {
    setStep((s) => s + 1);
  }

  function handleRemoveSteps() {
    setStep((s) => s - 1);
  }

  return (
    <main>
      <div>
        <button onClick={handleRemoveSteps}>-</button>Step: {step}
        <button onClick={handleAddSteps}>+</button>
      </div>
      <div>
        <button onClick={handleRemoveDays}>-</button>Count: {count}
        <button onClick={handleAddDays}>+</button>
      </div>
      {count === 0 && <div>Today is {date}</div>}
      {count > 0 && count <= 1 && (
        <div>
          {count} day from today is {date}
        </div>
      )}
      {count > 1 && (
        <div>
          {count} days from today is {date}
        </div>
      )}
      {count < 1 && count !== 0 && (
        <div>
          {count} days from today is {date}
        </div>
      )}
    </main>
  );
}

export default App;
