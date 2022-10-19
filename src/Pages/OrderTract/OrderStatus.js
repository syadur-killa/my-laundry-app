import React from "react";

const OrderStatus = () => {
  return (
    <div className="text-xl font-bold py-10">
      <div className="py-10">
        <p className="text-3xl font-bold ">Order Id - kjhsd6rbweui7</p>
        <p>Expected Delivered time: 7.30 am</p>
      </div>
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Register</li>
        <li className="step step-primary">Choose plan</li>
        <li className="step">Purchase</li>
        <li className="step">Receive Product</li>
      </ul>
    </div>
  );
};

export default OrderStatus;
