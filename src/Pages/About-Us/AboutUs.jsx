import React from "react";
import AboutUsPic from './Assests/asset 0.jpeg'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <>
    <div className="container-main-page">
    <section id="About">
        <div class="about-img">
          <img src={AboutUsPic} alt="" />
        </div>
        <div class="about-text">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh
            sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus
            suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam,
            rhoncus sagittis metus semper quis. Praesent convallis mauris sed
            ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a
            volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi
            nec scelerisque auctor
          </p>
        </div>
        
      </section>
    </div>
    </>
  );
}
