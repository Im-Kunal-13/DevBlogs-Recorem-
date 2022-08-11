import React, { useEffect, useRef, useState } from "react";
import BlogItem from "../../components/Blog/BlogItem";
import Lottie from "lottie-web";
import { search } from "../../assets/lottie"

import styles from "./BlogList.module.scss";
import Image from "next/image";

type Props = {};

const BlogList = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  // Getting a reference to the animation container.
  let animationContainer = useRef(null);
  const anim = useRef(null);

  // loading the animation once the component is mounted using useEffect.
  useEffect(() => {
    if (animationContainer.current) {
      //@ts-ignore
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: search,
      });

      //@ts-ignore
      return () => anim.current?.destroy();
    }

    setMounted(true);
  }, []);
  return (
    <div className="md:px-28 px-5 grid grid-cols-6 gap-10 mt-5 relative" id="blogs">
      {true ? (
        <>
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </>
      ) : (
        <div className="col-span-full flex items-center flex-col justify-center relative bottom-5">
          <div
            className="rounded overflow-hidden"
            ref={animationContainer}
            // whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            // transition={{ duration: 1.5, ease: "backOut" }}
          />
          <h1 className="text-themeBlue1 font-bold lg:text-5xl sm:text-3xl text-2xl py-5 font-montserrat">
            Sorry, no results found
          </h1>
          <p className="font-montserrat sm:tracking-wide text-gray-400 font-semibold lg:text-xl md:text-md text-xs py-2">
            Please make sure your keywords are spelled correctly.
          </p>
          <div className="h-96"></div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
