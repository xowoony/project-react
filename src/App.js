import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("저는 항상 실행됩니다!");

  // useEffect 사용하기 - API 처럼 딱 한번만 호출하고 다시는 호출하지 않을 경우 사용
  useEffect(() => {
    console.log("저는 한번만 실행됩니다.");
  }, []); // 빈배열 - 리액트가 더이상 지켜볼 것이 없기 때문에 처음 한번만 실행됨.

  // 이 코드는 keyword가 변화할 때만 실행된다.
  // if문을 사용하여 keyword가 뭐 하나라도 적힐때 && 5초과일 경우 console.log 되도록 조건을 준다.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("찾는 영화는", keyword);
    }
  }, [keyword]); // 배열 안 keyword 를 넣어줌 - keyword가 바뀔때만 실행됨.

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
