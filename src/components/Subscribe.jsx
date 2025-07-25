import React from "react";

const Subscribe = () => {
  return (
    <div className="newsLetter rounded-2xl m-[auto] w-[60%] h-[40vh] flex flex-col items-center justify-center gap-3 mb-3  bg-[linear-gradient(90deg,purple,pink_60%)]">

      <h1 className="text-[47px] font-[600]">Get Exclusive Offers On Your Email</h1>
      <p className="text-[20px] ">Subscribe to our platform and stay updated </p>

      <div className="flex gap-1 justify-around items-center w-[700px] h-[70px] border-1 rounded-2xl pl-1">
        <input className="outline-0 text-2xl w-[500px] " type="email" name="" id="" placeholder="Your Email id" />
        <button className="border-1 p-1  h-[100%] w-[200px] rounded-2xl border-black bg-black text-white text-[16px] cursor-pointer">Subscribe</button>
      </div>

    </div>
  );
};

export default Subscribe;
