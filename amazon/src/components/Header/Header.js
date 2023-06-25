import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { logo } from "../../assets/index";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { allItems } from "../../constants/constants";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const dropDownItems = allItems;

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/*================= Image Start Here ===============================*/}
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        {/*================= Image End Here ===============================*/}

        {/*================= Deliver Start Here ===============================*/}
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-light_text font-light flex flex-col">
            Deliver to{" "}
            <span
              className="text-sm font-semi
                    -mt-1 text-white_text"
            >
              India
            </span>
          </p>
        </div>
        {/*================= Deliver End Here ===============================*/}

        {/*================= Search Start Here ===============================*/}
        <div className="h-10 flex flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 
                cursor-pointer duraion-300 text-sm text-amazon_blue font-titleFont flex
                items-center justify-center rounded-t1-md rounded-b1-md"
          >
            All<span></span>
            <ArrowDropDownOutlined />
          </span>
          {showAll && (
            <div>
              <ul
                className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                            overflow-x-hidden bg-white bordr-[1px] border-amazon_blue text-black p-2
                            flex-col gap-1 z-50"
              >
                {dropDownItems.map((item) => (
                  <li
                    key={item.id}
                    className="text-sm tracking-wide font-titleFont border-b-[1px]
                                        border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span
            className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue
                cursor-pointer"
          >
            <SearchIcon />
          </span>
        </div>
        {/*================= Search End Here ===============================*/}

        {/*================= signin Start Here ===============================*/}
        <div className="flex flex-col items-start justify-center headHover">
          <p className="text-xs text-light_text font-light">Hello, sign in</p>
          <p className="text-sm font-semibold -mt-1 text-white_text">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlined />
            </span>
          </p>
        </div>
        {/*================= Signin End Here ===============================*/}

        {/*================= Orders Start Here ===============================*/}
        <div className="flex flex-col items-start justify-center headHover">
          <p className="text-xs text-light_text font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-white_text">
            & Orders
          </p>
        </div>
        {/*================= Orders End Here ===============================*/}

        {/*================= Cart Start Here ===============================*/}
        <div className="flex items-start justify-center headHover relative">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-white_text">
            Cart
            <span
              className="absolute text-xs -top-1 left-6 semibold p-1 h-4 bg-[#f3a847] text-amazon_blue
                rounded-full flex justify-center items-center"
            >
              0
            </span>
          </p>
        </div>
        {/*================= Cart End Here ===============================*/}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
