import React from "react";

function TokenPost() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
        return json;
      });
  };
  //revitalizo //12345678

  /*
  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZG9nc2FwaS5vcmlnYW1pZC5kZXYiLCJpYXQiOjE1OTkxNzE4NzMsIm5iZiI6MTU5OTE3MTg3MywiZXhwIjoxNTk5MjU4MjczLCJkYXRhIjp7InVzZXIiOnsiaWQiOiI3NjIifX19.8xwy_Av6pGZsz7EpBzJRzMN0ioJrJmw2SgHOzpbxzVc
  */
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Enviar</button>
        <p style={{ wordBreak: "break-all" }}>{token}</p>
      </form>
    </section>
  );
}

export default TokenPost;
