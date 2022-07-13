import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import GoalsStripes from "./GoalsStripes";

function Goals() {
  return (
    <>
      <Header />
      <main className="d-flex text-light bg-secondary p-5">
        <GoalsStripes />
      </main>
      <Footer />
    </>
  );
}

export default Goals;
