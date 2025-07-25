import React from "react";
import data_product from "../assets/data";
import Item from "../item/Item";
const Relateditems = () => {
  return (
    <div className="relatedProducts flex flex-col items-center  gap-[5px] mt-4">
      <h1 className="text-3xl font-bold ">Related Products</h1>
      <hr className="w-[300px] h-[6px]" />
      <div className="relatedProducts-items flex mt-[50px]">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Relateditems;
