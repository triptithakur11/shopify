import React, { useContext } from 'react';
import { ShopContext } from '../Contexts/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Pd from '../Components/Productdisplay/Pd';
import Description from '../Descriptionbox/Description';
import Relatedproducts from '../Components/RelatedProducts/Relatedproducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); // Corrected variable name
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumbs product={product} />
      <Pd product={product} />
      <Description />
      <Relatedproducts />
    </div>
  );
};

export default Product;
