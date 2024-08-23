import React from 'react';
import './breadcrum.css';
import arrow from '../Assets/arrow.png';

const Breadcrumbs = (props) => {
  const { product } = props;

  if (!product || !product.category || !product.name) {
    return null; 
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow} alt="Arrow pointing right" /> 
      SHOP <img src={arrow} alt="Arrow pointing right" /> 
      {product.category} <img src={arrow} alt="Arrow pointing right" /> 
      {product.name}
    </div>
  );
};

export default Breadcrumbs;
