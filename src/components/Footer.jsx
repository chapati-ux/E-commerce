import React from "react";
import footer_logo from "./assets/logo.png";
import insta from "./assets/instagram_icon.png";
import pintrest from "./assets/pintester_icon.png";
import whatsapp from "./assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer bg-green-500  flex flex-col justify-between items-center bg-[linear-gradient(90deg,pink,purple_60%)]">
         {/* bg-[linear-gradient(90deg,purple,pink_60%)] */}

      <div className="footer-logo flex  justify-center items-center">
        <img src={footer_logo} alt="" />
        <p className="text-[32px]   bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent text-4xl font-bold">Shopper</p>
      </div>
      

      <ul className="list-style-none flex  gap-3 mt-[10px] mb-[10px]">
        <li className="cursor-pointer text-[16px] transition-color duration-75 hover:text-[#ee0979] ">Company</li>
        <li className="cursor-pointer text-[16px] transition-color duration-75 hover:text-[#ee0979] ">Products</li>
        <li className="cursor-pointer text-[16px] transition-color duration-75 hover:text-[#ee0979] ">Offices</li>
        <li className="cursor-pointer text-[16px] transition-color duration-75 hover:text-[#ee0979] ">About</li>
        <li className="cursor-pointer text-[16px] transition-color duration-75 hover:text-[#ee0979] ">Contact</li>
      </ul>

      <div className="footer-social-icons flex  gap-3">
        <div className="footer-icons-container w-[40px] h-[40px] rounded-2xl flex items-center justify-center border-x-fuchsia-200 cursor-pointer transition-transform duration-75 ease     hover:scale-[1.1] ">
          <img   className="w-[20px] h-[20px] " src={insta} alt="" />
        </div>

        <div className="footer-icons-container w-[40px] h-[40px] rounded-2xl flex items-center justify-center border-x-fuchsia-200 cursor-pointer transition-transform duration-75 ease  hover:scale-[1.1] ">
          <img   className="w-[20px] h-[20px] "src={pintrest} alt="" />
        </div>
                      
        <div className="footer-icons-container w-[40px] h-[40px] rounded-2xl flex items-center justify-center border-x-fuchsia-200 cursor-pointer transition-transform duration-75 ease  hover:scale-[1.1] ">
          <img   className="w-[20px] h-[20px] "src={whatsapp} alt="" /> 
        </div>
      </div>

      <div className="footer-Copyright flex flex-col gap-3 items-end">
        <p className="text-[14px] text-[white] m-[10px] ">Copyright @2025-All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
