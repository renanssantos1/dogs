import React from "react";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

import useForm from "../../hooks/useForm";
import { USER_POST } from "../../api";

function LoginCreate() {
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
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
}

export default LoginCreate;
