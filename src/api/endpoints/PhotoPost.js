import React from "react";

function PhotoPost() {
  const [token, setToken] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [img, setImg] = React.useState("");

  /**
   * 
   *  /*
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE1OTkxNzE4NzMsIm5iZiI6MTU5OTE3MTg3MywiZXhwIjoxNTk5MjU4MjczLCJkYXRhIjp7InVzZXIiOnsiaWQiOiI3NjIifX19.8xwy_Av6pGZsz7EpBzJRzMN0ioJrJmw2SgHOzpbxzVc
  */

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("img", img);
    formData.append("peso", peso);
    formData.append("nome", nome);
    formData.append("idade", idade);

    fetch("https://dogsapi.origamid.dev/json/api/photo", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Token"
          value={token}
          onChange={({ target }) => setToken(target.value)}
        />

        <input
          type="text"
          placeholder="NOME"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />

        <input
          type="text"
          placeholder="peso"
          value={peso}
          onChange={({ target }) => setPeso(target.value)}
        />

        <input
          type="text"
          placeholder="idade"
          value={idade}
          onChange={({ target }) => setIdade(target.value)}
        />

        <input type="file" onChange={({ target }) => setImg(target.files[0])} />

        <button>Enviar</button>
      </form>
    </section>
  );
}

export default PhotoPost;
