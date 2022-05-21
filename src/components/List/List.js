import React from "react";

import ListItem from "../ListItem/ListItem";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import styles from "./List.module.scss";

const List = ({ data, error }) => {
  if (error) {
    return <Error />;
  }

  return (
    <ul className={styles.list}>
      {!data.length ? (
        <Loader />
      ) : (
        data.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })
      )}
    </ul>
  );
};

export default List;
