import React from "react";
import { Link } from "react-router-dom";
import benefit_1 from "../../Assets/Images/benefit_2.png";
import bag from "../../Assets/Icones/bag.svg";
import weight from "../../Assets/Icones/weight.svg";

const ProPack = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-20">
      <div className="m-5">
        <img src={benefit_1} alt="" />
      </div>
      <div className="text-left flex flex-col py-20 px-5">
        <p>QUICK & EASY</p>
        <p className="text-3xl font-bold py-5">2. Pack your laundry</p>
        <p>
          Pack your items in a disposable bag. Use one bag per service. Our
          driver will transfer them to reusable Laundryheap bags which you can
          keep for your next order.
        </p>
        <div className="font-sm font-bold">
          <div className="flex justify-start items-center">
            <img src={bag} alt="" />
            <p className="px-2">Pack one bag per service</p>
          </div>
          <div className="flex justify-start items-center">
            <img src={weight} alt="" />
            <p className="px-2">No need to count or weigh your items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProPack;
