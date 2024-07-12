import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeHandler = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div className="flex flex-col  items-center">
        {products > 0 ? (
          <div className="text-2xl mt-20 font-bold uppercase">
            <h1>Your Cart</h1>
          </div>
        ) : (
          <div className="text-2xl mt-20 font-bold uppercase">
            <h1>Your Cart Is Empty</h1>
          </div>
        )}
        <div className="w-full flex-col items-center flex justify-center">
          {products.map((product) => {
            return (
              <>
                <div className="flex items-center w-6/12 justify-around bg-gray-300 p-4 rounded-md mt-12">
                  <img src={product.image} width={60} height={60} alt="" />
                  <h1 className="font-bold text-xl">
                    {product.title.slice(0, 20)}
                  </h1>
                  <h1 className="text-green-500 font-semibold">
                    {product.price}
                  </h1>
                  <button
                    onClick={() => removeHandler(product.id)}
                    className="bg-indigo-400 px-4 py-2 rounded text-white "
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })}
          <div>
            <h1 className="text-3xl font-bold p-12">TOTAL AMOUNT : </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
