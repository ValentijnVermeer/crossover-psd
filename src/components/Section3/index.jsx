import React from "react";
import "./Section3.css";
import Stroke from "../../assets/stroke.png" 
import Stroke2 from "../../assets/stroke2.png" 
import PaperTear from "../../assets/paper-tear.png"

const Section3 = () => {
  return (
    <section className="section3-wrapper">
    <img src={PaperTear} alt="" />
    <div className="section3-top">
        <div className="section3-headline purple">01/03</div>
        <img src={Stroke2} className="section3-wrapper-image2"/>
    </div>

    <div className="section3-main-content-wrapper">
    <img src={Stroke} className="section3-wrapper-image"/>
    <div className="section3-headline-wrapper">
    <div className="section3-first-column-first-headline-wrapper">
          <div className="section3-first-column-headline">
            A place to quench your thirst for music
          </div>
        </div>

        <div className="section3-first-column-second-headline-wrapper">
          <div className="section3-second-column-headline">
            Party out with us for three days!
          </div>
        </div>

    </div>
    
    <div className="section3-column-wrapper">
      <div className="section3-first-column">
        

        <div className="section3-first-column-p">
            
          <span className="purple">Lorem ipsum dolor sit amet</span> consectetur adipisicing elit. In, fugiat?
        </div>
      </div>
      <div className="section3-second-column">
        <div className="section3-second-column-p">
        <span className="purple">Lorem ipsum dolor sit amet</span>, consectetur adipisicing elit. Repellat,
          dolorem?
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Section3;
