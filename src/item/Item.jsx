import React from 'react';
import { Link } from 'react-router-dom'; 
import './Item.css';

const Item = (props) => {
  return (
    <div className='item'>
      <img 
        onClick={() => window.scrollTo(0, 0)} 
        src={props.image} 
        alt={props.name} 
      />
      <p>{props.name}</p>
      <div className="itemprices">
        <div className="itempricenew">
          ${props.newprice}
        </div>
        {props.oldprice && (
          <div className="itempriceold">
            ${props.oldprice}
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
