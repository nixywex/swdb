import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderTab.module.scss";

const HeaderTab = () => {
  return (
    <>
      <Link to={"persons"} className={styles.item}>
        Persons
      </Link>
      <Link to={"planets"} className={styles.item}>
        Planets
      </Link>
      <Link to={"starships"} className={styles.item}>
        Starships
      </Link>
    </>
  );
};

export default HeaderTab;
