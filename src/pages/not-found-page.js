import React from "react";

import styles from "../components/Error/Error.module.scss";

const NotFound = () => {
  return (
    <div className={styles.body}>
      <img height={200} src="../stars.svg" alt="" />
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.subtitle}>
        Nothing found in a galaxy far, far away...
      </p>
    </div>
  );
};

export default NotFound;
