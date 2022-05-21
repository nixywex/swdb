import React from "react";

import HeaderTab from "../HeaderTab/HeaderTab";

import styles from "./HeaderTabs.module.scss";

const HeaderTabs = () => {
  return (
    <nav className={styles.tabs}>
      <ul className={styles.list}>
        <HeaderTab />
      </ul>
    </nav>
  );
};

export default HeaderTabs;
