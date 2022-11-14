import React from "react";

const Product = ({ product }) => {
  const { name, price, image } = product;
  return (
    <div className="flex flex-col">
      <div>
        <img
          src={image}
          alt="product-image"
          className="h-[200px] w-[200px] object-contain bg-white rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-2">
          <h1 className="font-medium">{name}</h1>
          <h1 className="font-thin">price: {price}</h1>
        </div>
        <div>
          <button className="px-3 py-2 bg-white font-medium cursor-pointer rounded-md">
            BUY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
