import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ResultsCounters from "./ResultsCounters";

function Results({database}: any) {

    let items = [];

    if (database.length>0) {
        items = database;
    }

    return (
    <>
      <Header />
          <main className="mediaContainer text-light flex-column">
                <h1 className={"pageTitle"}>Megszerzett medálok</h1>
                <ResultsCounters items={items} />
          </main>
      <Footer />
    </>
  );
}

export default Results;
