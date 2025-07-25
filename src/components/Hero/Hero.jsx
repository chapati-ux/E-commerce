import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero w-[100vw] bg-[linear-gradient(180deg,,#e1ffea22_70%)] flex">
        <div className="hero-left flex flex-col justify-center  gap-5 pl-[180px]">
          <h2 className="text-[2rem] font-bold text-red-500">
            New Arrivals Only{" "}
          </h2>
          <div>
            <div className="hero-hand-icon flex items-center ">
              <p className="text-[5rem] font-bold">new</p>

              <img src={hand_icon} alt="" className="w-[105px]"/>
            </div>

            <p className="text-[5rem] font-bold">collection</p>
            <p className="text-[5rem] font-bold">for Everyone</p>
          </div>

          <div className="hero-latest-btn h-[70px] w-[350px] rounded-3xl flex justify-center gap-5 p-5 bg-red-500 text-[22px] hover:bg-amber-300">
            <div className="text-white">Latest Collection</div>
            <img src={arrow_icon} alt="" className=" " />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_img} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
