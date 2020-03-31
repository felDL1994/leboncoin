import React, { useState, useEffect } from "react";
import { useParams, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Add = () => {
  return (
    <div className="publish-card">
      <div className="title">DÉPOSER UNE ANNONCE</div>
      <form>
        <p>Titre de l'annonce *</p>
        <input type="text" />
        <p>Texte de l'annonce *</p>
        <textarea rows="8" type="text" />
        <p>Prix *</p>
        <input type="number" />
        <p>Photo *</p>
        <input type="file" />
        <input value="Valider" type="submit" />
      </form>
    </div>
  );
};

export default Add;
