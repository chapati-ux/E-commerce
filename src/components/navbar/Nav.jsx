import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const Nav = () => {
  let [menu, setMenu] = useState("shop");
  let {getTotalCartCount} = useContext(ShopContext)
  return (
    <>
      {/* <img src={logo} alt="" /> */}
      <div className="h-[7rem] w-[100vw] flex items-center justify-around  shadow-[1px_2px_10px_black] ">
        
        <div className="flex items-center gap-2.5 text-[1.2rem]">

          <img src={logo} alt="" className="h-[3.5rem]" />
          <p className="font-bold text-3xl">Shopper</p>
        </div>

        <ul className="flex gap-3 text-[1.2rem] font-[400]  ">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/shop">Shop {menu === "shop" ? <hr /> : <></>}</Link>
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to="/men"> Men {menu === "men" ? <hr /> : <></>}</Link>
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to="/women"> Women {menu === "women" ? <hr /> : <></>}</Link>
          </li>
          <li
            onClick={() => {
              setMenu("kid");
            }}
          >
            <Link to="/kid"> Kids {menu === "kid" ? <hr /> : <></>}</Link>
          </li>
        </ul>

        <div className="flex h-[100%] items-center gap-5 text-[1.2rem] font-[500]">
          <button className="bg-red-300 px-8 py-1 rounded-2xl hover:bg-amber-300">
            <Link to="/"> Login</Link>
          </button>

          <div className="relative  flex items-center">
            <div className="absolute flex items-center justify-center h-[20px] w-[20px] top-[-10%] left-[90%] text-[1rem] bg-red-500 p-2 rounded-[50%] ">{getTotalCartCount()}</div>

            <Link to="/cart">
              <img src={cart_icon} alt="" className="h-[2.9rem]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
