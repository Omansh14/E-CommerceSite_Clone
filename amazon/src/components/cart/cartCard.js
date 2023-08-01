import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/action";

const CartCard = ({ cardDetails }) => {
  const { id, image, category, price, title, quantity } = cardDetails;
  const cartItems = useSelector((state) => state?.cart?.cartItems);
  const dispatch = useDispatch();

  const handleQuantity = (id,flag) => {
  const index = cartItems.findIndex((item) => item.id === id);
  const newItems = cartItems;
  if(flag){
    newItems[index].quantity+=1;
  } else {
    if(newItems[index].quantity === 1){
      newItems.splice(index,1);
    }else {
      newItems[index].quantity-=1;
    }
    
  }
  dispatch(addToCart(newItems));
  };


  return (
    <div>
      <div
        className="bg-white h-auto w-auto border-[3px] border-gray-300 p-5 z-30 hover:border-green-400
          shadow-textShadow duration-200 relative flex flex-col gap-4 rounded-xl"
      >
        <div className="flex flex-row justify-between align-middle relative">
          <div className="flex flex-col justify-center gap-3 w-3/12">
            <img
              className="w-20 h-16 object-contain"
              src={image}
              alt="productImage"
            />
            <div className="font-titleFont">{category.toUpperCase()}</div>
          </div>

          <div className="flex flex-col py-3 justify-start align-middle font-semibold w-6/12 flex-wrap">
            {title}
          </div>
          <div className="flex flex-col p-3 w-3/12">
            <div className="flex flex-row justify-end font-bold text-yellow-400">
              Total : 
              $ 
              &nbsp;
              <span className="font-extrabold">{(quantity* price).toFixed(2)}</span>
            </div>
            <div className="flex flex-row items-center absolute bottom-0 right-3 gap-3">
              Quantity :
              <div className="flex flex-row justify-center items-center gap-2 bg-gray-200 rounded-md">
                <button onClick={() => handleQuantity(id)}className="py-1 px-2 bg-blue-500 text-white rounded-md">
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantity(id, true)} className="py-1 px-2 bg-blue-500 text-white rounded-md">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
