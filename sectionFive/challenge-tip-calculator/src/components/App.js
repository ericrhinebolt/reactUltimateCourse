import { useState } from "react";
import { Reset } from "./Reset";
import { Total } from "./Total";
import { PercentTip } from "./PercentTip";
import { Bill } from "./Bill";

export default function App() {
  const [total, setTotal] = useState(0);
  const [mainTip, setMainTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setTotal(0);
    setFriendTip(0);
    setMainTip(0);
  }

  return (
    <div>
      <Bill total={total} onTotal={setTotal}>
        How much was the bill?
      </Bill>
      <PercentTip percentage={mainTip} onTip={setMainTip}>
        How did you like the service?
      </PercentTip>
      <PercentTip percentage={friendTip} onTip={setFriendTip}>
        How did your friend like the service?
      </PercentTip>
      {total > 0 && (
        <>
          {" "}
          <Total total={total} tip1={mainTip} tip2={friendTip}>
            You pay
          </Total>
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
