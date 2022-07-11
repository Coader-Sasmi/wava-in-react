import React from 'react'
import { BOOKING, CAMERA, DT, F_BOOK, F_MOB, G_PLUS, PINT, TWTR, WEBSITE } from '../assets';

const Features = () =>{
  return (
      <>
      <div className="container-3 main-container">
        <div className="titleSection">
            <h2>WAVA Offers A Wide Range Of <span className="bold">Features</span></h2>
            <p>Is amazing, modern and clean landing page for<br/> showcase your app anything else.</p>
        </div>
    </div> 
    <div className="container-4 main-container">

        <div className="leftside">
            <div className="leftfeatures">
                <img src={DT} alt="loading" className="f-img"/>
                <h4 className="ov-h4">Creative Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi enim, vulputate at justo
                    tristique</p>
            </div>

            <div className="leftfeatures">
                <img src={WEBSITE} alt="loading" class="f-img"/>
                <h4 className="ov-h4">Cross-Browser Support</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi enim, vulputate at justo
                    tristique
                </p>
            </div>
        </div>
        <div className="middle-features">
            <img src={F_MOB} alt="loading" className="middle"/>
        </div>
        <div className="rightside">
            <div className="rightfeatures">
                <img src={BOOKING} alt="loading" className="f-img"/>
                <h4 className="ov-h4">Pure & Simple</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi enim, vulputate at justo
                    tristique</p>
            </div>

            <div className="rightfeatures">
                <img src={CAMERA} alt="loading" className="f-img"/>
                <h4 className="ov-h4">Color schemes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisi enim, vulputate at justo
                    tristique
                </p>
            </div>
        </div>
    </div>
    <div className="container-5">
        <div className="main-container">
            <h2 className="share-h2">Share Your <span className="bold">Favorite Mobile Apps</span> With<br/>Your Friends</h2>
        </div>

        <div className="social-media">
            <div>
                <img src={TWTR} alt="loading" className="social-media-icon"/>
            </div>
            <div>
                <img src={F_BOOK} alt="loading" className="social-media-icon"/>
            </div>
            <div>
                <img src={G_PLUS} alt="loading" className="social-media-icon"/>
            </div>
            <div>
                <img src={PINT} alt="loading" className="social-media-icon"/>
            </div>
        </div>
    </div>
      </>
  )
}
export default Features;