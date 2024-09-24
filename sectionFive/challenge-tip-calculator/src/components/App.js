import { useState } from "react";

const tips = [
  { key: "0", value: "Dissatisfied (0%)" },
  { key: "1", value: "It was okay (5%)" },
  { key: "2", value: "It was good (10%)" },
  { key: "3", value: "Absolutely amazing! (20%)" },
];

export default function App() {
  const [total, setTotal] = useState("");
  const [mainTip, setMainTip] = useState(tips[0].value);
  const [friendTip, setFriendTip] = useState(tips[0].value);
  return (
    <div>
      <Bill total={total} onTotal={setTotal}>
        How much was the bill?
      </Bill>
      <PercentTip tip={mainTip} onTip={setMainTip}>
        How did you like the service?
      </PercentTip>
      <PercentTip tip={friendTip} onTip={setFriendTip}>
        How did your friend like the service?
      </PercentTip>
      <Total></Total>
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

function PercentTip({ onTip, children }) {
  function handleTip(e) {
    console.log(e);
    onTip(e.target.value);
  }

  return (
    <div>
      <span>{children}</span>
      <select onChange={(el) => handleTip(el)}>
        {tips.map((tip, i) => (
          <option value={tip.value}>{tip.value}</option>
        ))}
      </select>
    </div>
  );
}

function Total() {}

function Reset() {}
