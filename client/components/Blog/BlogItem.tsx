import Image from "next/image";
import { useState } from "react";
import { blogsData } from "../../data/blogsData";
import { avatar } from "../../assets/images/index";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShare, HiDotsVertical } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import styles from "./BlogItem.module.scss";
import { Tooltip } from "@mantine/core";

type Props = {};

const BlogItem = (props: Props) => {
  const [isClick, setClick] = useState(false);
  return (
    <div className="xl:col-span-2 lg:col-span-3 col-span-6 flex flex-col flex-start bg-white">
      <img
        src={"/blogPic1.jpg"}
        alt="cover"
        className="object-cover rounded overflow-hidden hover:shadow-black1 transition-all md:hover:scale-125 cursor-pointer"
      />
      <div className="px-5 shadow border rounded overflow-hidden">
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
          <span className="py-1 px-3 text-xs bg-themeBlue1 rounded text-white">
            Blockchain
          </span>
          <span className="py-1 px-3 text-xs bg-themeBlue1 rounded text-white">
            Cryptocurrency
          </span>
        </div>
        <p className="text-xl font-bold pb-4 font-montserrat">
          {"Ethereum just pulled off its final test run ahead of one of the most important events in crypto".slice(
            0,
            52
          ) + "..."}
        </p>
        <p className="text-gray-400 font-semibold pb-5">
          {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut sapiente culpa optio! Atque accusantium reprehenderit culpa amet neque quod architecto sunt eligendi magni? Asperiores soluta consectetur zzdolor architecto nam".slice(
            0,
            162
          ) + "....."}
        </p>
        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center gap-3">
            <Image
              src={avatar}
              className="rounded-full"
              width={50}
              height={50}
            />
            <div>
              <p>Kunal Mondal</p>
              <p className="text-gray-400">June 03, 2021</p>
            </div>
          </div>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
