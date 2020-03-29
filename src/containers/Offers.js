import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          <h1>items</h1>
          {data.offers.map((offer, index) => {
            return (
              <div className="card--item">
                <div className="card--item--picture">
                  <img
                    src={offer.pictures}
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
                <div className="card--item--text">
                  <Link to={"/offer/" + offer._id}>
                    <div key={offer._id}>
                      <p>{offer.title}</p>
                      <p>{offer.description}</p>
                    </div>
                  </Link>
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
