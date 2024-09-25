export function Reset(onTotal, onMainTip, onFriendTip) {
  function handleClick(onTotal, onMainTip, onFriendTip) {
    window.location.reload(false);
    // onTotal(0);
    // onFriendTip(0);
    // onMainTip(0);
  }
  return (
    <button onClick={() => handleClick(onTotal, onMainTip, onFriendTip)}>
      Reset
    </button>
  );
}
