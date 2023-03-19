import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true); // 기본값 true

  // 한번만 실행됨
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);


  return <div>{loading ? <h3>로딩 중...</h3> : null}</div>;
}

export default App;
