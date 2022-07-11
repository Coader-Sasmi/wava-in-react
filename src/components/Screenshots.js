import React from 'react'
import { B_LOGO } from '../assets';

const Screenshots = () =>{
  return (
    <div id="screenshots">
    <section className="main-container">

        <img src={B_LOGO} alt="loading" className="big-logo"/>
        <h2 className="scr-h2">The Best Start Up For Your <span className="bold">Elegant</span> App</h2>
        <div className="downloadNumber">
            <span className="number">245,563</span>
            Downloads
        </div>
    </section>
</div>
  )
}
export default Screenshots;