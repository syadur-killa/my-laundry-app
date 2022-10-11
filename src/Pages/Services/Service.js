import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import Wash from "./Wash";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="pt-10">
      <p className="text-6xl">Our Services</p>
      <div className="grid grid-cols-3 mx-4 gap-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
