import React from 'react'
import './offers.css'
import exlusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offersleft">
<h1>Exclusive</h1>
<h1>Offers For You.</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
        </div>
      <div className="offersright">
<img src={exlusive_image}/>
      </div>
    </div>
  )
}

export default Offers
