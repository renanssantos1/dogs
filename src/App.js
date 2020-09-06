import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStorage } from "./context/UserContext";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <main>
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </main>
  );
}

export default App;
