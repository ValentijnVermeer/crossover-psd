import React from 'react'
import "./SectionJohnDoe.css";
import Star from "../../assets/star.png"
import Stroke3 from "../../assets/stroke3.png"
import ArrowLeft from "../../assets/arrow-left.png"
import ArrowRight from "../../assets/arrow-right.png"

const SectionJohnDoe = () => {
  return (
    <section className='sectionjohndoe-wrapper'>
    <img src={ArrowLeft} alt="" />
    <div className='sectionjohndoe-wrapper-content'>
    <div className='sectionjohndoe-image-wrapper'>
    <img src={Star} alt="" className='sectionjohndoe-image'/>
    </div>
    <h2 className='sectionjohndoe-h2'><span className='purple'>John</span> Doe</h2>
    <div className='sectionjohndoe-p-wrapper'>
    <p className='sectionjohndoe-p'>
        <span className='purple'>Lorem ipsum dolor sit amet</span> consectetur adipisicing elit. Molestiae, amet unde? At, dignissimos illum? Voluptate blanditiis illo fugit facilis doloremque quis quidem ullam in saepe.
    </p>
    </div>
    <img src={Stroke3} alt="" />
    </div>
    <img src={ArrowRight} alt="" />
    </section>
  )
}

export default SectionJohnDoe