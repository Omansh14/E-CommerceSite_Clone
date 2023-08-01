import React, { useEffect, useRef, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";
import { logo } from "../../assets/index";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { allItems } from "../../constants/constants";
import HeaderBottom from "./HeaderBottom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef();
  const dropDownItems = allItems;

  const cart = useSelector((state) => state.cart);
  const cartItems = cart?.cartItems;

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setShowAll(false);
      }
    });
  }, [ref, showAll]);

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/*================= Image Start Here ===============================*/}
        <div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
          <Link to="/">
            <img className="w-24 mt-2" src={logo} alt="logo" />
          </Link>
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
          <div>
            {showAll && (
              <div>
                <ul
                  ref={ref}
                  className="mt-1 absolute w-48 h-32 top-10 left-0 overflow-y-scroll
                            overflow-x-hidden bg-gray-100 border-[1px] border-amazon_blue text-black p-2
                            flex-col gap-1 z-50 rounded-md"
                >
                  {dropDownItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-row justify-center text-sm tracking-wide p-0.5 font-semibold hover:text-blue-600 border-b-[1px]
                                        border-b-transparent cursor-pointer duration-200"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

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
          <Link to="/login">
            <p className="text-xs text-light_text font-light">Hello, sign in</p>
            <p className="text-sm font-semibold -mt-1 text-white_text">
              Accounts & Lists{" "}
              <span>
                <ArrowDropDownOutlined />
              </span>
            </p>
          </Link>
        </div>
        {/*================= Signin End Here ===============================*/}

        {/*================= Orders Start Here ===============================*/}
        <Link to="/wishlist">
        <div className="flex flex-col items-center justify-center headHover gap-2">
          {/* <p className="text-xs text-light_text font-light">Returns</p> */}
          <FavoriteIcon/>
          <p className="text-sm font-semibold -mt-1 text-white_text">
            WishList
          </p>
        </div>
        </Link>
        {/*================= Orders End Here ===============================*/}

        {/*================= Cart Start Here ===============================*/}
        <div className="flex items-start justify-center headHover relative">
          <Link className="nav-link" to="/cart">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-white_text">
              Cart
              <span
                className="absolute text-xs -top-1 left-6 semibold p-1 h-4 bg-[#f3a847] text-amazon_blue
                rounded-full flex justify-center items-center"
              >
                {cartItems.length}
              </span>
            </p>
          </Link>
        </div>
        {/*================= Cart End Here ===============================*/}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
