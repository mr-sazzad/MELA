import axios from "axios";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "react-query";
import Loading from "./Loading";

const cart = () => {
  // fetch cart from database
  const fetcher = () => {
    return axios.get("http://localhost:3000/cart");
  };

  // use query hook
  const { isLoading, data } = useQuery("cart", fetcher);

  // loading part
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-10">
      <div className="">
        {data.data.map((product) => (
          <div
            key={product._id}
            className="border-gray-900 mb-5 border rounded-[5px] w-[45%] p-2 flex justify-between items-center h-[90px]"
          >
            <img
              src={product.image}
              className="h-20 w-20 p-3 bg-gray-100 rounded-full object-cover"
            />
            <div className="flex justify-between items-center gap-5">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <div className="">
                {" "}
                <button className="bg-red-300 h-[40px] w-[40px] flex justify-center items-center rounded-full">
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default cart;
