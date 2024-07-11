import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart )
  return (
    <>
      <div className="flex p-3 justify-center bg-gray-700 text-white">
        <div className="flex items-center justify-around w-10/12">
          <h1 className="uppercase font-extrabold text-xl md:text-2xl">REDux store</h1>
          <div className="flex  gap-4">
            <NavLink to="/">
              <h1 className="cursor-pointer">Home</h1>
            </NavLink>
            <NavLink to="/cart">
              <h1 className="cursor-pointer">Cart</h1>
            </NavLink>

            <h1 className="text-red-500">Cart Items : {items.length}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
