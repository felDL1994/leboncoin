import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Offer() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + id
      );

      setData(response.data);
      setisLoading(false);
    };

    fetchData();
  }, []);

  return <div className="Offer"></div>;
}

export default Offer;
