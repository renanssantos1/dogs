import React from "react";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";
import Error from "../../components/Helper/Erro";

import useForm from "../../hooks/useForm";
import { USER_POST } from "../../api";

import { UserContext } from "../../context/UserContext";
import useFetch from "../../hooks/useFetch";

function LoginCreate() {
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  async function handleSubmit(evt) {
    evt.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);

    if (response.ok) {
      await userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
