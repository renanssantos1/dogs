import React from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

import useForm from "../../hooks/useForm";

import { UserContext } from "../../context/UserContext";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
