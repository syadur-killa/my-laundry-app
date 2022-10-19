import React from "react";
import { Link } from "react-router-dom";

const BookNow = () => {
  return (
    <div className="bg-yellow-300 py-10">
      <p className="text-3xl font-bold">Book now. Smile away. Everyday.</p>
      <Link to="/price">
        <button className="btn btn-active btn-secondary my-3">
          Scheduled Your PickUp
        </button>
      </Link>
    </div>
  );
};

export default BookNow;
