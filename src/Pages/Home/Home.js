import React from "react";
import BookNow from "../Sheared/BookNow";
import Banner from "./Banner";
import BlogSnap from "./BlogSnap";
import CustomerQuestion from "./CustomerQuestion";
import CustomerReview from "./CustomerReview";
import HomeContent1 from "./HomeContent1";
import HomeContent2 from "./HomeContent2";
import HomeContent3 from "./HomeContent3";
import LaundrySolution from "./LaundrySolution";
import Ourprocess from "./Ourprocess";
import Serviceinf from "./Serviceinf";
import State from "./State";
import Team from "./Team";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Ourprocess></Ourprocess>
      {/* <State></State> */}
      <HomeContent1 />
      <HomeContent2 />
      <HomeContent3 />
      <Serviceinf />
      <CustomerReview />
      <WhyUs />
      <BookNow />
      <Team />
      <LaundrySolution />
      <CustomerQuestion />
      <BookNow />
      <BlogSnap />
    </div>
  );
};

export default Home;
