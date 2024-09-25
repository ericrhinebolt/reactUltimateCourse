import { useState } from "react";
import { Reset } from "./Reset";
import { Total } from "./Total";
import { PercentTip } from "./PercentTip";
import { Bill } from "./Bill";

export const tips = [
  { tip: 0, value: "Dissatisfied (0%)" },
  { tip: 5, value: "It was okay (5%)" },
  { tip: 10, value: "It was good (10%)" },
  { tip: 20, value: "Absolutely amazing! (20%)" },
];

export default function App() {
  const [total, setTotal] = useState(0);
  const [mainTip, setMainTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
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
      <Total total={total} tip1={mainTip} tip2={friendTip}>
        You pay
      </Total>
      <Reset
        onTotal={setTotal}
        onMainTip={setMainTip}
        onFriendTip={setFriendTip}
      />
    </div>
  );
}
