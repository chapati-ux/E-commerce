import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'

import Bradcrum from '../components/Bradcrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import Relateditems from '../components/RelatedItems/Relateditems';
const Product = () => {
  let {all_product}=useContext(ShopContext);
  let {productId}=useParams();
  let product = all_product.find((e)=>e.id===Number(productId))

  return (
    <div>
      <Bradcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <Relateditems/>
    </div>
  )
}

export default Product