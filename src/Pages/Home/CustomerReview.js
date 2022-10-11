import React from "react";
import { Link } from "react-router-dom";
import TestmonialCard from "./TestmonialCard";

const CustomerReview = () => {
  const reviewes = [
    {
      _id: 1,
      testimonials:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus beatae in autem perferendis dolore exercitationem, temporibus, iure lab",
      name: "Javed Korim",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      address: "Sylhet",
    },
    {
      _id: 2,
      testimonials:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.ficia!",
      name: "Javed Korim",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      address: "Rajshahi",
    },
    {
      _id: 3,
      testimonials:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voest officia!",
      name: "Javed Korim",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      address: "Khulna",
    },
  ];
  return (
    <div>
      <div className="container text-center flex justify-center ">
        <div className="py-10 px-10">
          <h4 className="text-3xl  font-bold">Our happy customers</h4>
          <h2 className="text-xl">Rated Excellent by 5,000+ Users</h2>
          <Link to="/services">
            <p className="text-primary">Read more reviews</p>
          </Link>
        </div>
      </div>
      <div>
        <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviewes.map((review) => (
            <TestmonialCard key={review._id} review={review}></TestmonialCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
