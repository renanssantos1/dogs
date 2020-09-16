import React from "react";
import styles from "./FeedPhotos.module.css";
import FeedPhotosItem from "./FeedPhotosItem";

import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api";

import Error from "../../components/Helper/Erro";
import Loading from "../../components/Helper/Loading";

function FeedPhotos({ setModalPhoto }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });

      const { response, json } = await request(url, options);

      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${styles.feed}  animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            setModalPhoto={setModalPhoto}
            key={photo.id}
            photo={photo}
          />
        ))}
      </ul>
    );
  else return null;
}

export default FeedPhotos;
