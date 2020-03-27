import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Offers></Offers>
          </Route>
          <Route path="offer/:id">
            <Offer></Offer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
