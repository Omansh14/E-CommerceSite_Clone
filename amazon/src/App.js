import React from "react";
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
import ProductsData from "./api/api";
import Cart from "./components/cart/cart";
import Login from "./components/login";

const Layout =() => {
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} loader={ProductsData}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Route>

  ))
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
