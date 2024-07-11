import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      //   console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <>
      <div className="font-bold pt-6 pb-12">Products</div>;
      <div className="flex flex-wrap gap-4  justify-center">
        {products.map((product) => {
          return (
            <>
              <div
                key={product.id}
                className="font-bold bg-gray-200 p-5 items-center justify-center flex flex-col gap-2 rounded w-60 "
              >
                <img src={product.image} width={100} height={100} alt="" />
                <h1 className="">{product.title.slice(0, 20)}</h1>
                {/* <div className="flex justify-around "> */}
                <h1 className="text-green-600 text-xl">{product.price}</h1>
                <button
                  onClick={() => handleAdd(product)}
                  className="bg-indigo-400 px-4 py-2 rounded text-white "
                >
                  Add to cart
                </button>
                {/* </div> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
