import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Video from "../Helpers/Video";

function Inspiration() {
  return (
    <>
      <Header />
          <main className="text-light mediaContainer flex-column align-items-center">
            <h1 className="pageTitle">Inspiráció</h1>
            <Video videoId={"h89uOvUDVO4"}/>
          </main>
      <Footer />
    </>
  );
}

export default Inspiration;
