import React from "react";

import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles["loadingio-spinner-eclipse-05cc0rvepti9"]}>
        <div className={styles["ldio-3bbec23i42"]}>
          <div />
        </div>
      </div>
      <div className={styles.title}>Loading</div>
    </div>
  );
};

export default Loader;
