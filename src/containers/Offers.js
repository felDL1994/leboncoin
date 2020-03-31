import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Offers() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(async () => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <div className="container--item">
          <div className="search-container">
            <div className="elipsis-container">
              <div />
            </div>
            <div className="search-bar">
              <form>
                <div className="search-input">
                  <input placeholder="Que recherchez-vous ?" type="text" />
                  <FontAwesomeIcon
                    className="form-search-icon"
                    icon="search"
                    size="1x"
                  />
                </div>

                <input type="submit" value="Rechercher" name="search" />
              </form>
            </div>
          </div>

          {data.offers.map((offer, index) => {
            const str = offer.created;

            if (offer.pictures.length === 0) {
              return null;
            }
            return (
              <div className="card--item">
                <div className="card-item">
                  <div className="card--item--picture">
                    <img
                      src={offer.pictures}
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                  <div className="card--item--text">
                    <Link to={"/offer/" + offer._id}>
                      <div className="item-description" key={offer._id}>
                        <h3>{offer.title}</h3>

                        <p className="price">
                          <strong>{offer.price + " €"}</strong>
                        </p>
                        <p style={{ color: "grey" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sed vitae unde doloribus itaque velit, illo
                          mollitia molestias necessitatibus illum iure eveniet
                          accusantium distinctio incidunt aliquam.
                        </p>
                        <h6>
                          Créer le : {str.substr(0, 10)} à {str.substr(11)}
                        </h6>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Offers;
