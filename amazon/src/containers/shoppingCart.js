import React from "react";
import CartCard from "../components/cart/cartCard";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart?.cartItems;

  const grandTotal = cartItems.reduce(
    (prev, curr) => prev + curr.quantity * curr.price,
    0
  );

  const totalQuantity = cartItems.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  return (
    <>
      {cartItems.length < 1 ? (
        <div className="h-48 flex flex-row justify-center items-center text-gray-500 font-extrabold text-2xl ">Cart is Empty</div>
      ) : (
        <div className="flex flex-row justify-between m-3">
          <div className="flex flex-col gap-2 w-7/12">
            {cartItems.map((item, idx) => {
              return (
                <div key={idx}>
                  <CartCard cardDetails={item} />
                </div>
              );
            })}
          </div>
          {cartItems.length > 0 ? (
            <div
              className="bg-white w-4/12 h-3/5 border-[1px] border-gray-200 p-5 z-30 hover:border-transparent
                  shadow-textShadow duration-200 relative flex flex-col gap-4 rounded-xl"
            >
              <div className="font-extrabold text-xl">Order Summary: </div>
              <div className="flex flex-row justify-between text-gray-500 font-semibold">
                Total Quantity:
                <span className="w-1/12 mr-2">{totalQuantity}</span>
              </div>
              <div className="flex flex-col">
                <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  {cartItems.map((item) => {
                    return (
                      <li className="font-titleFont text-sm flex flex-row justify-between border-1px border-gray-500">
                        <span className="w-8/12 flex flex-row flex-wrap">
                          {item.title}
                        </span>
                        <span className="w-1/12 font-bold">
                          {item.quantity}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="font-bold text-gray-500 text-lg mt-6 flex flex-row justify-between px-2">
                  <span className="w-8/12">Grand Total:</span>
                  <span className="flex flex-row justify-end w-4/12 mx-2">
                    $ {grandTotal.toFixed(2)}
                  </span>
                </div>
                <button
                  className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200
                border hover:from-yellow-300 hover:to-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
                active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
                >
                  Proceed To Pay
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
