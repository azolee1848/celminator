import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Video from "../Helpers/Video";

function Motivation() {
  return (
    <>
      <Header />
          <main className="text-light mediaContainer flex-column align-items-center">
              <h1 className="pageTitle">Motiváció</h1>
              <Video videoId={"iX0cCjqbM8E"} />
          </main>
      <Footer />
    </>
  );
}

export default Motivation;
