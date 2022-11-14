import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const Product = ({ product }) => {
  const { name, price, image, _id } = product;

  // ========================//
  // SEND DATA TO THE SERVER
  // ========================//
  const addToCart = (id) => {
    const URL = `http://localhost:3000/cart`;
    if (product._id === id) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    }
  };

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
          <button
            className="px-3 py-2 bg-white font-medium cursor-pointer rounded-md"
            onClick={() => addToCart(_id)}
          >
            <GiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
