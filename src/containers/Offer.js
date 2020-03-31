import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + id
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const str = data.created;

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <div className="id--content">
          <div className="card-total">
            <div className="card-id">
              <div className="picture-id">
                <img src={data.pictures} alt="" />
              </div>
              <div className="text-id">
                <h4>{data.title}</h4>
                <p style={{ color: "#f56b2a" }}>{data.price} €</p>
                <p>
                  {str.substr(0, 10)} à {str.substr(11)}
                </p>
              </div>
            </div>
            <div className="description-id">
              <h4>Description</h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolores eos vitae similique perferendis vel ad iure saepe maxime
              soluta dolore, ratione, accusamus veniam beatae dicta nemo
              asperiores, consequatur aut?
            </div>
          </div>
          <div className="author-id">
            <div className="author-content">
              <h3>{data.creator.account.username}</h3>
              <p style={{ color: "#4183d7" }}>
                <strong>17 annonces en ligne</strong>
              </p>
              <button>Acheter</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
