import React from "react";

import HeaderTabs from "../HeaderTabs/HeaderTabs";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Hello! Welcome to SWDB</h1>
      <p className={styles.description}>
        Here you can find out a lot of information about your favorite
        characters, ships or planets from the Star Wars universe. To learn more,
        select one of the categories:
      </p>
      <HeaderTabs />
    </div>
  );
};

export default Main;
