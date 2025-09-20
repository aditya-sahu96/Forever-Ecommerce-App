import React, { useEffect, useState } from "react";
import BreadCrumpsCart from "../Components/BreadCrumpsCart";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../Features/CartSlice";
import download from "../assets/download.png";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const cartProducts = useSelector((state) => state.cart?.carts);
  console.log(cartProducts);
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [checkOutTotal, setcheckOutTotal] = useState(0);

  const shippingPrice = 5;
  const taxPrice = 2;

  useEffect(() => {
    if (cartProducts && cartProducts.length > 0) {
    const total = cartProducts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const subTotal = Math.floor(total * 100) / 100;
    setCartTotal(subTotal);
    setcheckOutTotal(Math.floor((total * 100) / 100 + shippingPrice + taxPrice));
  } else {
    // if no products, reset values
    setCartTotal(0);
    setcheckOutTotal(0);
  }
  }, [cartProducts]);

  useEffect(() => {
    if (cartProducts) {
      const total = cartProducts.reduce((acc, item) => acc + item.quantity, 0);
      setTotalProducts(total);
    }
  }, [cartProducts]);

  return (
    <div className="mt-22">
      <div className="w-full h-[150px] bg-gray-200 flex flex-col items-center p-5">
        <p className="text-5xl font-bold">Shop</p>
        <BreadCrumpsCart />
      </div>
      <div className="flex justify-center gap-5 py-15">
        {/* orders */}
        <div className="w-2/4 rounded-2xl h-fit shadow-2xl p-3 flex flex-col items-center">
          {cartProducts.length === 0 ? (
            <div className="w-[400px] h-[400px] flex flex-col justify-center">
              <img src={download} alt="" />
              <p className="text-2xl text-red-500 text-center font-bold">
                No items in the Cart
              </p>
            </div>
          ) : (
            ""
          )}
          {cartProducts?.map((item, index) => (
            <div
              key={index}
              className="w-full h-[130px] rounded-md m-2 flex justify-between items-center shadow-md"
            >
              <div className="flex justify-center items-center">
                <img src={item.thumbnail} className="h-[101px] w-[110px]" />
              </div>
              <div className="h-[101px] w-[110px] flex justify-center items-center">
                <p className="text-sm font-semibold">{item.title}</p>
              </div>
              <div className="h-[101px] w-[110px] flex justify-center items-center">
                <p className="font-semibold">{item.price}</p>
              </div>
              <div className="h-[101px] w-[110px] flex justify-center items-center">
                <div className="flex items-center h-[40px]">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-3 py-1 bg-white text-xl font-bold h-full rounded-tl-md rounded-bl-md"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-white h-full flex justify-center items-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="px-3 py-1 bg-white text-xl font-bold outline-0 h-full rounded-tr-md rounded-br-md"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="h-[101px] w-[110px] flex justify-center items-center">
                <p className="font-semibold">${item.totalPrice}</p>
              </div>
              <div className="h-[101px] w-[110px] flex justify-center items-center">
                <MdDelete
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-2xl text-red-600"
                />
              </div>
            </div>
          ))}
        </div>
        {/* order summery */}
        <div className="w-1/4 h-fit rounded-2xl p-4 shadow-2xl">
          <div className="flex flex-col justify-center">
            <p className="text-xl font-semibold">Order Summery</p>
            <div className="w-full h-1 bg-gray-500 rounded-2xl my-2"></div>
            <div className="w-full flex justify-between">
              <p>Items</p>
              <p>{totalProducts}</p>
            </div>
            <div className="w-full flex justify-between py-2">
              <p>Sub Total</p>
              <p>${cartTotal}</p>
            </div>
            <div className="w-full flex justify-between py-2">
              <p>Shipping</p>
              <p>$00</p>
            </div>
            <div className="w-full flex justify-between py-2">
              <p>Taxes</p>
              <p>${shippingPrice}</p>
            </div>
            <div className="w-full flex justify-between py-2">
              <p>Coupen Discount</p>
              <p>${taxPrice}</p>
            </div>

            <div className="w-full h-1 bg-gray-500 rounded-2xl my-2"></div>
            <div className="w-full flex justify-between py-2">
              <p>Total</p>
              <p>${checkOutTotal}</p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <NavLink to="/checkout" >
              <button
                disabled={totalProducts === 0 ? true : false}
                className="px-5 py-2 bg-[#1a0089] text-white font-semibold rounded-full mt-4"
              >
                Proceed to Checkout
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
