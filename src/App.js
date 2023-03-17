import { useState, useEffect } from "react";

function Hello() {
  return <h1>안녕?</h1>;
}

function App() {
  const [showing, setShowing] = useState(false); // default 값은 false
  const onClick = () => setShowing((prev) => !prev); // 클릭시 반댓값을 리턴

  return (
    <div>
      {/* js를 쓸때는 중괄호! */}
      {/* showing이 참일 때 <Hello />를 반환, 아닐 때는 null */}
      {showing ? <Hello /> : null}
      {/* 버튼 - showing이 참일때 Hide, 아닐때 Show 로 텍스트가 변환 */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
