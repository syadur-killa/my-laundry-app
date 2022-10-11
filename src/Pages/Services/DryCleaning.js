import React from "react";
import wash from "../../Assets/Images/wash_big.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const DryCleaning = () => {
  const data = [
    {
      label: "Price List",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Service Details",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <div className="py-10">
      <div className="flex justify-between mx-10">
        <div className="text-left">
          <p className="text-3xl font-bold text-primary">Wash</p>
          <p>For everyday laundry, bedsheets and towels.</p>
          <p>
            <span>Wash</span> <span>TUMBLE-DRY</span>
          </p>
        </div>
        <div>
          <img className="h-16" src={wash} alt="" />
        </div>
      </div>
      <div>
        <Tabs value="html">
          <div className="flex flex-start gap-5">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  <button className="btn btn-outline btn-primary">
                    {label}
                  </button>
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <div className="divider"></div>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default DryCleaning;
