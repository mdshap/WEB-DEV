import React from "react";
import { use } from "react";
import Products from "../Products/Products";

const allProductsPromise = fetch("http://localhost:3000/products").then((res) =>
  res.json()
);

const AllProducts = () => {
  const allProducts = use(allProductsPromise);

  console.log(allProducts)
  return (
    <div className="text-center font-semibold my-15">
      <h2 className="text-4xl mb-15">
        All <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {allProducts.map((product) => {
          return <Products product={product} key={product._id}></Products>;
        })}
      </div>
    </div>
  );
};

export default AllProducts;
