import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; // 만약 toDo 값이 비었다면 이 함수를 작동하지 않게함
    }
    setToDo(""); // toDo 값이 있다면 toDo 즉 input 값을 ""로 비워줌
    // toDo 값은 input과 연결되어 있음 / input을 비워준다.
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do..."
        />
        <button>처음으로</button>
      </form>
      
    </div>
  );
}

export default App;
