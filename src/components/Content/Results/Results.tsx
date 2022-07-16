import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResultsCounters from "./ResultsCounters";

function Results() {
  return (
    <>
      <Header />
          <main className="mediaContainer text-light flex-column">
                <h1 className={"pageTitle"}>Eddig elért eredményeim</h1>
                <ResultsCounters/>
          </main>
      <Footer />
    </>
  );
}

export default Results;
