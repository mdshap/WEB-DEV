import React from "react";
import { Link } from "react-router";

const Products = ({ product }) => {

  const {_id, title, price_min, price_max, status} = product;

  return (
    <div>
      <div className="card bg-base-100 h-[464px] w-96 shadow-sm">
        <figure className="px-3 pt-3 h-[276px]">
          <img
            src="./smart-deals-resources/assets/thumbnail-card.png"
            className="rounded-md"
          />
        </figure>
        
                
        <div className="card-body items-center text-center ">
            <p className=" text-left text-white w-full"><span className="bg-purple-200 text-primary py-1 px-3 rounded-2xl ">{status}</span></p>
            
          <h2 className="card-title text-xl text-left w-full ">
            {title}{" "}
          </h2>
          <p className="text-lg font-semibold text-primary text-left w-full">
            $ {price_min}- {price_max}
          </p>
          <div className="card-actions  w-full">
            <Link to={`/productdetails/${_id}`} className="btn bg-white border-primary text-primary w-full">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
