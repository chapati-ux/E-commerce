import React from 'react'
import '../components/productDisplay/ProductDisplay.css'
import arrow_icon from './assets/arrow.png'
const Bradcrum = (props) => {
  let{product}=props;
  return (
    <div className='breadcrum'>
      <span> Home </span> <img src={arrow_icon} alt="" />
      <span>  Shop</span> <img src={arrow_icon} alt="" />
      <span>  {product.category} </span><img src={arrow_icon} alt="" />
       <span>{product.name}</span> 
    </div>
  )
}

export default Bradcrum