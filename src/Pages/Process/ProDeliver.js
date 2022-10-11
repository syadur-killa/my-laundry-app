import React from "react";
import { Link } from "react-router-dom";
import benefit_1 from "../../Assets/Images/benefit_3.png";
import dial from "../../Assets/Icones/dial.svg";
import truck from "../../Assets/Icones/truck.svg";

const ProDeliver = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-20">
      <div className="text-left flex flex-col py-20 px-5">
        <p>TRANSPARENT</p>
        <p className="text-3xl font-bold py-5">3. Wait for our driver</p>
        <p>
          You’ll receive a notification when our driver is nearby. They will
          collect your bags and take them to your local cleaning facility.
        </p>
        <div className="font-sm font-bold">
          <div className="flex justify-start items-center">
            <img src={dial} alt="" />
            <p className="px-2">Regular order updates</p>
          </div>
          <div className="flex justify-start items-center">
            <img src={truck} alt="" />
            <p className="px-2">Live driver tracking</p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <img src={benefit_1} alt="" />
      </div>
    </div>
  );
};

export default ProDeliver;
