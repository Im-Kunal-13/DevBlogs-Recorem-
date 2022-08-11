import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Select } from "@mantine/core";
import { BiSearchAlt } from "react-icons/bi";
import "./Faq.scss";

export const Faq = () => {
  const faqs = [
    {
      ques: "How is the IoT network reliability ensured?",
      ans: "The sensors are always connected through a reliable array of networking equipment such as routers, boosters and repeaters to the internet all the time.",
    },
    {
      ques: "How long is the installation process?",
      ans: "A sensor installation is completed in less than 5 min.",
    },
    {
      ques: "Is your data secure?",
      ans: "Our security protocol complies with TLS 1.2 and UL 2900-2-2. The data in the sensor is stored locally with scheduled uploads to cloud server using the most cyber secure platform (certified by UL) available in the world.",
    },
    {
      ques: "Is your hardware industry compliant/ certified?",
      ans: "Yes, our Hardware is IP68 approved with IECEx/ATEX Zone 1, ASME Class 1 Div. 2, UL746C approved.",
    },
  ];

  return (
    <div
      className="lg:px-4 w-full h-full relative xl:bottom-23-rem bottom-40 flex flex-col items-center z-10"
      id="faq"
    >
      <div className="flex flex-col items-center mb-5">
        <h1 className="sm2:text-4xl text-2xl font-semibold mb-4 leading-10">
          Frequently Asked Questions
        </h1>
        <span className="text-gray-400 font-medium mb-5">
          Have questions? We're here to help.
        </span>
        <Select
          placeholder="Search"
          data={faqs.map((item) => item.ques)}
          className="shadow sm2:w-80 w-64"
          icon={<BiSearchAlt size={20} />}
          rightSection={<></>}
          clearable
          maxDropdownHeight={280}
          searchable
          nothingFound={<>No matches found!</>}
        />
      </div>
      <Accordion flush className="lg:w-60-rem md:w-160 w-full">
        {faqs.map((faq, index) => (
          <Accordion.Item
            eventKey={index}
            key={index}
            className="bg-transparent py-3"
          >
            <Accordion.Header>{faq.ques}</Accordion.Header>
            <Accordion.Body className="text-gray-400 font-medium mr-10 tracking-wider">
              {faq.ans}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
