import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import { ReactComponent as Dogs } from "../Assets/dogs.svg";

function Header() {
  const context = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}

export default Header;
