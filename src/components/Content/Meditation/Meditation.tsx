import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ReactPlayer from "react-player";

function Meditation() {
  return (
    <>
      <Header />
          <main className="mediaContainer text-light">
              <h1 className="pageTitle">Meditáció</h1>
              <div className="pageMediaContainer">
                  <div className="pageVideoContainer">
                      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} />
                  </div>
                  <div className="pageVideoListContainer">
                      <h6>Nézzen meditációs videókat!</h6>
                      <div className="pageVideoList">
                          <span>A videók itt jelennek majd meg.</span>
                      </div>
                  </div>
              </div>
          </main>
      <Footer />
    </>
  );
}

export default Meditation;
