import React from "react";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import RandomItemContent from "../RandomItemContent/RandomItemContent";

import styles from "./RandomItem.module.scss";

const RandomItem = ({ data, error }) => {
  return (
    <div className={styles.item}>
      {error ? (
        <Error />
      ) : !data ? (
        <Loader />
      ) : (
        <RandomItemContent data={data} />
      )}
    </div>
  );
};

export default RandomItem;
