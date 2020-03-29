import React from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup--container">
        <div className="signup-text">
          <h3>Pourquoi créer un compte ?</h3>
          <div className="signup-text-text">
            <div className="signup--text">
              <div className="rowdiv">
                <div className="signup-icon">
                  <FontAwesomeIcon icon="clock"></FontAwesomeIcon>
                </div>
                <div className="signup-reason">
                  <h4>Gagner du temps</h4>
                  <p>
                    Publiez vos annonces rapidement avec vos informations
                    pré-remplies chaque fois que vous souhaitez déposer une
                    nouvelle annonce.
                  </p>
                </div>
              </div>
            </div>
            <div className="signup--text">
              <div className="rowdiv">
                <div className="signup-icon">
                  <FontAwesomeIcon icon="bell"></FontAwesomeIcon>
                </div>
                <div className="signup-reason">
                  <h4>Soyez les premiers informés</h4>
                  <p>
                    Créez des alertes Immo ou Emploi et ne manquez jamais
                    l'annonce qui vous intéresse.
                  </p>
                </div>
              </div>
            </div>

            <div className="signup--text">
              <div className="rowdiv">
                <div className="signup-icon">
                  <FontAwesomeIcon icon="eye"></FontAwesomeIcon>
                </div>
                <div className="signup-reason">
                  <h4>Visibilité</h4>
                  <p>
                    Suivez les statistiques de vos annonces (nombre de fois où
                    votre annonce a été vue, nombre de contacts reçus).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="create--container">
          <h3>Créer un compte</h3>
          <div className="form">
            <p>Pseudo*</p>
            <textarea name="" id="" cols="56" rows="1"></textarea>
            <p>Adresse email*</p>
            <textarea name="" id="" cols="56" rows="1"></textarea>

            <div className="pw">
              <div className="pw--create">
                <p>Mot de passe*</p>
                <textarea name="" id="" cols="24" rows="1"></textarea>
              </div>
              <div className="pw--confirm">
                <p>Confirmer le mot de passe*</p>
                <textarea name="" id="" cols="24" rows="1"></textarea>
              </div>
            </div>
          </div>

          <div className="cgv">
            <span>
              <input type="checkbox" />
              "J'accepte les{" "}
              <span className="em">Conditions Générales de Vente</span> et les{" "}
              <span className="em">Conditions Générales d'Utilisation</span>"
            </span>
          </div>
          <Link to="/">
            <div className="confirm--create">
              <button
                onClick={() => {
                  const token = "1234";
                  Cookies.set("userToken", token, { expires: 3000 });
                }}
              >
                Créer mon Compte Personnel
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
