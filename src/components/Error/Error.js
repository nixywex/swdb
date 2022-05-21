import React from "react";

import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.body}>
      <img width={200} src="../vader.svg" alt="" />
      <h1 className={styles.title}>Something happened...</h1>
      <p className={styles.subtitle}>
        Maybe Darth Vader broke our server. The droids are already fixing it...
      </p>
    </div>
  );
};

export default Error;
