import React from 'react'
import './popular.css'
import data_product from '../Assets/data'

const ProductItem = ({ id, name, image, newprice, oldprice }) => {
  return (
    <div className='product-item' key={id}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>New Price: {newprice}</p>
      <p>Old Price: <del>{oldprice}</del></p>
    </div>
  );
};

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1> 
      <hr/>
      <div className="popularitem">
        {data_product.map((item) => (
          <ProductItem 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            newprice={item.new_price} 
            oldprice={item.old_price} 
          />
        ))}
      </div>
    </div>
  )
}

export default Popular;
