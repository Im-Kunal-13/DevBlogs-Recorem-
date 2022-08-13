import { Tooltip } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { HiDotsVertical, HiOutlineShare } from "react-icons/hi";
import { getBlog } from "../../api/index";
import { Blog } from "../../types";
import { Markup } from "interweave";
import {avatar} from "../../assets/images"

import styles from "./Blog.module.scss";

type Props = { blogId: string };

const BlogPost = ({ blogId }: Props) => {
  const [blog, setBlog] = useState<Blog>();

  const init = async () => {
    const data = await getBlog(blogId);
    setBlog(data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="mt-24 flex items-center flex-col justify-center xl:px-60 lg:px-40 lg:px-20">
      <h1 className="md:text-4xl sm:text-3xl text-xl font-bold sm:py-14 py-7 font-montserrat uppercase lg:px-20 text-center leading-tight">
        {blog?.title}
      </h1>
      <div className="flex items-center gap-4 sm:mb-14 mb-7">
        <Image
          //@ts-ignore
          src={blog?.owner?.pic || avatar}
          alt="profile"
          className="rounded-full"
          width={60}
          height={60}
        />
        <div>
          <p className="font-bold ">{blog?.owner?.username}</p>
          <p className="text-gray-400 font-medium">{blog?.timeCreated}</p>
        </div>
      </div>
      <div className="2xl:w-55-rem ">
        <img
          src={blog?.coverImage}
          alt="cover"
          className="object-cover rounded overflow-hidden shadow-inputTheme transition-all cursor-pointer 2xl:h-30-rem w-full"
        />
        <div className="flex items-center justify-between py-5 w-full lg:px-0 sm:px-5 px-2.5">
          <div className="flex items-center gap-3">
            <Tooltip
              label="I like this"
              withArrow
              // @ts-ignore
              placement="center"
              position="bottom"
            >
              <button className="rounded-full shadow-inputTheme border p-3 transition-all hover:scale-105">
                {/* <FaRegHeart color="#313EF7" size={20} /> */}
                <FaHeart color="#313EF7" size={25} />
              </button>
            </Tooltip>
            <span className="text-lg font-medium">152 likes</span>
          </div>
          <div className="flex items-center gap-7">
            <HiOutlineShare color="black" size={25} />

            <BiCommentDetail color="black" size={25} />
            <HiDotsVertical color="black" size={25} />
          </div>
        </div>
        <div className="flex items-center gap-2 pb-5 lg:px-0 px-2.5 sm:px-5">
          {blog?.categories?.map((category) => (
            <span
              className="py-2 px-5 text-xs bg-themeBlue1 rounded text-white"
              key={category}
            >
              {category}
            </span>
          ))}
        </div>
        {/* <p className="text-gray-700 text-xl leading-relaxed pb-5 lg:px-0 sm:px-5 px-2.5"> */}
        <Markup content={blog?.description} />
        {/* </p> */}
      </div>
      <div className="h-96" />
    </div>
  );
};

export default BlogPost;
