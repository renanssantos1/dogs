import React from "react";
import { Link } from "react-router-dom";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

import useForm from "../../hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";

async function getUser(token) {
  const { url, options } = USER_GET(token);
  const response = await fetch(url, options);
  const json = await response.json();

  console.log(json);
}

function LoginForm() {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      getUser(token);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });

    if (username.validate() && password.validate()) {
      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem("token", json.token);
      getUser(json.token);
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
