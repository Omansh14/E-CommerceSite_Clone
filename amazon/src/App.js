import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ShoppingCart from "./containers/shoppingCart";
import Login from "./components/login";
import WishList from "./containers/wishList";
import { useDispatch } from "react-redux";
import { fetchProductData } from "./redux/actions/action";

const Layout =({filterData, setFilterData}) => {
  return(
    <div>
      <Header filterData={filterData} setFilterData={setFilterData}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
function App() {
  const [filterData, setFilterData] = useState();
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout filterData={filterData} setFilterData={setFilterData}/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/cart" element={<ShoppingCart/>}></Route>
        <Route path="/wishlist" element={<WishList/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Route>

  ))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData(filterData ? filterData.toLowerCase() : null));
  }, [dispatch, filterData])

  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
