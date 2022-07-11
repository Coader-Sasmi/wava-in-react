import React from 'react'
import { ANDROID, APPLE, D_MOB } from '../assets';

const Download = () =>{
  return (
    <section id="download"> 
    <div className="container-8 main-container">
        <div>
            <img src={D_MOB} alt="download" className="downloadimg"/>
        </div>
        <div className="downloadtxt">
            <h2>Get Your Free Download Of <span className="phones-text-bold">WAVA</span> App <br/><span className="bigWord">TODAY!</span>
            </h2>
            <div className="downloadtxt-image">
                <a href=" ">
                    <img src={APPLE} alt="apple"/>
                </a>
                <a href=" ">
                    <img src={ANDROID} alt="android"/>
                </a>
            </div>
            <h3 className="downloadh3">Stay informed with our news letter</h3>
            <form action="submit" className="subscriptionbox">
                <input type="email" placeholder="Your Email"/>
                <button type="submit" className="btn">Subscribe</button>
            </form>

        </div>
    </div>
</section>
  )
}
export default Download;