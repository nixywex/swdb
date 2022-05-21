import React from "react";
import { Link } from "react-router-dom";

import styles from "./ListItem.module.scss";

const ListItem = ({ item }) => {
  return (
    <Link to={`${item.id}`}>
      <li className={styles.item}>{item.name}</li>
    </Link>
  );
};

export default ListItem;
