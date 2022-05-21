import React from "react";

import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderTabs from "../HeaderTabs/HeaderTabs";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <HeaderTabs />
    </header>
  );
};

export default Header;
