import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export let ShopContext = createContext(null);

let getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  let [cartItems, setCartItems] = useState(getDefaultCart());

  let addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(addToCart);
  };

  let removeToCart=(itemId)=>{
   setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1 }))
  };
  console.log(cartItems);

   let getToCartAmount=()=>{
    let toatalAmount =0;
    for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo = all_product.find((product)=> product.id === Number(item));
          toatalAmount +=cartItems[item] * itemInfo.new_price;
        }
    }
    return toatalAmount;
   }
   let getTotalCartCount=()=>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem += cartItems[item]
      }
    }
    return totalItem;
   }

  let contextValue={all_product,cartItems,addToCart,removeToCart,getToCartAmount,getTotalCartCount}

  // let contextData = { all_product };
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
      </ShopContext.Provider>
  );
};

export default ShopContextProvider;
