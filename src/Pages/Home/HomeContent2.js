import React from "react";
import { Link } from "react-router-dom";
import imgForhc from "../../Assets/Images/LaundryService2.jpg";

const HomeContent2 = () => {
  const twentyfour =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/24-3435ffaf292eb948ff83ca5e64dabec878e0c27316dec67b632cbf492e34f97e.svg";
  const schedule =
    "https://prod-cdn.laundryheap.com/assets/landing/benefits/bag-4ce09f20854869392ff759b2698a6890b263730052076f348f7d5b12e357514a.svg";
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-10">
      <div className="text-left flex flex-col py-20 px-5">
        <p>24H TURNAROUND TIME</p>
        <p className="text-3xl font-bold py-5">No need to plan in advance</p>
        <div className="flex justify-start items-center">
          <img src={schedule} alt="" />
          <p className="px-2">Free collection and delivery</p>
        </div>
        <div className="flex justify-start items-center">
          <img src={twentyfour} alt="" />
          <p className="px-2">Dedicated 24/7 support</p>
        </div>
      </div>
      <div className="m-5">
        <img src={imgForhc} alt="" />
      </div>
    </div>
  );
};

export default HomeContent2;
