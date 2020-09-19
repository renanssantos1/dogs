import React from "react";
import { UserContext } from "../../context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

function PhotoComments({ id, comments }) {
  const { login } = React.useContext(UserContext);
  return <div>{login && <PhotoCommentsForm id={id} />}</div>;
}

export default PhotoComments;
