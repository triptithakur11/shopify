import React from 'react'
import './Hero.css'
import handicon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import heroimage from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="heroleft">
        <h2> NEW ARRIVALS</h2>
        <div>
            <div className="handicon">
                <p>new</p>
                <img src={handicon}/>
            </div>
            <p>collections</p>
            <p>for everyone.</p>
        </div>
        <div className="herollatestbutton">
           <div>Latest Collections</div>
            <img src={arrow}/>
        </div>
      </div>
      <div className="heroright">
        <img src={heroimage}/>
      </div>
    </div>
  )
}

export default Hero
