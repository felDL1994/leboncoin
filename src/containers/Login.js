import React from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";

const Login = props => {
  const history = useHistory();
  return (
    <div className="container-login">
      <div className="container--login">
        <div className="text-connexion--login">
          <h2>Connexion</h2>
        </div>
        <div className="text--login">
          <p>Addresse email</p>
          <textarea name="" id="" cols="96" rows="1"></textarea>
          <p>Mot de passe</p>
          <textarea name="" id="" cols="96" rows="1"></textarea>
        </div>
        <button
          onClick={() => {
            const token = "1234";

            Cookies.set("userToken", token, { expires: 2000 });

            props.setUser({
              token: token
            });

            history.push("/");
          }}
        >
          <h3>Se connecter</h3>
        </button>
        <div className="create-login">
          <p>Vous n'avez pas de compte ?</p>
          <Link to="/sign_up">
            <span className="create--login">
              <button>Créer un compte</button>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
