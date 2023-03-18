import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // default는 빈배열, data를 coins로 둠
  useEffect(() => {
    // fetch를 한다. then을 써서 응답을 받아서 response.json을 리턴해준다.
    fetch("https://api.coinpaprika.com/v1/tickers") // URL fetch
      .then((response) => response.json()) //URL fetch 한걸 응답을 받아 json으로 리턴
      .then((json) => {
        setCoins(json);// 리턴한 json값을 setCoins 해줌
        setLoading(false); // setCoins 해주었기 때문에 (다 불러왔기 때문에) 로딩을 false로 바꾸어주기
      }); 
  }, []); // [] 적어주어 한번만 로딩되고 끝

  return (
    <div style={{fontFamily : "'Gowun Dodum', sans-serif"}}>
      <h1>The Coins!</h1>
      {loading ? <strong>loading...</strong> : null} {/*로딩 중일때 loading...가 표시됨 아닐때는 문구가 사라짐*/}
      <ul>
          {coins.map( (coins) => <li>{coins.rank}{"위 : "}{coins.name}</li> )}
          {/*  index가 필요없는 이유 : ID를 갖고 있기 때문에 key를 ID로 써도 되기 때문
           첫번째 리스트로 name을 보여주고 싶기 때문에 coins.name을 작성해준다. */}
      </ul>
    </div>
  );
}

export default App;
