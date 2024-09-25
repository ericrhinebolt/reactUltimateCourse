export function Bill({ total, onTotal, children }) {
  function handleTotal(e) {
    onTotal(Number(e.target.value));
  }

  return (
    <h3>
      <span>{children}</span>
      <input
        type="number"
        placeholder="Total..."
        value={total === 0 ? "" : total}
        onChange={(e) => handleTotal(e)}
      />
    </h3>
  );
}
