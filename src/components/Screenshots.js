import React from "react";
import { B_LOGO } from "../assets";

const Screenshots = () => {
  return (
    <div id="screenshots">
      <section className="main-container  flex flex-col justify-center items-center gap-y-10">
        <img src={B_LOGO} alt="loading" className="big-logo" />
        <h2 className="scr-h2">
          The Best Start Up For Your <span className="bold">Elegant</span> App
        </h2>
        {/* lg:text-5xl */}
        <div className="downloadNumber">
          <span className="number">245,563</span>
          Downloads
        </div>
      </section>
    </div>
  );
};
export default Screenshots;
