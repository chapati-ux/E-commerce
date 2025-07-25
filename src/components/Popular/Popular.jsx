import React from "react";
import Item from "../item/Item";
import data_product from '../assets/data'
const Popular = () => {
  return (
    <div className="popular flex gap-5 flex-col items-center ">
      <h1 className="text-center font-bold text-[50px]">Popular in Women</h1><hr className="w-[50%]" />
      <div className="popular_item h-auto w-screen flex  mt-0 ">
        {data_product.map((item,i)=>{
          return <Item key={i} id={item.id}
          name={item.name} image={item.image}
          new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  );
};

export default Popular;
