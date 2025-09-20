import React, { useState } from "react";
import BreadCrumps from "./BreadCrumps";
import { NavLink, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../ApiServices/ApiService";
import Rating from "./Rating";
import { FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/CartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const dispatch = useDispatch();

  const { data, isError, isLoading, error, isFetching } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
  });
  const allProducts = data?.data;

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // min 1

  return (
    <div>
      <div className="w-full h-[150px] bg-gray-200 flex flex-col items-center p-5">
        <p className="text-5xl font-bold">Shop</p>
        <BreadCrumps title="prduct id" />
      </div>
      <div className="w-full h-[550px] flex justify-center items-center">
        <div
          className="w-[500px] h-[500px] flex justify-center items-center rounded-3xl shadow-md 
                transition-shadow duration-300 ease-in-out 
                hover:shadow-2xl"
        >
          <img src={allProducts?.images[0]} alt="" className="w-full" />
        </div>
        {/* content */}
        <div className="w-[500px] h-[500px] flex flex-col justify-center p-5">
          <p>{allProducts?.category}</p>
          <p className="text-4xl font-bold my-1">{allProducts?.title}</p>
          <Rating
            rate={allProducts?.reviews[1].rating}
            totalRate={allProducts?.reviews.length}
          />
          <p className="text-xl font-bold my-1 text-amber-300">
            ${allProducts?.price}
          </p>
          <p className="text-md my-1">{allProducts?.description}</p>

          <div className="flex items-center gap-x-4 my-2">
            <div className="flex items-center h-[40px]">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 bg-white text-xl font-bold h-full rounded-tl-md rounded-bl-md"
              >
                -
              </button>
              <span className="px-4 py-1 bg-white h-full flex justify-center items-center">
                {quantity}
              </span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 bg-white text-xl font-bold outline-0 h-full rounded-tr-md rounded-br-md"
              >
                +
              </button>
            </div>
            <button
              className="h-[40px] flex justify-center items-center text-white font-semibold bg-[#fa5e33] rounded-2xl px-5"
              onClick={() =>
                dispatch(
                  addItem({
                    id: allProducts.id,
                    title: allProducts.title,
                    price: allProducts.price,
                    thumbnail: allProducts.thumbnail,
                    quantity: quantity,
                    totalPrice: allProducts.price,
                  })
                )
              }
            >
              Add to Cart
            </button>
          <NavLink to="/cart">
              <button className="h-[40px] flex justify-center items-center text-white font-semibold bg-[#1a0089] rounded-2xl px-5">
              Buy Now
            </button>
          </NavLink>
            
            <FaHeart
              className={`text-[30px] box-border box-border-black-500 ${
                isActive ? "text-amber-400" : "text-gray-200"
              }`}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
