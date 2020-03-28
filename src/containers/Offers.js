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
        <div>
          {data.offers.map((offer, index) => {
            return (
              <Link to={"/offer/" + offer._id}>
                <div key={offer._id}>{offer.title}></div>;
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Offers;
