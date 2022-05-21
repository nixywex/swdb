import React from "react";

import styles from "./ListItem.module.scss";

const ListItem = ({ item, currentItemID, setCurrentItemID }) => {
  return (
    <li
      onClick={() => {
        setCurrentItemID(item.id);
      }}
      data-active={currentItemID === item.id}
      className={styles.item}
    >
      {item.name}
    </li>
  );
};

export default ListItem;
