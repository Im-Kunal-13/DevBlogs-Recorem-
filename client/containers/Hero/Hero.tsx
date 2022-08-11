import React, { useEffect, useRef, useState } from "react";
import BlobSvg from "../../components/Hero/BlogSvg";
import Lottie from "lottie-web";
import { lottie1 } from "../../assets/lottie";
import Navbar from "../../components/Navbar/Navbar";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";
import { planeBlue1 } from "../../assets/images/index";

import styles from "./Hero.module.scss"

type Props = {};

const Hero = (props: Props) => {
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
        animationData: lottie1,
      });

      //@ts-ignore
      return () => anim.current?.destroy();
    }

    setMounted(true);
  }, []);

  return (
    <div className="relative landing-review2 pb-10" id="hero">
      <Navbar />
      <div className="lg2:mt-28 sm600:mt-10 grid grid-cols-2 gap-2 lg:px-0 xl6:px-40">
        <motion.div className="lg:col-span-1 col-span-2 sm600:px-20 lg1:px-0 px-1 flex gap-12">
          <motion.div
            className={`relative w-80 animate-float lg:block hidden`}
            style={{ transform: "rotateY(180deg) rotate(-5deg)" }}
            whileInView={{ opacity: [0, 1], top: [400, 40], left: [200, 0] }}
            transition={{ duration: 1.5, ease: "backOut" }}
          >
            <Image src={planeBlue1} alt="" />
          </motion.div>
          <motion.div
            className="text-center lg:text-start"
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 1.5, ease: "backOut" }}
          >
            <h1 className="text-white text-5xl font-bold leading-tight font__kaushan tracking-wider">
              Making <span className="gradient-text">Blogging</span> Fun For{" "}
              <span className="gradient-text">Everyone</span>
            </h1>
            <p className="text-gray-300 mt-2 text-xl font-semibold pr-7 font__kaushan tracking-wider">
              {
                "No one cares about products. People care about ideas. It is a product or an idea? No. It's a brand? A good one is."
              }
            </p>
            <button
              className="text-white landing-review2-reverse px-4 py-3 mt-5 rounded hover:shadow-whity shadow flex items-center gap-2 w-fit hover:scale-95 transition-all lg:mx-0 mx-auto"
              type="button"
            >
              <span className="text-base font-semibold font__kaushan tracking-widest">Start connecting</span>
              <HiOutlineArrowNarrowRight size={15} color="white" />
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:col-span-1 col-span-2 relative bottom-20 sm600:px-20 lg1:p-0 py-20 xl1:px-20"
          ref={animationContainer}
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 1.5, ease: "backOut" }}
        />
      </div>
      <BlobSvg />
    </div>
  );
};

export default Hero;
