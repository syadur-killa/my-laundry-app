import React from "react";
import { Link } from "react-router-dom";

const WhoWeare = () => {
  const twentyfour =
    "https://prod-cdn.laundryheap.com/assets/landing/subpages/why_us/sustainability-3b3a4a3e5ceab404aa0b9c3796528066d1fc261c01f624067dcaeb8b372ca949.png";
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  lg:py-10">
      <div className="m-5 my-auto">
        <img src={twentyfour} alt="" />
      </div>
      <div className="text-left py-20 px-5">
        <p className="text-4xl font-bold text-black">Who we are</p>
        <p className=" font-bold">
          Founded in 2014 in London, Laundryheap is the next generation laundry
          & dry cleaning company. We offer professional laundry and dry cleaning
          delivered to your doorstep in as quick as 24 hours.
        </p>
        <div className="py-3">
          <p>We are available globally</p>
          <p>
            Since our beginnings in London, we have expanded globally to 11
            countries. Our services are available in the following countries:
            Netherlands, Ireland, UAE, Bahrain, Singapore, Kuwait, Qatar,
            Sweden, United Kingdom, United States, and Denmark.
          </p>
        </div>
        <div>
          <p>We protect our environment</p>
          <p>
            Social and environmental sustainability is at the heart of what we
            do. We are building the largest fleet of electric delivery vehicles
            and are committed to reducing water, electricity consumption and the
            amount of packaging.
          </p>
          <p>You can read more at our Sustainability page.</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeare;
