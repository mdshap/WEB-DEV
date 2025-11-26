import React from "react";
import { use } from "react";
import Products from "../Products/Products";

const LatestProducts = ({ latestProductsPromise }) => {
  const latestProducts = use(latestProductsPromise);
  console.log(latestProducts);
  return (
    <div className="text-center font-semibold my-15">
      <h2 className="text-4xl mb-15">
        Recent <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-3 gap-8 mx-auto">
        {latestProducts.map((product) => (
          <Products product={product} key={product._id}></Products>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
