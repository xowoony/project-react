import { useState, useEffect } from "react";

function App() {
  const [showing, setShowing] = useState(false); // default 값은 false
  const onClick = () => setShowing((prev) => !prev); // 반댓값을 리턴

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
