import { useState, useEffect } from "react";

// useEffect는 컴포넌트가 처음 생성될 때 실행된다
// 이것으로 인해 컴포넌트가 언제 생성되었는지, 언제 사라졌는지 알 수 있게 됨.
// 컴포넌트가 파괴될 대는 react.js가 hiFn이 리턴한 function 을 실행하게 된다.
function Hello() {
  useEffect(()=>{
    console.log("Hi");
    return () => console.log("bye"); // cleanup function
  }, []);
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
