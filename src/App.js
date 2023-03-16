import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("저는 항상 실행됩니다!");

  useEffect(() => {
    console.log("저는 한번만 실행됩니다.");
  }, []);
  
  useEffect(() => {
      console.log("저는 키워드가 변화할 때만 실행됩니다.");
  }, [keyword]); 

  useEffect(() => {
    console.log("저는 카운터가 변화할 때만 실행됩니다.");
}, [counter]); 

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="검색할 영화를 입력해주세요!"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
