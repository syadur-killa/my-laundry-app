import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { about, serviceName, price, type, picture } = service;
  return (
    <Link to="/price">
      <div className="card mx-auto bg-base-100 shadow-xl">
        <img
          className="object-scale-down h-48 w-48 items-center "
          src={picture}
          alt=""
        />
        <div className="card-body items-center text-center">
          <h2 className="card-title">{serviceName}</h2>
          <p>{about}</p>
          <p> Start at ${price}</p>
          <p className="text-sm ">
            <span className="badge">{type[0]}</span>{" "}
            <span className="badge">{type[1]}</span>{" "}
            <span className="badge">{type[2]}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
