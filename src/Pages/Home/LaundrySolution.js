import React from "react";
import { Link } from "react-router-dom";
import imgForhc from "../../Assets/Images/app_2x.jpg";
import cashless from "../../Assets/Images/cashless.svg";
import contactless from "../../Assets/Images/contactless.svg";
import realtime from "../../Assets/Images/realtime.svg";
import chat from "../../Assets/Images/chat-ecb.svg";
import cart from "../../Assets/Images/heart_yellow_boxed.svg";
import apple from "../../Assets/Images/apple.png";
import play from "../../Assets/Images/play_store.png";
import qr from "../../Assets/Images/qr_code.png";

const LaundrySolution = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-10">
        <div className="text-left flex flex-col py-20 px-5">
          <p className="text-3xl font-bold py-5">
            Your Laundry and Dry cleaning solution just a click away
          </p>
          <div className="font-bold">
            <div className="flex justify-start items-center">
              <img src={cashless} alt="" />
              <p className="px-2">Free collection and delivery</p>
            </div>
            <div className="flex justify-start items-center">
              <img src={contactless} alt="" />
              <p className="px-2">Dedicated 24/7 support</p>
            </div>
            <div className="flex justify-start items-center">
              <img src={realtime} alt="" />
              <p className="px-2">Free collection and delivery</p>
            </div>
            <div className="flex justify-start items-center">
              <img src={chat} alt="" />
              <p className="px-2">Dedicated 24/7 support</p>
            </div>
          </div>
        </div>
        <div className="m-5">
          <img src={imgForhc} alt="" />
        </div>
      </div>
      <div className="flex border py-3">
        <div>
          <div className="flex">
            <img src={cart} alt="" />
            <p>Get and App</p>
          </div>
          <div className="flex">
            <img className="h-12" src={apple} alt="" />
            <img className="h-12" src={play} alt="" />
          </div>
        </div>
        <img className="w-12 h-12" src={qr} alt="" />
      </div>
    </div>
  );
};

export default LaundrySolution;
