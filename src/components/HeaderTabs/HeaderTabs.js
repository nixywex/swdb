import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderTabs.module.scss";

const HeaderTabs = () => {
  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        <li>
          <Link className={styles.item} to={"persons"}>
            Persons
          </Link>
        </li>
        <li>
          <Link className={styles.item} to={"planets"}>
            Planets
          </Link>
        </li>
        <li>
          <Link className={styles.item} to={"starships"}>
            Starships
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTabs;
