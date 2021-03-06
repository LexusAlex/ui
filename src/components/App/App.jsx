import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from "../Menu";
import HomePage from "../HomePage";
import Join from "../Join";
import Footer from "../Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path={"/"}>
            <Menu/>
            <HomePage/>
            <Footer/>
          </Route>
          <Route exact path="/join">
            <Join/>
          </Route>
          <Route path={"*"}>
            notfound
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
