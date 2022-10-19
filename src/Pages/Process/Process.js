import React from "react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div className="">
      <div className="hero py-20  bg-sky-200">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="text-6xl font-bold">Quick. Clean. Fresh.</h1>
            <p className="py-5">Your laundry delivered in 24h</p>

            <Link to="/price">
              <button className="btn btn-primary">Scheduled your Pickup</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
