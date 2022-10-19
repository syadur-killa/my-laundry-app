import React from "react";
import { Link } from "react-router-dom";
import laundry from "../../Assets/Images/laundry_service_home.png";
import dryclean from "../../Assets/Images/dry_clean_iron_home.png";
import homebedding from "../../Assets/Images/home_and_bedding_home.png";

const Serviceinf = () => {
  return (
    <div className="bg-gradient-to-r from-purple-300 to-sky-900">
      <div className="container mx-auto  py-10">
        <div>
          <p className="text-4xl pb-10 font-bold">
            Convenience at an{" "}
            <span className="text-yellow-500">affordable price</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10">
          <div>
            <div className="card mx-auto bg-base-100 shadow-xl">
              <p>BEST PRICE GUARANTEED</p>

              <figure className=" ">
                <img src={laundry} alt="Shoes" className="rounded-xl" />
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title">Laundry Service</h2>
                <p>
                  For your everyday laundry. Items are washed at 30°C or 45°C
                  and tumble dried.
                </p>
                <p>ONLY</p>
                <p>£16.95 per load of 6 kg</p>
              </div>
            </div>
          </div>

          <div>
            <div className="card mx-auto bg-base-100 shadow-xl">
              <p>BEST PRICE GUARANTEED</p>
              <figure className=" ">
                <img src={dryclean} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Dry Cleaning & Ironed laundry</h2>
                <p>
                  For individual cleaning. Items are washed or dry cleaned as
                  appropriate, ironed & delivered on hangers.
                </p>
                <p>FROM</p>
                <p>£2 per item</p>
              </div>
            </div>
          </div>
          <div>
            <div className="card mx-auto bg-base-100 shadow-xl">
              <p>BEST PRICE GUARANTEED</p>
              <figure className="px-10 ">
                <img src={homebedding} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Home & Bedding</h2>
                <p>
                  For items that are usually larger and require a different
                  cleaning process.
                </p>
                <p>FROM</p>
                <p>£2 per item</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Link to="/services">
            <button className="btn btn-primary">See Prices & Services</button>
          </Link>
        </div>
        <div className="py-5 text-white">
          <p>
            Our minimum order value is{" "}
            <span className="text-3xl font-bold text-black">£20</span>.
          </p>
          <p className="font-bold">All orders come with free delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default Serviceinf;
