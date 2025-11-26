import React, { use } from "react";
import { useState } from "react";
import { AuthContext } from "../../contexts/AuthContexts";
import { useLoaderData } from "react-router";

const ProductDetails = () => {
  const { user } = use(AuthContext);
  const { _id } = useLoaderData();

  const [open, setOpen] = useState(false);

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const priceBid = parseInt(e.target.price.value);
    console.log(name, email, priceBid);

    const newBid = {
      productId: _id,
      buyer_name: name,
      buyer_email: email,
      bid_price: priceBid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data placing bid", data);
        setOpen(false);
        alert("Placed Bid Successfylly");
      });
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={user ? () => setOpen(true) : () => alert("Please Login ")}>
        Place Bid For this Product
      </button>

      {open && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Place Your Bid</h3>
            <form onSubmit={handleBidSubmit}>
              <fieldset className="fieldset w-full">
                <div className="flex gap-8">
                  <div>
                    <label className="label">Name</label>
                    <input
                      defaultValue={user.displayName}
                      readOnly
                      name="name"
                      type="text"
                      className="input w-full"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="label">Email</label>
                    <input
                      defaultValue={user.email}
                      name="email"
                      type="email"
                      className="input w-full"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <label className="label">Place Your Price</label>
                <input
                  name="price"
                  type="number"
                  className="input w-full"
                  placeholder="e.g. Artisan Roasters"
                />

                <label className="label">Contact No.</label>
                <input
                  name="phone"
                  type="text"
                  className="input w-full"
                  placeholder="e.g. +8801843399550"
                />

                <button className="btn btn-primary mt-4">Place Bid</button>
              </fieldset>
            </form>

            <div className="modal-action">
              <button
                className="btn w-full border-purple-400 text-purple-700"
                onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
