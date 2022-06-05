import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dash from "./components/Dash";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dash" component={Dash} />
      </Switch>
    </div>
  );
}

export default App;
