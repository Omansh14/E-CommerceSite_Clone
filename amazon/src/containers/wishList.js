import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import WishItemCard from '../components/cart/WishItemCard';
import { addToCart, removeFromWishList } from '../redux/actions/action';

const WishList = () => {
    const {wishListItems, cartItems} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleWishListItems = (id, flag) => {
        const index = wishListItems.findIndex((ele) => ele.id === id);
        const newList = wishListItems;
      if(flag) {
        //remove from wishList and add to cart
        const newCartItems = [...cartItems, newList[index]];
        dispatch(addToCart(newCartItems));
      }
        newList.splice(index, 1);
        dispatch(removeFromWishList(newList));
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