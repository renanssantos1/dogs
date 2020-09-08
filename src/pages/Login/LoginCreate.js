import React from "react";

import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

import useForm from "../../hooks/useForm";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");

  function handleSubmit(evt) {
    evt.preventDefault();
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
