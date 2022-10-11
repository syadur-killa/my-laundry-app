import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../Assets/Images/banner.jpg";

const Banner = () => {
  return (
    <div className=" bg-sky-500">
      <div className="hero py-20">
        <div className="hero-content ">
          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div>
              <div>
                <h1 className="text-6xl font-bold text-stone-50 my-10 ">
                  Laundry & dry cleaning with 24h delivery in
                  <span className="text-yellow-500"> Dhaka</span>
                </h1>
              </div>
              <div>
                <div className="  items-center bg-slate-50 rounded p-5">
                  <p className="text-left">
                    Schedule your collection in Dhaka Change
                  </p>
                  <div className="flex justify-ceter gap-6">
                    <div className="w-max">
                      <button className="btn btn-outline btn-secondary">
                        <div className="mx-auto text-left">
                          <p>Earliest</p>
                          <p>7.00-8.00AM</p>
                        </div>
                        <div>K</div>
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-outline btn-secondary">
                        <div className="mx-auto text-left">
                          <p>Earliest</p>
                          <p>7.00-8.00AM</p>
                        </div>
                        <div>K</div>
                      </button>
                    </div>
                  </div>
                  <Link to="/services">
                    <p className="text-left text-primary">See all SLots </p>
                  </Link>
                </div>
              </div>
            </div>
            <img src={bannerImg} className="max-w-sm rounded-lg p-5" />
          </div>
        </div>
      </div>

      <div className="flex justify-between g bg-indigo-900 text-white py-5 px-10">
        <div className="text-left">
          <p className="text-4xl font-bold text-yellow-500">
            Ranked #1 by customers
          </p>
          <p>in categories Dry cleaner, Laundry service and Laundrette</p>
        </div>
        <div className="">
          <div>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
          </div>
          <div>
            <Link to="/services">Read More review</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
