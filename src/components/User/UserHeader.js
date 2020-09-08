import React from "react";
import UserHeaderNav from "./UserHeaderNav";

import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

function UserHeader() {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta/postar":
        setTitle("Adicionar foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta":
        setTitle("Minhas Fotos");
        break;
      default:
        setTitle("Minha conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}

export default UserHeader;
