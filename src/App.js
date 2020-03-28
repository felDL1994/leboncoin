import React, { useState } from "react";
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
import Cookies from "js-cookie";
import "./App.css";

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }

  const [user, setUser] = useState({ newState });

  return (
    <div className="App">
      <Router>
        {user === null ? <Redirect to="/sign_up"></Redirect> : null}

        <header>
          <p>Logo</p>

          {user === null ? (
            <Link to="/log_in">Se connecter</Link>
          ) : (
            <button
              onClick={() => {
                Cookies.remove("userToken");
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          )}
        </header>

        <Switch>
          <Route path="/sign_up">
            <SignUp></SignUp>
          </Route>
          <Route path="/log_in">
            <Login setUser={setUser}>Se connecter!</Login>
          </Route>
          <Route path="/offer/:id">
            <Offer></Offer>
          </Route>
          <Route path="/">
            <Offers></Offers>
          </Route>
        </Switch>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
