import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import GoalsStripes from "./GoalsStripes";

function Goals() {
  return (
    <>
      <Header />
      <main className="d-flex flex-wrap text-light bg-secondary p-5 goalsContainer">
            <h1 id="goalsTitle">Céljaim</h1>
            <GoalsStripes />
      </main>
      <Footer />
    </>
  );
}

export default Goals;
