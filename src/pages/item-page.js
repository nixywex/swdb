import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { getAllFunctions } from "../data";

import Item from "../components/Item/Item";

const ItemPage = ({ type }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const functions = getAllFunctions(type);

  const styles = {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "80px",
  };

  useEffect(() => {
    functions
      .getSingle(id)
      .then((res) => setData(res))
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div style={styles}>
      <Item data={data} type={type} error={error} />
    </div>
  );
};

export default ItemPage;
