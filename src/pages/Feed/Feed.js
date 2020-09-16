import React from "react";
import FeedModal from "../../components/Feed/FeedModal";
import FeedPhotos from "../../components/Feed/FeedPhotos";

function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
