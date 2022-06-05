import { Switch, Route } from "react-router-dom";
import Dash from "./components/Dash";
import Home from "./components/Home";

function App() {
  return (
    <div className=" w-screen h-screen m-0 flex">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dash" component={Dash} />
      </Switch>
    </div>
  );
}

export default App;
