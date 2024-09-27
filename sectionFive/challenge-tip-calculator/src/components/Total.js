export function Total({ total, tip1, tip2, children }) {
  const tipTotal = total * ((tip1 + tip2) / 2 / 100);

  return (
    <h1>
      <span>
        {children} ${total + tipTotal} (${total} + ${tipTotal} tip)
      </span>
    </h1>
  );
}
