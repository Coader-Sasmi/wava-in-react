import React from 'react'
import { HAND, ANDROID, APPLE } from '../assets';


const Intro = () =>{
  return (
    <div id="introduction">
    <section className="container-1 main-container">
        <div className="hand-img">
            <img src={HAND} alt="loading"/>
        </div>
        <div className="intro">
            <h1 className="intro-h1">
                A Perfect Landing Page to
                <span class="bold"> Showcase </span>
                Your App
            </h1>
            <p className="intro-p">
                Is amazing, modern and clean landing page for showcase your app anything else.
            </p>
            <div className="image">
                <a href=" ">
                    <img src={APPLE} alt="loading"/>
                </a>
                <a href=" ">
                    <img src={ANDROID} alt="loading" class="img-2"/>
                </a>
            </div>
            <a href=" " className="page-scroll">subscribe for our news</a>
        </div>
    </section>
</div>
  )
}
export default Intro;
