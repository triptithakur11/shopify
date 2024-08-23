import React from 'react'
import './Footer.css'
import footerlogo from '../../Assets/logo_big.png'
import instagramicon from '../../Assets/instagram_icon.png'
import pintersticon from '../../Assets/pintester_icon.png'
import whatsappicon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerlogo'>
        <img src={footerlogo}/>
        <p>Shopify</p>
      </div>
<div className="footerlinks">
    <ul>
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
</div>
<div className="footersocialicon">
    <div className="footericoncontainer">
        <img src={instagramicon}/>
    </div>
    <div className="footericoncontainer">
        <img src={pintersticon}/>
    </div>
    <div className="footericoncontainer">
        <img src={whatsappicon}/>
    </div>
</div>
<div className="footercopyright">
    <hr/>
    <p>Copyright @ 2024 -All Rights Reserved.</p>
</div>
    </div>
  )
}

export default Footer
