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
              <Link to="/">
                <img className="logo" src={Logo} alt="Logo" />
              </Link>
            </span>
            <span>
              <button className="add--header">
                <FontAwesomeIcon icon="plus-square"></FontAwesomeIcon> Déposer
                une annonce
              </button>
            </span>
            <Link to="/">
              <span className="search--header">
                <button>
                  <FontAwesomeIcon icon="search"></FontAwesomeIcon> Rechercher
                </button>
              </span>
            </Link>
          </div>

          <span>
            {user === null ? (
              <Link to="/log_in">
                <span className="login--header">
                  <FontAwesomeIcon icon="user"></FontAwesomeIcon>
                  <button>Se connecter</button>
                </span>
              </Link>
            ) : (
              <span className="login--header">
                <FontAwesomeIcon icon="user"></FontAwesomeIcon>
                <button
                  onClick={() => {
                    Cookies.remove("userToken");

                    setUser(null);
                    history.push("/log_in");
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
