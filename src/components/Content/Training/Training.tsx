import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

function Training() {
  return (
    <>
      <Header />
      <main className="d-flex text-light bg-secondary p-5">
        <p>Training</p>
        <NavLink to="/">Vissza</NavLink>
      </main>
      <Footer />
    </>
  );
}

export default Training;
