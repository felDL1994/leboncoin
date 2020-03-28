import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const Header = ({ user, setUser }) => {
  const history = useHistory();
  return (
    <header className="header">
      <div className="container-header">
        <div className="nav-header">
          <div className="nav--header">
            <span>
              <img className="logo" src={Logo} alt="Logo" />
            </span>
            <span>
              <button className="add--header">
                <FontAwesomeIcon icon="plus-square"></FontAwesomeIcon> Déposer
                une annonce
              </button>
            </span>
            <span className="search--header">
              <button>
                <FontAwesomeIcon icon="search"></FontAwesomeIcon> Rechercher
              </button>
            </span>
          </div>

          <span>
            {user === null ? (
              <Link to="/log_in">Se connecter</Link>
            ) : (
              <span className="login--header">
                <button
                  onClick={() => {
                    Cookies.remove("userToken");

                    setUser(null);
                    history.push("/");
                  }}
                >
                  Se déconnecter
                </button>
              </span>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
