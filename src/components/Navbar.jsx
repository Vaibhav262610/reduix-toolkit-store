import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div className="flex  p-3 justify-center bg-gray-700 text-white">
        <div className="flex md:flex-row flex-col  items-center justify-around w-10/12">
          <h1 className="uppercase mt-4 md:mt-0 font-extrabold text-2xl">
            REDux store
          </h1>
          <div className="flex mt-6 md:mt-0  gap-4">
            <NavLink to="/">
              <h1 className="text-lg font-bold cursor-pointer">Home</h1>
            </NavLink>
            <NavLink to="/cart">
              <h1 className="text-lg font-bold cursor-pointer">Cart</h1>
            </NavLink>

            <h1
              className="text-lg font-bold text-red-500"
            >
              Cart Items : {items.length}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
