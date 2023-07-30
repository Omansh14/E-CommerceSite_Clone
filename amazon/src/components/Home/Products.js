import React from "react";
import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import {addToCart, removeFromCart}  from "../../redux/actions/action";

const Products = () => {
  const data = useLoaderData();
  const productData = data.data;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart?.cartItems;

  // useEffect(() => {

  // }, []);

  const removeProduct = (id) => {
    const filteredItem = cartItems.filter((ele) => ele.id !== id );
    dispatch(removeFromCart(filteredItem));
  }

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4">
      {productData.map((item, idx) => (
        <div
          className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent
          shadow-none hover:shadow-textShadow duration-200 relative flex flex-col gap-4 rounded-xl"
          key={`${idx + 1}`}
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="productImage"
            />
            <ul className="w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700">
              <li className="productLi" 
              onClick={() => {removeProduct(item.id)}}
              >
                Add to Cart{" "}
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to WishList{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-10 bg-white">
            <div className="px-4">
              <div className="flex items-center  justify-between">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                  {item?.title.substring(0, 20)}
                </h2>
                <p className="text-sm text-gray-600 font-semibold">
                  ${item.price}
                </p>
              </div>
            </div>
            <div className="px-4">
              <p className="text-sm">
                {item?.description.substring(0, 100)}....
              </p>
              <div className="text-yellow-500">
                {[...Array(Math.floor(Math.random() * 5 + 1))].map((item) => (
                  <StarIcon  key={Math.random()} />
                ))}
              </div>
              <button
                className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200
              border hover:from-yellow-300 hover:to-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
              active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"

              onClick={() => {
                dispatch(addToCart(item));
              }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
