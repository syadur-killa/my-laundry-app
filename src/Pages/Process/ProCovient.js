import React from "react";
import { Link } from "react-router-dom";
import benefit_1 from "../../Assets/Images/benefit_4.png";
import time from "../../Assets/Icones/24.svg";
import dial from "../../Assets/Icones/dial.svg";
import phone from "../../Assets/Icones/phone.svg";

const ProCovient = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-20">
      <div className="m-5">
        <img src={benefit_1} alt="" />
      </div>
      <div className="text-left flex flex-col py-20 px-5">
        <p>CONVENIENT</p>
        <p className="text-3xl font-bold py-5">
          4. Relax while we take care of your laundry
        </p>
        <p>
          Your local partner facility will clean your items with utmost care.
          Our driver will then deliver them back to you whenever you like.
          You’re in full control of your delivery and can always reschedule if
          not at home.
        </p>
        <div className="font-sm font-bold">
          <div className="flex justify-start items-center">
            <img src={time} alt="" />
            <p className="px-2">24h turnaround time</p>
          </div>
          <div className="flex justify-start items-center">
            <img src={dial} alt="" />
            <p className="px-2">Real-time order status</p>
          </div>
          <div className="flex justify-start items-center">
            <img src={phone} alt="" />
            <p className="px-2">Easy to reschedule</p>
          </div>
          <Link to="/services">
            <button className="btn btn-primary">Scheduled your Pickup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProCovient;
