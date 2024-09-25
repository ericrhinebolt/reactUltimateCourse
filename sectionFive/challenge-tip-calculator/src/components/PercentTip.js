import { tips } from "./App";

export function PercentTip({ onTip, children }) {
  function handleTip(e) {
    console.log(e);
    onTip(e.target.selectedIndex);
  }

  return (
    <h3>
      <span>{children}</span>
      <select onChange={(el) => handleTip(el)}>
        {tips.map((tip, i) => (
          <option key={tip.key} value={tip.value}>
            {tip.value}
          </option>
        ))}
      </select>
    </h3>
  );
}
