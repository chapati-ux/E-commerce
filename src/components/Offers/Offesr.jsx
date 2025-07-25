import React from "react";
import exclusive_img from "../assets/exclusive_image.png";
const Offesr = () => {
  return (
    <div className="offers mt-10 flex w-[70%] h-[70vh] m-[auto]  bg-[linear-gradient(90deg,lightblue,#e1ffea22_95%)] rounded-2xl p-3">

      <div className="offers-left flex-[1] flex flex-col justify-center">
        <h1 className="text-[70px] text-[#171717] font-[600]">Exlusive</h1>
        <h1 className="text-[70px] text-[#171717] font-[600]">Offers  For You</h1>
        <p className="text-[22px] text-[#171717] font-[600]">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="w-[280px] h-[70px] rounded-[30px] bg-red-400 font-[600] text-[20px] p-[10px] mt-[30px] hover:scale-[0.9] duration-400">Check Now</button>
      </div>

      <div className="offers-right flex justify-end items-center">
        <img className="h-[100%]" src={exclusive_img} alt="" />
      </div>

    </div>
  );
};

export default Offesr;
