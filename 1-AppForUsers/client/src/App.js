import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import User from "./components/User";
import Login from "./components/Login";
import Register from "./components/Register";
import Sorry from "./components/Sorry";
import { Config } from "./components/Config";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/sorry" component={Sorry} />
          <Route exact path="/user/:id/:idu" component={Config} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
