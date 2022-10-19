import React from "react";
import { Link } from "react-router-dom";

const EasyBokking = () => {
  const twentyfour =
    "https://prod-cdn.laundryheap.com/assets/landing/subpages/why_us/sustainability-3b3a4a3e5ceab404aa0b9c3796528066d1fc261c01f624067dcaeb8b372ca949.png";
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  lg:py-10">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={twentyfour} />
          <div>
            <div className="text-left">
              <h1 className="text-3xl font-bold">Who we are</h1>
              <p className="py-6 font-bold">
                Founded in 2014 in London, Laundryheap is the next generation
                laundry & dry cleaning company. We offer professional laundry
                and dry cleaning delivered to your doorstep in as quick as 24
                hours.
              </p>
              <div>
                <p className="font-bold">We are available globally</p>
                <p className=" text-slate-600">
                  Since our beginnings in London, we have expanded globally to
                  11 countries. Our services are available in the following
                  countries: Netherlands, Ireland, UAE, Bahrain, Singapore,
                  Kuwait, Qatar, Sweden, United Kingdom, United States, and
                  Denmark.
                </p>
              </div>
              <Link to="/home">
                {" "}
                <p className="text-blue-500 font-bold">See Our Location</p>
              </Link>
              <div>
                <p>
                  <small className="font-bold">We are available globally</small>
                </p>
                <p className="text-sm text-slate-600">
                  Since our beginnings in London, we have expanded globally to
                  11 countries. Our services are available in the following
                  countries: Netherlands, Ireland, UAE, Bahrain, Singapore,
                  Kuwait, Qatar, Sweden, United Kingdom, United States, and
                  Denmark.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyBokking;
