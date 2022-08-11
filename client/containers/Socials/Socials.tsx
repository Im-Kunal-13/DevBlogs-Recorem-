import React from "react";

import styles from "./Socials.module.scss";
import { FaLinkedinIn, FaTwitter, FaDiscord } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Tooltip } from "@mantine/core";
import Link from "next/link";

type Props = {};

const Socials = (props: Props) => {
  return (
    <div className="flex items-center justify-center pb-6 gap-4">
      {[
        {
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/kunal-mondal-41baa8212/",
          Icon: FaLinkedinIn,
        },
        {
          label: "Twitter",
          link: "https://twitter.com/ImKunal13z",
          Icon: FaTwitter,
        },
        {
          label: "Discord",
          link: "https://www.linkedin.com/in/kunal-mondal-41baa8212/",
          Icon: FaDiscord,
        },
        {
          label: "Github",
          link: "https://github.com/Im-Kunal-13",
          Icon: BsGithub,
        },
      ].map((item) => (
        <Tooltip
          label={item.label}
          withArrow
          // @ts-ignore
          placement="center"
          position="top"
          offset={15}
          key={item.label}
        >
          <a
            href={item.link}
            className="p-3 rounded-full bg-gray-100 shadow-inputTheme transition-all hover:bg-gray-200 hover:scale-125"
          >
            <item.Icon size={22.5} />
          </a>
        </Tooltip>
      ))}
    </div>
  );
};

export default Socials;
