import React from "react";
import { Link } from "react-router-dom";
import imgForhc from "../../Assets/Images/big_2x.jpg";

const LetSchedule = () => {
  const zerooemision =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/leaf_dark-e532c05b8617bc4965eba483d744d709d5ff500243bf51e4b349b6e3a29a4081.svg";
  const efficient =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/water_dark-6c4e4c79bcc509ee22053864ac37c585b24758d125782a90fafe28926f298c90.svg";
  const trastworthy =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/heart_check_dark-df6268e0c04940ad934b577123e7562c840bd382724377de16e929f9548da1a2.svg";
  return (
    <div className=" bg-teal-500 text-blue-800">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-20">
        <div className="m-5">
          <img src={imgForhc} alt="" />
        </div>
        <div className="text-left flex flex-col py-20 px-5 gap-3 font-bold">
          <p className="text-3xl font-bold py-5">
            Don’t let your chores define who you are
          </p>
          <p>Enter your address and schedule a collection today</p>

          <Link to="/about">
            <button className="btn btn-primary">Schedule Yout Pickup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LetSchedule;
