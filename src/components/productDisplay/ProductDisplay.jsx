import React, { use, useContext } from "react";
import './ProductDisplay.css'
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
const ProductDisplay = (props) => {
  let { product } = props;
  let {addToCart}= useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-rght-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          Natural fibers like cotton, wool, and silk, as well as synthetic
          materials like polyster and rayon, are commonly used
        </div>

        <div className="productdisplay-right-size">
          <h1>select size</h1>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>
            Category: <span>Women, T-shirt,Crop Top</span>{" "}
          </span>
        </p>

        <p className="productdisplay-right-category">
          <span>
            Tags: <span>Modern, Latest</span>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
