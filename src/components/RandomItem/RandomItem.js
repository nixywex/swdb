import React from "react";

import Item from "../Item/Item";

import styles from "./RandomItem.module.scss";

const RandomItem = ({ data, error, type }) => {
  return (
    <div className={styles.item}>
      <Item data={data} error={error} type={type} />
      <p className={styles.randomText}>Random {type}</p>
    </div>
  );
};

export default RandomItem;
