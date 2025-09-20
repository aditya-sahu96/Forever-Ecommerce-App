import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white text-gray-800 mt-22">
      {/* Hero Section */}
      <div className="w-full bg-[#1a0089] text-white py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold">About us</h1>
        <p className="text-md mt-4 max-w-2xl text-center">
          We are Forever your trusted e-commerce destination for style,
          quality, and affordability. Our goal is to make shopping effortless,
          enjoyable, and unforgettable.
        </p>
      </div>

      {/* Who We Are */}
      <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Ecommerce team"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#1a0089] mb-4">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed">
            At <span className="text-[#fa5e33] font-semibold">Forever</span>, we
            believe shopping is more than just buying products it’s about
            creating experiences. From hand-picked collections to excellent
            customer service, we ensure every detail is designed for your
            satisfaction.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a0089] mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed">
            Our mission is simple: to provide{" "}
            <span className="text-[#fa5e33] font-semibold">high-quality
            products</span> at fair prices, while delivering an exceptional
            shopping experience. We are committed to sustainability,
            innovation, and making shopping accessible to everyone.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-[#1a0089] mb-10">
          Why Choose Forever?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#fa5e33] mb-3">
              Premium Quality
            </h3>
            <p>
              Every product we offer is carefully selected and tested for
              durability, style, and comfort.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#fa5e33] mb-3">
              Affordable Prices
            </h3>
            <p>
              We cut unnecessary costs so you get the best products at prices
              that make sense.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold text-[#fa5e33] mb-3">
              Customer First
            </h3>
            <p>
              Your happiness is our priority. Our support team is always ready
              to help, 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#1a0089] text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Be Part of the Forever Family
        </h2>
        <p className="mb-6 text-lg">
          Shop with confidence, style, and trust. Discover products that inspire
          you every day.
        </p>
        <NavLink to={"/products"}>
          <button className="bg-[#fa5e33] px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
          Start Shopping
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;