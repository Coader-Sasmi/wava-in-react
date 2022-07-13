import React from "react";
import { DESIGN, HAPPY, MBG, RES } from "../assets";

const Overview = () => {
  return (
    <section id="overview">
      <div className="container-2 main-container">
        <div className="titleSection">
          <h2 className="titleSection-h2">
            Present Your App To The World With{" "}
            <span className="bold">WAVA</span>
          </h2>
          <p className="pt-10">
            Is amazing, modern and clean landing page for <br /> showcase your
            app anything else.
          </p>
        </div>
        <div className="pt-10">
          <img src={MBG} alt="loading" className="mob-bg" />
        </div>
        <div className="overview-column">
          <div className="item-1 flex justify-center items-center flex-col gap-y-5">
            <img src={RES} alt="loading" className="o-img" />
            <h4 className="ov-h4">Full Responsive</h4>
            <p className="ov-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              nisi enim, vulputate at justo tristique
            </p>
          </div>
          <div className="item-2 flex justify-center items-center flex-col gap-y-5">
            <img src={HAPPY} alt="loading" className="o-img" />
            <h4 className="ov-h4">Well Documented</h4>
            <p className="ov-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              nisi enim, vulputate at justo tristique
            </p>
          </div>
          <div className="item-3 flex justify-center items-center flex-col gap-y-5">
            <img src={DESIGN} alt="loading" className="o-img" />
            <h4 className="ov-h4">Clean Design</h4>
            <p className="ov-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              nisi enim, vulputate at justo tristique
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Overview;
