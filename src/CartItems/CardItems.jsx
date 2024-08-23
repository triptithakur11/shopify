import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../Contexts/ShopContext';
import remove from './../Assets/cart_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitemsformatmain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartitemsformat">
              <img src={e.image} className='carticon' alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitems-quantity'>
                {cartItems[e.id]}
              </button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img className='cartitemsremove' src={remove} onClick={() => removeFromCart(e.id)} alt="remove" />
            </div>
          );
        }
        return null;
      })}
      <hr />
      <div className="cartitemsdown">
        <div className="cartitemstotal">
          <h1>Cart Total</h1>
          <div>
            <div className="carttotalitemsitems">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="carttotalitems">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='carttotalitems'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="cartitemspromocode">
          <p>If you have a promo code enter it here</p>
          <div className="cartitemspromobox">
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
