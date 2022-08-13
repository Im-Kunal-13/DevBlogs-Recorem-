import NextImage from "next/image";
import React, { useEffect, useState } from "react";
import { avatar } from "../../assets/images";
import { BiPlus } from "react-icons/bi";
import { Tooltip } from "@mantine/core";
import { motion } from "framer-motion";

import styles from "./ProfileHeader.module.scss";
import { Blog, User } from "../../types";

type Props = { user: User | undefined };

const ProfileHeader = ({ user }: Props) => {
  return (
    <motion.div
      className="flex items-center flex-col justify-center pt-14 mt-24"
      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative mb-14">
        <div className="rounded-full  shadow-inputTheme overflow-hidden">
          <NextImage
            src={user?.pic || avatar}
            width={250}
            height={250}
            className="object-cover"
          />
        </div>

        <Tooltip
          label="Update pic"
          withArrow
          // @ts-ignore
          placement="center"
          position="bottom"
          offset={15}
        >
          <motion.button
            className="absolute bg-themeBlue3 rounded-full p-2 shadow-inputTheme bottom-4 right-1 border-4 transition-all"
            style={{ borderColor: "rgba(255, 255, 255, .5)" }}
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.01 },
            }}
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "backInOut" }}
          >
            <BiPlus size={40} color="white" />
          </motion.button>
        </Tooltip>
      </div>
      <div className="flex items-center flex-col">
        <h1 className="font-semibold font__kaushan text-5xl">
          {user?.username}
        </h1>
        <a
          href="mailto:2002kunalmondal13@gmail.com"
          className="font__kaushan tracking-wider mt-5 text-gray-400 font-semiboldfont-semibold hover:underline cursor-pointer"
        >
          {user?.email}
        </a>
      </div>
      <div className="flex items-center 2xl:gap-60 md:gap-36 gap-14 mt-14">
        <div className="flex items-center flex-col gap-3">
          <h2 className="font-semibold font__kaushan text-4xl">{5}</h2>
          <span className="font-montserrat  text-gray-400 cursor-pointer">
            posts
          </span>
        </div>
        <div className="flex items-center flex-col gap-3">
          <h2 className="font-semibold font__kaushan text-4xl">2k</h2>
          <span className="font-montserrat  text-gray-400 cursor-pointer">
            followers
          </span>
        </div>
        <div className="flex items-center flex-col gap-3">
          <h2 className="font-semibold font__kaushan text-4xl">1k</h2>
          <span className="font-montserrat  text-gray-400 cursor-pointer">
            following
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
