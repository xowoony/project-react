import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch를 한다. then을 써서 응답을 받아서 response.json을 리턴해준다.
    fetch("https://api.coinpaprika.com/v1/tickers")// URL fetch
      .then((response) => response.json()) //URL fetch 한걸 응답을 받아 json으로 리턴
      .then((json) => console.log(json)); // 리턴한 json을 console.log()
  }, []); // [] 적어주어 한번만 로딩되고 끝

  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>loading...</strong> : null}
    </div>
  );
}

export default App;
