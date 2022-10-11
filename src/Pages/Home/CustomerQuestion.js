import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function CustomerQuestion() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className="mx-20 py-10 text-left ">
      <p className="text-primary">DO YOU HAVE QUESTIONS?</p>
      <Fragment>
        <Accordion open={open === 1} animate={customAnimation}>
          <AccordionHeader className="text-sm" onClick={() => handleOpen(1)}>
            Do you wash my clothes together with other people's clothes?
          </AccordionHeader>
          <AccordionBody>
            Absolutely not. Each order is washed separately so no need to worry
            about that. Your clothes are safe with us!
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={customAnimation}>
          <AccordionHeader className="text-sm" onClick={() => handleOpen(2)}>
            Where do you clean my clothes?
          </AccordionHeader>
          <AccordionBody>
            After your items are collected by our driver, they are taken to one
            of our trusted partner facilities to ensure your items are treated
            with the utmost care. We take pride in supporting local businesses
            and minimizing the carbon emissions from transport.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={customAnimation}>
          <AccordionHeader className="text-sm" onClick={() => handleOpen(3)}>
            What is the turnaround time?
          </AccordionHeader>
          <AccordionBody>
            You will be happy to know that last month we have delivered 98.7% of
            all standard laundry and dry cleaning within 24 hours.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} animate={customAnimation}>
          <AccordionHeader className="text-sm" onClick={() => handleOpen(4)}>
            What if I'm not at home during collection or delivery?
          </AccordionHeader>
          <AccordionBody>
            Not a problem. If you won't be at home during delivery, you can use
            our mobile app to simply reschedule or instruct the driver to leave
            your items in a safe place or at a reception if you have one. You
            can also always contact our Customer support team to get help.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
}
