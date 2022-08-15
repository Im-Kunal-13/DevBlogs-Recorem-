import { Tooltip } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiDotsVertical, HiOutlineShare } from "react-icons/hi";
import { getBlog, likePost, unlikePost } from "../../api/index";
import { Blog } from "../../types";
import { Markup } from "interweave";
import { avatar } from "../../assets/images";
import { useAppStateContext } from "../../context/contextProvider";

import styles from "./Blog.module.scss";

type Props = { blogId: string };

const BlogPost = (props: Props) => {
  const [blog, setBlog] = useState<Blog>();

  //@ts-ignore
  const { user } = useAppStateContext();

  const handleSubmitLike = async () => {
    try {
      const data = await likePost(props.blogId);
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitUnlike = async () => {
    try {
      const data = await unlikePost(props.blogId);
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  const init = async () => {
    const data = await getBlog(props.blogId);
    setBlog(data);
  };

  useEffect(() => {
    if (props.blogId) {
      init();
    }
  }, [props.blogId]);

  return (
    <div className="mt-24 flex items-center flex-col justify-center xl:px-60 lg:px-40">
      <h1 className="md:text-4xl sm:text-3xl text-xl font-bold sm:py-14 py-7 font-montserrat uppercase lg:px-20 text-center leading-tight">
        {blog?.title}
      </h1>
      <div className="flex items-center gap-4 sm:mb-14 mb-7">
        <img
          //@ts-ignore
          src={blog?.owner?.pic || avatar}
          alt="profile"
          className="rounded-full w-14 h-14 object-cover shadow-inputTheme"
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
            {blog?.owner?._id === user?._id ? (
              <button className="rounded-full shadow-inputTheme p-2 cursor-none">
                <FaHeart className="text-gray-300" size={20} />
              </button>
            ) : (
              <Tooltip
                label={
                  blog?.likes?.includes(user?._id)
                    ? "I don't like this"
                    : "I like this"
                }
                withArrow
                position="bottom"
              >
                {blog?.likes?.includes(user?._id) ? (
                  <button
                    className="rounded-full shadow-inputTheme border p-3 transition-all duration-300 hover:scale-125"
                    onClick={handleSubmitUnlike}
                  >
                    <FaHeart
                      color="#313EF7"
                      size={25}
                      className="hover:scale-125 transition-all duration-300"
                    />
                  </button>
                ) : (
                  <button
                    className="rounded-full shadow-inputTheme border p-3 transition-all duration-300 hover:scale-125"
                    onClick={handleSubmitLike}
                  >
                    <FaRegHeart
                      color="#313EF7"
                      size={25}
                      className="hover:scale-125 transition-all duration-300"
                    />
                  </button>
                )}
              </Tooltip>
            )}
            <span className="text-lg font-medium">{`${blog?.likes?.length} likes`}</span>
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
        <Markup content={blog?.description} />
      </div>
      <div className="h-96" />
    </div>
  );
};

export default BlogPost;
