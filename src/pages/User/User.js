import React from "react";
import UserHeader from "../../components/User/UserHeader";
import { Routes, Route } from "react-router-dom";

import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

function User() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />

        <Route path="posta" element={<UserPhotoPost />} />
        <Route path="posta" element={<UserStats />} />
      </Routes>
    </section>
  );
}

export default User;
