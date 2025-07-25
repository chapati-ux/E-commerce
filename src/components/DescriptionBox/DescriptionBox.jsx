import React from "react";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox  w-[100%] p-[20px] border-1 border-[#ddd] bg-white rounded-2xl font-sans-serif shadow-amber-50 ">
      <div className="descriptionBox-navigator flex gap-[20px] mb-[15px] pb-[10px] ">
        <div className="descriptionBox-nav-box text-[18px] font-bold   mb-2 bg-[linear-gradient(90deg,blue,purple_90%)] bg-clip-text text-transparent ">Description</div>
        <div className="descriptionBox-nav-box-fade text-[18px] text-[#2d2b2b] cursor-pointer">Reviews(122)</div>
      </div>
      <hr />
      <div className="descriptionBox-description mt-[5px] mb-[5px] text-[#333] text-[17px]">
        <p>
          An ecommerce website is an online store where businesssell goods and
          service to customers over the internet. It's digital storefront that
          allows customers to browse, select, and purchare products, and
          facilitates the entire transaction process from payment to shipping
        </p>
        <p>
          While traditional bricks and mortar business model is still relevan,
          e-commerce has beome a preferred choice for conducting business for
          many sellers across India. Here aresome of the points that
          differentiate e-commerce from the traditional, making it a better fit
          for the social media-driven
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
