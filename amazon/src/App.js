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
import ShoppingCart from "./containers/shoppingCart";
import Login from "./components/login";
import WishList from "./containers/wishList";

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
        <Route index element={<Home/>}></Route>
        <Route path="/cart" element={<ShoppingCart/>}></Route>
        <Route path="/wishlist" element={<WishList/>}></Route>
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
