import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [pay, setPay] = useState(1);

  const onChange = (event) => {
    setCost(event.target.value);
    setPay(1);
  };

  const handleInput = (event) => {
    setPay(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.center}>
      <h1 className={styles.title}>코인 변환기</h1>
      <div className={styles.sub}>
        {loading ? "" : ` (총 ${coins.length} 가지 코인 선택 가능)`}
      </div>
      {loading ? (
        <strong>로딩중입니다.. 잠시만 기다려주세요!</strong>
      ) : (
        <select onChange={onChange} className={styles.select}>
          <option>코인 종류를 선택해주세요!</option>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <table>
        <tbody>
          <tr>
              <td>
                <div>구매에 사용할 금액을 입력하세요</div>
                <input
                  type="number"
                  value={pay}
                  onChange={handleInput}
                  placeholder="dollor"
                />
              </td>
              <td colSpan={2}> ======> </td>
              <td>
                <div>구매할 수 있는 코인은 다음과 같습니다</div>
                <div>{pay / cost}</div>
              </td>
          </tr>
  
        </tbody>
      </table>
    </div>
  );
}
export default App;
