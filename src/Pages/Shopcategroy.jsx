import React, { useContext } from 'react';
import './Shopcategory.css';
import { ShopContext } from '../Contexts/ShopContext.jsx';
import dropdown from '../Assets/dropdown_icon.png';
import Item from '../item/Item.jsx';
import { Link } from 'react-router-dom';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shopcategory'>
      <img className='shopcategory_banner' src={props.banner} alt="Category Banner"/>
      <div className="shopcategoryindexsort">
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className="shopcategorysort">
          Sort by <img src={dropdown} alt="Sort Dropdown"/>
        </div>
      </div>
      <div className="shopproducts">
        {all_product
          ?.filter(item => props.category === item.category)
          ?.map((item) => (
            <Link 
              key={item.id} 
              to={`/product/${item.id}`} 
              style={{ textDecoration: 'none' }}
            >
              <div className="item">
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  newprice={item.new_price}
                  oldprice={item.old_price}
                />
              </div>
            </Link>
          ))
        }
      </div>
      <div className="shopcategoryloadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
