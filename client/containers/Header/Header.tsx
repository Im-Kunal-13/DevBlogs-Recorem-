import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-web";
import { lf30_editor_wxntyiss } from "../../Assets/lottie";
import { AnimatePresence, motion } from "framer-motion";

import "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  let animationContainer = useRef(null);
  const anim: React.MutableRefObject<null> = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      //@ts-ignore
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: lf30_editor_wxntyiss,
      });

      //@ts-ignore
      return () => anim.current?.destroy();
    }

    setMounted(true);
  }, []);

  return (
    <motion.div
      className="relative mt-20 lg:px-4"
      id="header"
      whileInView={{ opacity: [0, 1], y: [20, 0] }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 left-0 w-full z-10 lg:px-4 xl:h-40-rem lg:h-30-rem h-25-rem">
        <div
          className="w-full h-full xl:rounded"
          style={{
            backgroundColor: "rgb(0, 0, 0, .4)",
          }}
        />
      </div>
      <div className="relative">
        <img
          src="./bgSample1.jpg"
          alt="background"
          className="object-cover rounded shadow w-full md  xl:h-40-rem lg:h-30-rem h-25-rem"
        />
        <div className="absolute top-1/3 w-full text-center z-10 flex flex-col items-center">
          <span className="text-white font-semibold md:text-5xl text-3xl mb-4">
            Intelligent Weld Inspector
          </span>
          <span className="text-white md:text-xl font-medium mb-4 md:w-160">
            An AI-enabled NDT System
            <span className="text-lightBlue2 cursor-pointer font-semibold">
              Machine Health Monitoring
            </span>{" "}
            Solution
          </span>
          <button className="py-3 px-4 landing-bg rounded text-white font-semibold shadow bg-themeBlue1 hover:scale-95 transition-all hover:shadow-logCard">
            SCHEDULE A DEMO
          </button>
        </div>
      </div>
      <motion.div
        className="mx-auto flex flex-col items-center bg-white py-10 xl:relative md:bottom-32 z-10 rounded shadow xl:w-80%"
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5 }}
      >
        <p className="md:text-4xl text-3xl font-semibold mb-4">COE AMT</p>
        <p className="text-center md:text-xl text-lg leading-8 tracking-wider lg:w-90% px-4">
          The <span className="font-bold"> Automated AI based CoE AMT</span> is
          an R&D unit established through the support of the{" "}
          <span className="font-bold"> Department of Heavy Industry</span> under
          the{" "}
          <span className="font-bold">
            Ministry of Heavy Industries and Public Enterprises
          </span>
          , The Government of India, and a consortium of industry members. This
          entire software is conceptualized, designed and developed by{" "}
          <span className="font-bold">CoE AMT</span>
          as a part of the{" "}
          <span className="font-bold text-themeBlue1 hover:underline cursor-pointer">
            {" "}
            Industry 4.0 research vertical{" "}
          </span>
          of the CoE.
        </p>
      </motion.div>
      <div className="relative xl:bottom-60">
        <img
          src="/bgSample2.jpg"
          alt="dots background"
          className="w-full object-cover xl:rounded shadow h-160"
        />
        <div className="absolute md:top-1/4 top-32 w-full z-10 flex items-center text-white md:px-20 px-10">
          <div className="md:w-1/2 lg:text-2xl md:text-xl sm1:text-center md:text-start  font-medium leading-8 tracking-wider">
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              nemo laborum ducimus reiciendis consectetur saepe animi ad
              repudiandae nisi libero, itaque distinctio consequatur qui ipsa
              voluptate repellat ullam cum numquam?
            </p>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, odit porro itaque laboriosam possimus enim quo dolore ad
              ipsam impedit quibusdam molestiae fugiat? Fuga, alias?
            </p>
          </div>
        </div>
        <div
          className="absolute top-0 -left-10 w-60"
          ref={animationContainer}
        ></div>
      </div>
    </motion.div>
  );
};

export default Header;
