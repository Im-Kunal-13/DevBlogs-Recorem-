import React from "react";
import BlogItem from "../../components/Blog/BlogItem";
import { Blog } from "../../types";
import { useAppStateContext } from "../../context/contextProvider";
import { motion } from "framer-motion";
import { noResults } from "../../assets/images";

import Image from "next/image";

type Props = { blogs: Blog[] };

const BlogList = ({ blogs }: Props) => {
  //@ts-ignore
  const { homeSearchQuery } = useAppStateContext();

  return (
    <div
      className="md:px-28 px-5 grid grid-cols-6 gap-10 mt-5 relative"
      id="blogs"
    >
      {blogs.filter((blog: Blog) => {
        if (homeSearchQuery === "") {
          return true;
        } else {
          return blog?.categories?.includes(homeSearchQuery);
        }
      }).length ? (
        <>
          {blogs
            .filter((blog: Blog) => {
              if (homeSearchQuery === "") {
                return true;
              } else {
                return blog?.categories?.includes(homeSearchQuery);
              }
            })
            .map((blog: Blog) => (
              <BlogItem blog={blog} key={blog._id} />
            ))}
        </>
      ) : (
        <motion.div
          className="col-span-full flex items-center flex-col justify-center relative bottom-5"
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image src={noResults} layout="intrinsic" alt="no results found" />
          <h1 className="text-themeBlue1 font-bold lg:text-5xl sm:text-3xl text-2xl py-5 font-montserrat">
            Sorry, no results found
          </h1>
          <p className="font-montserrat sm:tracking-wide text-gray-400 font-semibold lg:text-xl md:text-md text-xs py-2">
            Please make sure your keywords are spelled correctly.
          </p>
          <div className="h-96"></div>
        </motion.div>
      )}
    </div>
  );
};

export default BlogList;
