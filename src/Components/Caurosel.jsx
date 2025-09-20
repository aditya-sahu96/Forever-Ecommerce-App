import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";
import Sony from "../assets/Sony.png";
import Asus from "../assets/Asus.png";
import Daviudhoff from "../assets/Daviudhoff.png";
import Sofa from "../assets/Sofa.png";

const Caurosel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false
  };

  return (
    <div className="px-5 mt-22">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="!flex w-[1230px] h-[570px] bg-gradient-to-tl from-[#ffd1e2] to-[#97dde8] rounded-2xl">
          <div className="w-1/2 h-full flex items-start justify-center rounded-l-2xl flex-col px-30">
            <p className="px-3 py-1 rounded-full flex justify-center items-center bg-[#fa5e33ac] text-[12px] text-white">
              Hot deals on Headphones
            </p>
            <h1 className="text-5xl text-[#1a0089] font-bold">
              Sony Wireless Headphones
            </h1>
            <p className="text-xs py-2">
              Experience the true audio with ne Sony Headphones. And get ahead
              of time break the loop and show your vibe share new track just you
              and your tacks, up you aura, supports dolby atmos and spatial
              surround sound fell every beat whenever you play a track
            </p>
            <button className="px-4 py-2 mt-5 rounded-md flex justify-center items-center bg-white font-semibold">
              Shop Now
            </button>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center rounded-r-2xl">
            <img src={Sony} alt="sony" className="w-1/2" />
          </div>
        </div>

        {/* Slide 2 */}
        <div className="!flex w-[1230px] h-[570px] bg-gradient-to-tl from-[#ffd1e2] to-[#ff5938] rounded-2xl">
          <div className="w-1/2 h-full flex items-start justify-center rounded-l-2xl flex-col px-30">
            <p className="px-3 py-1 rounded-full flex justify-center items-center bg-red-600 text-[12px] text-white">
              Special Offer on Laptops
            </p>
            <h1 className="text-5xl text-white font-bold">
              Asus ZenBook Ultra
            </h1>
            <p className="text-xs py-2">
              Boost your productivity with the all-new Asus ZenBook Ultra.
              Equipped with the latest Intel processors, ultra-slim design, and
              long-lasting battery, it’s built for creators, professionals, and
              dreamers who never stop moving forward.
            </p>
            <button className="px-4 py-2 mt-5 rounded-md flex justify-center items-center bg-white font-semibold">
              Shop Now
            </button>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center rounded-r-2xl">
            <img src={Asus} alt="sony" className="w-1/2" />
          </div>
        </div>

        {/* Slide 3 */}
        <div className="!flex w-[1230px] h-[570px] bg-gradient-to-tl from-[#97dde9] to-[#082026] rounded-2xl">
          <div className="w-1/2 h-full flex items-start justify-center rounded-l-2xl flex-col px-30">
            <p className="px-3 py-1 rounded-full flex justify-center items-center bg-[#fa5e33ac] text-[12px] text-white">
              New Arrival
            </p>
            <h1 className="text-5xl text-white font-bold">
              Luxury Eau de Parfum
            </h1>
            <p className="text-xs py-2">
              Discover the fragrance that defines elegance. A perfect blend of
              floral notes and woody undertones, designed to leave a lasting
              impression wherever you go. Subtle yet powerful — your signature
              scent awaits.
            </p>
            <button className="px-4 py-2 mt-5 rounded-md flex justify-center items-center bg-white font-semibold">
              Shop Now
            </button>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center rounded-r-2xl">
            <img src={Daviudhoff} alt="sony" className="w-1/2" />
          </div>
        </div>

        <div className="!flex w-[1230px] h-[570px] bg-gradient-to-tl from-[#e1ded9] to-[#a9c4c4] rounded-2xl">
          <div className="w-1/2 h-full flex items-start justify-center rounded-l-2xl flex-col px-30">
            <p className="px-3 py-1 rounded-full flex justify-center items-center bg-[#fa5e33ac] text-[12px] text-white">
              Comfort Collection
            </p>
            <h1 className="text-5xl text-[#1a0089] font-bold">
              Modern Luxury Sofa
            </h1>
            <p className="text-xs py-2">
              Redefine your living space with our modern luxury sofa.  
      Built with premium materials and ergonomic design,  
      it offers unmatched comfort and durability.  
      Perfect for family time, hosting guests, or simply relaxing in style.
            </p>
            <button className="px-4 py-2 mt-5 rounded-md flex justify-center items-center bg-white font-semibold">
              Shop Now
            </button>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center rounded-r-2xl">
            <img src={Sofa} alt="sony" className="w-1/2" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Caurosel;
