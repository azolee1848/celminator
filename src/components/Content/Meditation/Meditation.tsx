import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Video from "../Helpers/Video";

function Meditation() {
  return (
    <>
      <Header />
          <main className="text-light mediaContainer flex-column align-items-center">
              <h1 className="pageTitle">Meditáció</h1>
              <Video videoId={"nE-wSTGk8Ew"}/>
          </main>
      <Footer />
    </>
  );
}

export default Meditation;
