import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircleRounded } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import SideNavContent from "../SideNavContent";
import {motion} from "framer-motion";

const HeaderBottom = () => {
  const ref = useRef();
  const [sideBar, setSideBar] = useState(false);

  useEffect(()=>{
    document.body.addEventListener('click', (e) => {
      if(e.target.contains(ref.current)){
        setSideBar(false);
      }
    })
  },[ref,sideBar]);

  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      {/* =============== List Items Start here ============*/}
      <ul className="flex items-center text-sm tracking-wide gap-2">
        <li
          className="headHover flex items-center gap-1"
          onClick={() => setSideBar(true)}
        >
          <MenuIcon />
          All
        </li>
        <li className="headHover">Today's Deals</li>
        <li className="headHover">Customer Service</li>
        <li className="headHover">Gift Cards</li>
        <li className="headHover">Registry</li>
        <li className="headHover">Sell</li>
      </ul>
      {/* ================ List Items End here ============== */}
      {/* ================ sideNav start here ============== */}
      {sideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div initial={{x:-500, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration: .5}} className="w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4" ref={ref}>
                <AccountCircleRounded />
                <h3>Hello, Sign In</h3>
              </div>
                <SideNavContent title="Digital Content & Devices" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Appstore"/>
                <SideNavContent title="Shop By Department" one="Electronics" two="Computers" three="Smart Home"/>
                <SideNavContent title="Programs & Features" one="Gift Cards" two="Amazon Live" three="International Shopping"/>
                <SideNavContent title="Help & Settings" one="Your Account" two="Customer Service" three="Contact Us"/>
            </motion.div>
            <span onClick={()=> setSideBar(false)}className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black
            flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
              <motion.div initial={{x:-500, opacity: 0}} animate={{x:0, opacity:1}} transition={{duration: .5}}>
                <Close/>
              </motion.div>
            </span>
          </div>
        </div>
      )}
      {/* ================ Sidenav End here ============== */}
    </div>
  );
};

export default HeaderBottom;
