import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchProducts } from "../ApiServices/ApiService";
import Rating from "../Components/Rating";
import { useNavigate } from "react-router-dom";
import ghost from "../assets/Ghost.gif"

const Products = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [page, setPage] = useState(1);
  const [range, setRange] = useState(100000);
  const navigate = useNavigate();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["productPage"],
    queryFn: () => fetchProducts(194),
  });

  if (isLoading) return <p>Loading...
    <img src={ghost} alt="loading" className="align-middle"/>
  </p>;
  if (isError) return <p>Error: {error.message}</p>;

  const allProducts = data?.data?.products || [];

  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];
  const brands = ["All", ...new Set(allProducts.map((p) => p.brand))];

  // Apply filters
  const filteredProducts = allProducts.filter((p) => {
    const categoryMatch = category === "All" || p.category === category;
    const brandMatch = brand === "All" || p.brand === brand;
    const priceMatch = range === 100000 || p.price <= range;
    return categoryMatch && brandMatch && priceMatch;
  });

  const productsPerPage = 20;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  };

  const handelRangeChange = (e)=>{
    setRange(e.target.value);
    setPage(1);
  }

  return (
    <div className="flex justify-center my-5 mt-27">
      {/* filter Section */}
      <div className="w-[300px] h-fit rounded-2xl p-5 shadow-md">
        <h1>Filter Options</h1>
        <div className="w-full h-1 bg-gray-500 rounded-2xl my-2"></div>
        
        {/* Categories */}
        <h2 className="font-semibold">Categories</h2>
        {categories.map((cat, index) => (
          <div key={index} className="w-full flex items-center gap-2 my-1">
            <input
              type="radio"
              name="category"
              value={cat}
              checked={category === cat}
              onChange={handleCategoryChange}
            />
            <label className="cursor-pointer uppercase">{cat}</label>
          </div>
        ))}

        <div className="w-full h-1 bg-gray-500 rounded-2xl my-2"></div>
        {/* Brands */}
        <h2 className="font-semibold">Brands</h2>
        {brands.map((b, index) => (
          <div key={index} className="w-full flex items-center gap-2 my-1">
            <input
              type="radio"
              name="brand"
              value={b}
              checked={brand === b}
              onChange={handleBrandChange}
            />
            <label className="cursor-pointer uppercase">{b}</label>
          </div>
        ))}
        <div className="w-full h-1 bg-gray-500 rounded-2xl my-2"></div>
        <h2>Price Range</h2>
        <p>$10 - ${range}</p>
        <input type="range" min={10} max={100000} value={range} onChange={handelRangeChange}/>
      </div>

      {/* product section */}
      <div className="w-[1000px] px-6">
        <div className="flex items-center flex-wrap gap-10">
          {filteredProducts
            .slice((page - 1) * productsPerPage, page * productsPerPage)
            .map((product) => (
              <div
                key={product.id}
                className="h-[350px] w-[200px] bg-[#f5f2f281] rounded-lg p-5 flex flex-col justify-between shadow-md hover:shadow-2xl"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img src={product.thumbnail} className="w-full" />
                <div>
                  <p className="font-semibold">{product.title}</p>
                  {product.reviews?.length > 0 && (
                    <Rating
                      rate={product.reviews[0].rating}
                      totalRate={product.reviews.length}
                    />
                  )}
                  <p>${product.price}</p>
                  <button className="h-[35px] flex justify-center items-center bg-[#fa5e33] px-4 mt-2 text-white font-semibold rounded-md">
                    View Product
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="h-[60px] w-[720px] flex justify-center items-center gap-2 mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="h-full w-[60px] border rounded disabled:opacity-50"
          >
            -
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`h-full w-[40px] border rounded ${
                page === index + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((prev) => prev + 1)}
            className="h-full w-[60px] border rounded disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;