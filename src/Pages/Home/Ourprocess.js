import React from "react";

const Ourprocess = () => {
  const twentyfour =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/24-3435ffaf292eb948ff83ca5e64dabec878e0c27316dec67b632cbf492e34f97e.svg";
  const truck =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/truck-714a3cd6450430a204a46d86196df6dd97b711709c9852df248c930c52ebfe49.svg";
  const chat =
    "https://prod-cdn.laundryheap.com/assets/landing/icons/chat-ecb700cb9b10e2d9668526900e47d154e28ef3b6a82dd4b0989b86cf1167ad76.svg";
  return (
    <div className="container mx-auto py-20">
      <p className="text-4xl mx-20 py-5 font-bold">
        <p> We collect, clean, and deliver </p>
        <p>your laundry and dry cleaning.</p>
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto text-lg font-bold py-5 px-10 sm:items-center sm:gap-4">
        <div className="flex justify-start items-center">
          <img src={twentyfour} alt="" />
          <p className="px-2"> 24h turnaround time</p>
        </div>
        <div className="flex justify-start items-center">
          <img src={truck} alt="" />
          <p className="px-2">Free collection and delivery</p>
        </div>
        <div className="flex justify-start items-center">
          <img src={chat} alt="" />
          <p className="px-2">Dedicated 24/7 support</p>
        </div>
      </div>
    </div>
  );
};

export default Ourprocess;
