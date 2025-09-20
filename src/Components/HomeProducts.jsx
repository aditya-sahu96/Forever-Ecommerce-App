import React from "react";
import { fetchProducts } from "../ApiServices/ApiService";
import { useQuery } from "@tanstack/react-query";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: ()=> fetchProducts(15),
  });

  const navigate = useNavigate();
  const allProducts = data?.data?.products;
  console.log(data);
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="w-full flex justify-between items-center p-7 gap-5 flex-wrap">
      {allProducts?.map((product, index) => (
        <div
          key={index}
          className="h-[400px] w-[250px] bg-[#f5f2f281] rounded-lg p-5 flex flex-col justify-between shadow-md 
                transition-shadow duration-300 ease-in-out 
                hover:shadow-2xl" onClick={()=>navigate(`/product/${index+1}`)}
        >
          <img src={product.thumbnail} className="w-full" />
          <div>
            <p className="font-semibold">{product.title}</p>
            <Rating
              rate={product.reviews[1].rating}
              totalRate={product.reviews.length}
            />
            <p>${product.price}</p>
            <button className="h-[35px] flex justify-center items-center bg-[#fa5e33] px-4 mt-2 text-white font-semibold rounded-md">View Product</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeProducts;
