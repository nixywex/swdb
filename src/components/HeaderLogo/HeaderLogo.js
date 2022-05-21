import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return (
    <div>
      <h1>
        <Link className={styles.logo} to="/">
          SWDB
        </Link>
      </h1>
    </div>
  );
};

export default HeaderLogo;
