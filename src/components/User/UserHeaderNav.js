import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function UserHeaderNav() {
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav>
      <NavLink to="/conta">Minhas Fotos</NavLink>
      <NavLink to="/conta/estatisticas"> Estatisticas</NavLink>
      <NavLink to="/conta/postar">Adicionar foto</NavLink>
      <button onClick={userLogout}>Sair</button>
    </nav>
  );
}

export default UserHeaderNav;
