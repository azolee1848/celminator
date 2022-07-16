import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Video from "../Helpers/Video";

function Training() {
  return (
    <>
      <Header />
          <main className="text-light mediaContainer flex-column align-items-center">
              <h1 className="pageTitle">Tréning</h1>
              <Video videoId={"yqXRJ4h6opA"} />
          </main>
      <Footer />
    </>
  );
}

export default Training;
