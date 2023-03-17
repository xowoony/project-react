import { useState } from "react";

function App() {
  // toDo
  const [toDo, setToDo] = useState("");

  // 여러개의 toDo를 받는 배열 만들기
  const [toDos, setToDos] = useState([]); // 어플리케이션이 처음 시작될 땐 비어있는 array를 가짐

  // onChange
  const onChange = (event) => setToDo(event.target.value);

  // onSubmit
  const onSubmit = (event) => {
    event.preventDefault(); // 페이지가 새로고침 되는 것을 방지
    if (toDo === "") {
      return; // 만약 toDo 값이 비었다면 이 함수를 작동하지 않게함
    }
    // array를 직접적으로 수정하지 않고 setToDos로 배열에 element 추가하는 법
    // currentArray => {} 는 function(currentArray){return ...}와 같다.
    //currentArray는 현재의 state
    // ...을 찍으면 currentArray를 불러올 수 있게 된다.
    setToDos((currentArray) => [toDo, ...currentArray]);

    // toDo 값이 있다면 toDo 즉 input 값을 ""로 비워줌
    // toDo 값은 input과 연결되어 있음 , input을 비워준다.
    setToDo("");
  };

  console.log(toDos);

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h4 style={{ fontSize: "3rem" }}>오늘의 계획</h4>
      <h3>오늘의 계획은 총 {toDos.length}개 입니다.</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="오늘 해야할 일을 입력해주세요"
          style={{
            marginTop: "1rem",
            width: "20rem",
            height: "2rem",
          }}
        />
        <button
          style={{
            marginLeft: "0.2rem",
            height: "2.3rem",
            color: "white",
            backgroundColor: "black",
          }}
        >
          추가하기
        </button>
      </form>
      {/* map() 의 역할은 예전 array를 가져와서 새로운 배열로 변형해준다.
      리턴하는게 어떤 값이던지 그 값이 새로운 배열이 된다.*/}
      <ul>
        {/* map함수는 첫번째는 value, 두번째는 index여야한다. 숫자를 입력해줄경우는 두번째 인자에 index를 넘겨줘야 함.*/}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
