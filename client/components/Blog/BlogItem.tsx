import Image from "next/image";
import { avatar } from "../../assets/images/index";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShare, HiDotsVertical } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import { Tooltip } from "@mantine/core";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Markup } from "interweave";

import styles from "./BlogItem.module.scss";
import { Blog } from "../../types";
import { useEffect } from "react";

type Props = { blog: Blog };

const BlogItem = ({ blog }: Props) => {
  const router = useRouter();

  return (
    <motion.div
      className="xl:col-span-2 lg:col-span-3 col-span-6 flex flex-col flex-start bg-transparent shadow-searchInput"
      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img
        src={blog?.coverImage}
        alt="cover"
        className="object-cover rounded overflow-hidden hover:shadow-black1 transition-all md:hover:scale-125 cursor-pointer h-72"
        onClick={() => {
          router.push(`/blog/${blog?._id}`);
        }}
      />
      <div className="px-5 rounded overflow-hidden">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Tooltip
              label="I like this"
              withArrow
              // @ts-ignore
              placement="center"
              position="bottom"
            >
              <button className="rounded-full shadow-inputTheme border p-2 transition-all hover:scale-105">
                {/* <FaRegHeart color="#313EF7" size={20} /> */}
                <FaHeart color="#313EF7" size={20} />
              </button>
            </Tooltip>
            <span>152 likes</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineShare color="black" size={20} />
            <BiCommentDetail color="black" size={20} />
            <HiDotsVertical color="black" size={20} />
          </div>
        </div>
        <div className="flex items-center gap-2 pb-4">
          {blog.categories.map((category: string) => (
            <span
              className="py-1 px-3 text-xs bg-themeBlue1 rounded text-white"
              key={category}
            >
              {category}
            </span>
          ))}
        </div>
        <p className="text-xl font-bold pb-4 font-montserrat">
          {blog?.title?.slice(0, 52) + "..."}
        </p>
        <div className="text-gray-400 font-semibold pb-5">
          {<Markup content={blog?.description?.slice(0, 162) + "....."} />}
        </div>

        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center gap-3 cursor-pointer">
            <Tooltip
              label="View Profile"
              withArrow
              position="bottom"
              offset={23}
            >
              <button
                onClick={() => router.push(`/profile/${blog?.owner?._id}`)}
              >
                <Image
                  src={blog?.owner.pic}
                  className="rounded-full"
                  alt="Blog owner"
                  width={50}
                  height={50}
                />
              </button>
            </Tooltip>
            <div>
              <p className="font-semibold">{blog?.owner?.username}</p>
              <p className="text-gray-400">{blog?.timeCreated}</p>
            </div>
          </div>
          <Tooltip
            label="View Blog"
            withArrow
            // @ts-ignore
            placement="center"
            position="top"
            offset={15}
          >
            <button
              className="p-3 rounded-full bg-themeBlue3 shadow-whity transition-all hover:scale-125"
              onClick={() => {
                router.push(`blog/${blog?._id}`);
              }}
            >
              <HiOutlineArrowNarrowRight size={20} color="white" />
            </button>
          </Tooltip>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogItem;
