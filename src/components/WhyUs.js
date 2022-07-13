import React from "react";
import { LMB, LMF } from "../assets";

const WhyUs = () => {
  return (
    <section id="whyUS">
      <div className="container-6">
        <div className="phones-left main-container">
          <div className="phones">
            <img src={LMF} alt="Loading" className="phones-img-1" />
            <img src={LMB} alt="Loading" className="phones-img-2" />
          </div>
          <div className="phones-text pt-11">
            <h2 className="text-4xl tracking-normal">
              What Did You Receive With WAVA <br />
              <span className="phones-text-bold">Showcase</span>
            </h2>
            <p className="phones-p pt-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              nisi enim, vulputate at justo tristique.
            </p>
            <ul>
              <li>
                <i className="fa fa-check"></i>
                <span class="check-text">Beautiful, modern design</span>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <span>Cool animations</span>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <span>HTML5 and CSS3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
