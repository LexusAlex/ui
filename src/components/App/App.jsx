import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from "../Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>
        <Switch>
          <Route exact path={"/"}>
            home
            <div className="uk-child-width-expand@s uk-text-center" uk-grid={""}>
              <div>
                <div className="uk-card uk-card-default uk-card-body">Item</div>
              </div>
              <div>
                <div className="uk-card uk-card-default uk-card-body">Item</div>
              </div>
            </div>
          </Route>
          <Route exact path="/join">
            join
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
