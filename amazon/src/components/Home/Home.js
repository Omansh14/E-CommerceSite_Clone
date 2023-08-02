import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import { useSelector } from "react-redux";

const Home = () => {
  const { productLoadingState } = useSelector((state) => state.app);
  return (
    <div>
      <Banner />
      {productLoadingState !== "LOADED" ? (
        <div className="h-48 flex flex-row justify-center items-center text-blue-500 font-semibold text-lg ">
          Loading Products...
        </div>
      ) : (
        <Products />
      )}
    </div>
  );
};

export default Home;
