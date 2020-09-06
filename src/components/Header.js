import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login / Criar</Link>
        </li>
      </nav>
    </div>
  );
}

export default Header;
