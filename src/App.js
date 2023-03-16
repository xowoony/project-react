import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };

  console.log("I run all the time!"); // 컴포넌트가 render 될 때 출력됨

  // useEffect에게 우리의 function을 준다.(iRunOnlyOnce)
  // 그리고 두 번째 argument로써 빈 array를 하나 준다.
  useEffect(iRunOnlyOnce, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
