import React from "react";

function PhotoGet() {
  const [id, setId] = React.useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/api/photo/" + id)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(json);
        return json;
      });
  };
  //229  231  233
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={id}
          onChange={({ target }) => setId(target.value)}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default PhotoGet;
