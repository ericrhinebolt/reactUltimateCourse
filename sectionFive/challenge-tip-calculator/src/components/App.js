import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState("");
  return (
    <div>
      <Bill total={total} onTotal={setTotal}>
        How much was the bill?
      </Bill>
      <PercentTip />
      <PercentTip />
      <Total />
      <Reset />
    </div>
  );
}

function Bill({ total, onTotal, children }) {
  function handleTotal(e) {
    onTotal(Number(e.target.value));
  }

  return (
    <div>
      <span>{children}</span>
      <input
        type="number"
        placeholder="Total..."
        value={total === 0 ? "" : total}
        onChange={(e) => handleTotal(e)}
      />
    </div>
  );
}

function PercentTip() {}

function Total() {}

function Reset() {}
