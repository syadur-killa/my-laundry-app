import React from "react";
import service_fee from "../../Assets/Icones/service_fee.svg";
import minimum_order from "../../Assets/Icones/minimum_order.svg";
import free_delivery from "../../Assets/Icones/free_delivery.svg";

const ServiceBase = () => {
  return (
    <div className="bg-blue-900">
      <div
        className=" container  bg-blue-900 text-white grid grid-cols-1
       lg:grid-cols-3 px-10 lg:px-20 py-3 lg:py-10 mx-auto gap-2"
      >
        <div className="flex justify-content items-center">
          <img src={free_delivery} alt="" />
          <p className="pl-2">Free 24h delivery</p>
        </div>
        <div className="flex justify-content items-center">
          <img src={minimum_order} alt="" />
          <p className="pl-2">£20 minimum order</p>
        </div>
        <div className="flex justify-content items-center">
          <img src={service_fee} alt="" />
          <p className="pl-2">Service fee from £1.99</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceBase;
