import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarFoto } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">
        <MinhasFotos />
        Minhas Fotos
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        Estatisticas
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarFoto />
        Adicionar foto
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        Sair
      </button>
    </nav>
  );
}

export default UserHeaderNav;
