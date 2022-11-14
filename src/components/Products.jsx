import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import Loading from "./Loading";
import Product from "./Product";

//* fetch data with axios *//

const fetchProducts = () => {
  return axios.get("http://localhost:3000/products");
};

const Products = () => {
  // Access the client THIS IS IMPORTANT *
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery("products", fetchProducts);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-wrap gap-8  justify-center items-center my-5">
      {data.data.map((product) => {
        return (
          <div
            className="flex bg-gradient-to-t from-slate-100 to-slate-200 h-[280px] w-[220px] p-3 hover:shadow-lg hover:shadow-slate-200 cursor-pointer"
            key={product.id}
          >
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};
export default Products;
