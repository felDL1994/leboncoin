import React from "react";
import Cookies from "js-cookie";
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
                    nouvelle annonce
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
                    l'annonce qui vous intéresse
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
            <p>Pseudo *</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <p>Adresse email *</p>
            <p>Mot de passe *</p>
          </div>

          <div>
            <button
              onClick={() => {
                const token = "1234";
                Cookies.set("userToken", token, { expires: 3000 });
              }}
            >
              S'enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
