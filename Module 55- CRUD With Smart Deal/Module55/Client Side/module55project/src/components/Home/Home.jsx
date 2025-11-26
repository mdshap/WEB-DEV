import React from "react";
import LatestProducts from "../LatestProducts/LatestProducts";
import Products from "../Products/Products";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}></LatestProducts>
      <div className=" w-full mx-auto text-center">
        <button className="btn btn-primary px-10 mb-20">Show All</button>
      </div>
    </div>
  );
};

export default Home;
