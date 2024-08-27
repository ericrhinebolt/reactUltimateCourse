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
  const [count, setCount] = useState(1);
  const [days, setDays] = useState(1);
  const [dayPlural, setDayPlural] = useState("day");
  const [dayTitle, setDayTitle] = useState("today");
  const [date, setDate] = useState(new Date().toDateString());

  return (
    <div>
      <div>
        <button>-</button>Step: {step}
        <button>+</button>
      </div>
      <div>
        <button>-</button>Count: {count}
        <button>+</button>
      </div>
      <div>
        {days} {dayPlural} from {dayTitle} is {date}
      </div>
    </div>
  );
}

export default App;
