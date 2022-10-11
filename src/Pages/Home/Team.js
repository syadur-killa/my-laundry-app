import React from "react";
import team from "../../Assets/Images/team.png";

const Team = () => {
  return (
    <div className="bg-blue-900 py-20">
      <div className="text-white pb-5">
        <p className="text-3xl font-bold">Meet the team</p>
        <p>
          We’re a global team of laundry, tech, and logistics experts on a
          mission to free people from laundry so that they can spend more time
          doing what they
        </p>

        <p>TEAM MY-Laundry</p>
      </div>
      <img src={team} alt="" />
    </div>
  );
};

export default Team;
