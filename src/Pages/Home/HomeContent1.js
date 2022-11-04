import React from "react";
import { Link } from "react-router-dom";
import imgForhc from "../../Assets/Images/LaundryService.jpg";

const HomeContent1 = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:px-10 lg:py-10">
      <div className="m-5">
        <img src={imgForhc} alt="" />
      </div>
      <div className="text-left flex flex-col py-20 px-5">
        <p>FREEDOM FROM LAUNDRY test</p>
        <p className="text-3xl font-bold py-5">
          A laundry service designed for you
        </p>
        <p>
          Never worry about staining your favourite shirt. We offer laundry, dry
          cleaning and ironing at a schedule that fits your lifestyle.
        </p>
        <Link to="/services" className="text-primary py-3 text-right">
          See how it works
        </Link>
      </div>
    </div>
  );
};

export default HomeContent1;
