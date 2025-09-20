import React from "react";
import { FaStar } from "react-icons/fa";
import parcel from "../assets/parcel.png";
import tablet from "../assets/tablet.webp";
import brocoli from "../assets/brocoli.png";

const HomeCategory = () => {
  return (
    <div className="w-full mt-4 flex justify-center items-center px-3 md:px-5">
      <div className="w-full bg-[#dedddd81] rounded-2xl flex flex-wrap justify-center md:justify-between items-center gap-4 p-3 md:p-5">
        
        {/* Suggestion Card */}
        <div className="flex items-center gap-2 h-[80px] md:h-[100px] w-full sm:w-[220px] bg-white rounded-xl shadow-sm p-2">
          <div className="h-[50px] w-[60px] md:h-[75px] md:w-[75px] bg-red-500 rounded-full"></div>
          <p className="text-sm md:text-base">
            Hey! User More Suggestions For You{" "}
            <FaStar className="text-yellow-400 inline ml-2" />
          </p>
        </div>

        {/* Orders Card */}
        <div className="flex items-center gap-2 h-[80px] md:h-[100px] w-full sm:w-[220px] bg-white rounded-xl shadow-sm p-2">
          <div className="h-[60px] w-[60px] md:h-[90px] md:w-[90px] flex justify-center items-center">
            <img src={parcel} alt="parcel" className="w-full" />
          </div>
          <p className="text-sm md:text-base">Your Orders Track Your Orders</p>
        </div>

        {/* Electronics Card */}
        <div className="flex items-center gap-2 h-[80px] md:h-[100px] w-full sm:w-[220px] bg-white rounded-xl shadow-sm p-2">
          <div className="h-[60px] w-[60px] md:h-[90px] md:w-[90px] flex justify-center items-center">
            <img src={tablet} alt="tablet" className="w-full" />
          </div>
          <p className="text-sm md:text-base">Electronics get 30% off</p>
        </div>

        {/* Grocery Card */}
        <div className="flex items-center gap-2 h-[80px] md:h-[100px] w-full sm:w-[220px] bg-white rounded-xl shadow-sm p-2">
          <div className="h-[60px] w-[60px] md:h-[90px] md:w-[90px] flex justify-center items-center">
            <img src={brocoli} alt="brocoli" className="w-full" />
          </div>
          <p className="text-sm md:text-base">Shop Grocery Fresh and Green</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
