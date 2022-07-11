import React from 'react'
import { FOOTER } from '../assets';

const Footer = () =>{
  return (
    <footer>
    <div className="fooTer main-container">
        <a href="#page-top">
            <img src={FOOTER} alt="WAVA" className="fooTer-img"/>
        </a>
        <ul className="socialList">
            <li>
                <a href=" ">
                    <i className="fa fa-facebook"></i>
                    <span className="hidden-f"> Facebook </span>
                </a>
            </li>
            <li>
                <a href=" ">
                    <i className="fa fa-twitter"></i>
                    <span className="hidden-f"> Twitter </span>
                </a>
            </li>
            <li>
                <a href=" ">
                    <i className="fa fa-linkedin"></i>
                    <span className="hidden-f"> Linkedin </span>
                </a>
            </li>
            <li>
                <a href=" ">
                    <i className="fa fa-dribbble"></i>
                    <span className="hidden-f"> Dribbble </span>
                </a>
            </li>
            <li>
                <a href=" ">
                    <i className="fa fa-github"></i>
                    <span className="hidden-f"> Github </span>
                </a>
            </li>
        </ul>
        <hr/>
        <p>&copy; WAVA DESIGN BY MIXDESIGN </p>
    </div>
</footer>
  )
}
export default Footer;