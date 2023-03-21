
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// Switch가 하는일 : Route를 찾는 것. Route는 /movies/123 예를 들자면 이부분의 url을 의미함
// 그리고 Route를 찾으면 컴포넌트를 렌더링한다.
// 2개의 Route를 만들것임.
// 유저가 홈화면으로 갈때 사용할 Route path="/" 라고 써주면 됨 => 유저가 웹사이트의 "/" url 경로에 있다면 우리는 Home Route를 렌더링 해줄것이며 Home 컴포넌트를 보여주게 될 것이다.

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id"> {/*:id를 주고*/}
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
