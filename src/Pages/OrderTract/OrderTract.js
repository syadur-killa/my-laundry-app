import React from "react";
import BottonNavigation from "./BottonNavigation";
import OrderStatus from "./OrderStatus";
import Status from "./Status";

const OrderTract = () => {
  return (
    <div>
      <OrderStatus />
      <div className="block lg:hidden">
        <BottonNavigation />
      </div>
      <Status />
    </div>
  );
};

export default OrderTract;
