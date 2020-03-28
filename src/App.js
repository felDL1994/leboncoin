import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Header from "./components/Header";
import Cookies from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlusSquare, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faPlusSquare, faSearch);

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }

  const [user, setUser] = useState(newState);

  return (
    <div className="App">
      <Router>
        {/* {user === null ? <Redirect to="/" /> : null} */}
        <Header user={user} setUser={setUser}></Header>

        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>

          <Route path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/log_in">
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
        <footer>FOOTER</footer>
      </Router>
    </div>
  );
}

export default App;
