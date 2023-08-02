import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WishItemCard from '../components/cart/WishItemCard';
import { addToCart, removeFromWishList } from '../redux/actions/action';

const WishList = () => {
    const {wishListItems, cartItems} = useSelector((state) => state.cart);
    const {products} = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const handleWishListItems = (id, flag) => {
        const index1 = wishListItems.findIndex((ele) => ele.id === id);
        const newList = wishListItems;
        const index2 = products.findIndex((ele) => ele.id === id);
        const newProducts = products;
      if(flag) {
        //remove from wishList and add to cart
        const newCartItems = [...cartItems, newList[index1]];
        dispatch(addToCart(newCartItems));
        newProducts[index2].addToCart = true;
      }
        newList.splice(index1, 1);
        newProducts[index2].addToWishlist = false;
        dispatch(removeFromWishList(newList));
        dispatch({ type: "RECEIVE_PRODUCT_DATA", payload: newProducts });
    }
  return (
    <div>
        {
            wishListItems.length < 1 ? (
                <div className="h-48 flex flex-row justify-center items-center text-gray-500 font-extrabold text-2xl ">Wishlist is empty</div>
              ) : (
                <div>
                    {
                        wishListItems.map((item,idx) => {
                            return (
                                <div className="flex flex-col gap-2 flex-wrap m-3" key={idx}>
                                    <WishItemCard cardDetails={item} handleWishListItems={handleWishListItems} />
                                </div>
                            )
                        })
                    }
                </div>
              )
        }
    </div>
  )
}

export default WishList;