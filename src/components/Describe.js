import React from "react";
import { RMB, RMF } from "../assets";

const Describe = () => {
  return (
    <section id="describe">
      <div className="container-7 main-container">
        <div className="phones-right">
          <div className="phones">
            <img src={RMF} alt="wava" className="phones-right-img-1" />
            <img src={RMB} alt="wava" className="phones-right-img-2" />
          </div>
          <div className="phones-text lg:pt-11">
            <h2>
              Describe Your
              <span className="phones-text-bold text-xl lg:text-4xl font-medium">
                {" "}
                Best Feature
              </span>{" "}
              From The App
            </h2>
            <p className="phones-right-p pt-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="phones-right-p">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Describe;
