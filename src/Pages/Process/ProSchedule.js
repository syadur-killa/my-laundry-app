import React from "react";
import { Link } from "react-router-dom";
import benefit_1 from "../../Assets/Images/benefit_1.png";
import book from "../../Assets/Images/click-320.svg";
import moon from "../../Assets/Images/moon.svg";

const ProSchedule = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-20">
      <div className="text-left flex flex-col py-20 px-5">
        <p>FLEXIBLE</p>
        <p className="text-3xl font-bold py-5">1. Schedule your collection</p>
        <p>
          Plan your day with ease. Choose a collection and delivery time at your
          convenience.
        </p>
        <div className="font-sm font-bold">
          <div className="flex justify-start items-center">
            <img src={book} alt="" />
            <p className="px-2">Book online or with our mobile app</p>
          </div>
          <div className="flex justify-start items-center">
            <img src={moon} alt="" />
            <p className="px-2">Weekend and evening slots available</p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <img src={benefit_1} alt="" />
      </div>
    </div>
  );
};

export default ProSchedule;
