import React from "react";

const WishItemCard = ({ cardDetails, handleWishListItems }) => {
  const { image, category, title, id } = cardDetails;

  return (
    <div>
      <div
        className="bg-white h-36 w-5/12 border-[3px] border-gray-300 p-5 z-30 hover:border-green-400
          shadow-textShadow duration-200 relative flex flex-col rounded-xl"
      >
        <div className="flex flex-row align-middle gap-2">
          <div className="flex flex-col justify-center gap-3 w-3/12">
            <img
              className="w-20 h-16 object-contain"
              src={image}
              alt="productImage"
            />
          </div>
          <div className="flex flex-col py-4 justify-start items-start  w-8/12 overflow-hidden text-ellipsis gap-1">
            <div className="font-semibold">{title.substring(0, 20)}</div>
            <div className="font-titleFont">{category.toUpperCase()}</div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-3 absolute bottom-3 right-3">
                <button className="py-1 px-2 bg-blue-500 text-white rounded-md font-serif" onClick={() => handleWishListItems(id, true)}>
                  Move to Cart
                </button>
                <button className="py-1 px-2 bg-blue-500 text-white rounded-md font-serif" onClick={() => handleWishListItems(id)}>
                  Remove Item
                </button>
          </div>
      </div>
    </div>
  );
};

export default WishItemCard;
