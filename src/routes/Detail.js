import { useEffect } from "react";
import { useParams } from "react-router-dom";



function Detail() {
  const { id } = useParams(); // useParams 함수 사용
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };

  // 한번만 실행시킬 것이기 때문에 useEfect 작성
  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}
export default Detail;
