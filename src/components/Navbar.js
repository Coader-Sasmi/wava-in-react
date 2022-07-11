import React from 'react'
import {LOGO} from "../assets"

const Navbar = () =>{
  return (
    <nav className="bg-color">
    <div className="main-container">
        <div className="navbar">

            <div className="nav-logo">
                <img src={LOGO} alt="loading"/>
            </div>
            <div className="nav-right" id="menu">
                <a className="active" href=" ">Home</a>

                <a className="page-scroll" href="#screenshots">Screenshots</a>

                <a className="page-scroll" href="#overview">Overview</a>

                <a className="page-scroll" href="#whyUS">Why Us?</a>

                <a className="page-scroll" href="#describe">Describe</a>

                <a className="page-scroll" href="#download">Download</a>

                <a className="page-scroll" href="#contact">Contact</a>
            </div>

            <div className="checkbtn">
                <i onClick="myFunction()" class="fas fa-bars"></i>
            </div>
        </div>
    </div>
</nav>
  )
}
export default Navbar;