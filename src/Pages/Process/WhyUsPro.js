import React from "react";
import { Link } from "react-router-dom";
import imgForhc from "../../Assets/Images/why_us.jpg";

const WhyUsPro = () => {
  const zerooemision =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/leaf_dark-e532c05b8617bc4965eba483d744d709d5ff500243bf51e4b349b6e3a29a4081.svg";
  const efficient =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/water_dark-6c4e4c79bcc509ee22053864ac37c585b24758d125782a90fafe28926f298c90.svg";
  const trastworthy =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/heart_check_dark-df6268e0c04940ad934b577123e7562c840bd382724377de16e929f9548da1a2.svg";
  return (
    <div className=" bg-blue-900 text-yellow-400">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-20">
        <div className="text-left flex flex-col py-20 px-5 gap-3 font-bold">
          <p className="text-3xl font-bold py-5">
            Reinventing the future of laundry and dry cleaning.
          </p>
          <div className="flex justify-start items-center">
            <img src={zerooemision} alt="" />
            <p className="px-2">Zero-emission delivery vehicles</p>
          </div>
          <div className="flex justify-start items-center">
            <img src={efficient} alt="" />
            <p className="px-2">Efficient water use</p>
          </div>
          <div className="flex justify-start items-center">
            <img src={trastworthy} alt="" />
            <p className="px-2">Trustworthy local cleaners</p>
          </div>
          <Link to="/about">
            <button className="btn btn-primary">About Us</button>
          </Link>
        </div>
        <div className="m-5">
          <img src={imgForhc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyUsPro;
