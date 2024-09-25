import { tips } from "./App";

export function Total({ total, tip1, tip2, children }) {
  function handleMath(total, tip1, tip2) {
    const tipTotal = (tips[tip1].tip + tips[tip2].tip) / 2 / 100;
    const calcTotal = total * tipTotal + total;
    return (
      <span>
        ${calcTotal} (${total} + ${Math.round(tipTotal * total * 100) / 100}{" "}
        tip)
      </span>
    );
  }

  return (
    <h1>
      <span>
        {children} {handleMath(total, tip1, tip2)}
      </span>
    </h1>
  );
}
