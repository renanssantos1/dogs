import React from "react";
import UserPost from "./endpoints/UserPost";
import TokenPost from "./endpoints/TokenPost";
import PhotoPost from "./endpoints/PhotoPost";
import PhotoGet from "./endpoints/PhotoGet";

import styles from "./Api.module.css";

function Api() {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "70rem",
        margin: "0 auto",
        flexWrap: "wrap",
      }}
    >
      <div
        className={styles.shadow}
        style={{
          flex: "1 0 180px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <h1>User Post</h1>
        <UserPost />
      </div>
      <div
        className={styles.shadow}
        style={{
          flex: "1 0 180px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <h2>Token post</h2>
        <TokenPost />
      </div>
      <div
        className={styles.shadow}
        style={{
          flex: "1 0 180px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <h2>PhotoPost</h2>
        <PhotoPost />
      </div>

      <div
        className={styles.shadow}
        style={{
          flex: "1 0 180px",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <h2>PhotoGet</h2>
        <PhotoGet />
      </div>
    </div>
  );
}

export default Api;
