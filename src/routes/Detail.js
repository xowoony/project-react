import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams(); // useParams 함수 사용
  console.log(id);
  return <h1>Detail</h1>;
}
export default Detail;
