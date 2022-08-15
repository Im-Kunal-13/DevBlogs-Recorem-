import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShare, HiDotsVertical } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import { Tooltip } from "@mantine/core";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Markup } from "interweave";
import { likePost, unlikePost } from "../../api";
import { useAppStateContext } from "../../context/contextProvider";
import { Blog } from "../../types";

import styles from "./BlogItem.module.scss";

type Props = { blog: Blog };

const BlogItem = ({ blog }: Props) => {
  const [blogCard, setBlogCard] = useState(blog);

  const handleSubmitLike = async () => {
    try {
      const data = await likePost(blog?._id);
      setBlogCard(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitUnlike = async () => {
    try {
      const data = await unlikePost(blog?._id);
      setBlogCard(data);
    } catch (error) {
      console.log(error);
    }
  };

  //@ts-ignore
  const { user } = useAppStateContext();

  const router = useRouter();

  return (
    <motion.div
      className="xl:col-span-2 lg:col-span-3 col-span-6 flex flex-col flex-start bg-transparent shadow-searchInput"
      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img
        src={blogCard?.coverImage}
        alt="cover"
        className="object-cover rounded overflow-hidden hover:shadow-black1 transition-all md:hover:scale-125 cursor-pointer h-72"
        onClick={() => {
          router.push(`/blog/${blogCard?._id}`);
        }}
      />
      <div className="px-5 rounded overflow-hidden">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            {blogCard?.owner?._id === user?._id ? (
              <button className="rounded-full shadow-inputTheme p-2 transition-all hover:scale-105">
                <FaHeart className="text-gray-300" size={20} />
              </button>
            ) : (
              <Tooltip
                label={
                  blogCard?.likes?.includes(user?._id)
                    ? "I don't like this"
                    : "I like this"
                }
                withArrow
                // @ts-ignore
                placement="center"
                position="bottom"
              >
                {blogCard?.likes?.includes(user?._id) ? (
                  <button
                    className="rounded-full shadow-inputTheme p-2 transition-all duration-300 hover:scale-125"
                    onClick={() => {
                      handleSubmitUnlike();
                    }}
                  >
                    <FaHeart
                      color="#313EF7"
                      size={20}
                      className="hover:scale-125 transition-all duration-300"
                    />
                  </button>
                ) : (
                  <button className="rounded-full shadow-inputTheme p-2 transition-all duration-300 hover:scale-125">
                    <FaRegHeart
                      color="#313EF7"
                      size={20}
                      onClick={() => {
                        handleSubmitLike();
                      }}
                      className="hover:scale-125 transition-all duration-300"
                    />
                  </button>
                )}
              </Tooltip>
            )}

            <span>{`${blogCard?.likes?.length} likes`}</span>
          </div>
          <div className="flex items-center gap-3">
            <HiOutlineShare color="black" size={20} />
            <BiCommentDetail color="black" size={20} />
            <HiDotsVertical color="black" size={20} />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 pb-4">
          {blogCard.categories.map((category: string) => (
            <span
              className="py-1 px-3 text-xs bg-themeBlue1 rounded text-white"
              key={category}
            >
              {category}
            </span>
          ))}
        </div>
        <p className="text-xl font-bold pb-4 font-montserrat">
          {blogCard?.title?.slice(0, 52) + "..."}
        </p>
        <div className="text-gray-400 font-semibold pb-5">
          {<Markup content={blogCard?.description?.slice(0, 162) + "....."} />}
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
                onClick={() => router.push(`/profile/${blogCard?.owner?._id}`)}
              >
                <img
                  src={blogCard?.owner.pic}
                  className="rounded-full shadow-inputTheme w-12 h-12 object-cover"
                  alt="Blog owner"
                />
              </button>
            </Tooltip>
            <div>
              <p className="font-semibold">{blogCard?.owner?.username}</p>
              <p className="text-gray-400">{blogCard?.timeCreated}</p>
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
                router.push(`/blog/${blogCard?._id}`);
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
