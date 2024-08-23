import React, { useContext } from 'react';
import './Pd.css';
import star from '../../Assets/star_icon.png';
import dullstar from '../../Assets/star_dull_icon.png';
import { ShopContext } from '../../Contexts/ShopContext';

const Pd = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext); // Ensure 'addToCart' is used correctly

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='productdisplay'>
      <div className="pdleft">
        <div className="pddisplayimagelist">
          <img src={product.image} alt={product.name} />
          {/* Add more images if needed */}
        </div>
        <div className="pddisplay-img">
          <img className='product-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="pdright">
        <h1>{product.name}</h1>
        <div className="productdiplayright-star">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={dullstar} alt="" />
          <p>(122)</p>
        </div>
        <div className="pddisplayrightprices">
          <div className="pddisplayrightpricesOLD">
            ${product.old_price}
          </div>
          <div className="productdisplaynewprice">
            ${product.new_price}
          </div>
        </div>
        <div className="pddescription">
          clothes are manufactured is known as the Garment District. Derived from the French word for "equipment," garment is a somewhat generic term you can use when the specific kin
        </div>
        <div className="pdrightsize">
          <h1>Select Size</h1>
          <div className='pdrightsize'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className='pdrightcategory'><span>Category:</span>Women,Tshirt,Crop Top</p>
        <p className='pdrightcategory'><span>Category:</span>Modern,Latest</p>
      </div>
    </div>
  );
};

export default Pd;
