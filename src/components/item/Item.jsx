import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <>
      <div className="item   m-1 p-5 flex flex-col items-center ease-linear duration-100 hover:scale-[1.1] ">
    <Link to={`/product/${id}`}>   <img onClick={()=>{
      window.scrollTo({top:0,behavior:"smooth"})
    }}
          className=" "
          src={image}
          alt={name}
        /></Link>
        <h1 className="mt-[6px] mb-[6px]  ">{name}</h1>
        <div className="prices flex gap-2.5 ">
          <div className="new_prices text-[18px] font-[600]">
            <p>New Price: ${new_price}</p>
          </div>
          <div className="old_prices text-[18px] font-[600]">
            <p>Old Price: ${old_price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
