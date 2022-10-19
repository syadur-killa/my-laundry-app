import React from "react";
import { Link } from "react-router-dom";
import imgForhc from "../../Assets/Images/LaundryService3.jpg";

const HomeContent3 = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-10">
      <div className="m-5">
        <img src={imgForhc} alt="" />
      </div>
      <div className="text-left flex flex-col py-20 px-5">
        <p>24/7 CUSTOMER SUPPORT</p>
        <p className="text-3xl font-bold py-5">We’re here for you</p>
        <p>
          Any change in delivery times or date, or if something goes wrong, we
          are here. Our online customer support team will assist you day and
          night.
        </p>
        <label htmlFor="my-modal-6" className="btn btn-primary">
          Chat With Us
        </label>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              send
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent3;
