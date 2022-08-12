import { Tooltip } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import {
  HiDotsVertical,
  HiOutlineArrowNarrowRight,
  HiOutlineShare,
} from "react-icons/hi";
import { avatar } from "../../assets/images/index";

import styles from "./Blog.module.scss";

type Props = {};

const BlogPost = (props: Props) => {
  return (
    <div className="mt-24 flex items-center flex-col justify-center xl:px-60 lg:px-40 lg:px-20">
      <h1 className="md:text-4xl sm:text-3xl text-xl font-bold sm:py-14 py-7 font-montserrat uppercase lg:px-20 text-center leading-tight">
        {
          "Ethereum just pulled off its final test run ahead of one of the most important events in crypto."
        }
      </h1>
      <div className="flex items-center gap-4 sm:mb-14 mb-7">
        <Image src={avatar} className="rounded-full" width={60} height={60} />
        <div>
          <p className="font-bold ">Kunal Mondal</p>
          <p className="text-gray-400 font-medium">June 03, 2021</p>
        </div>
      </div>
      <div className="2xl:w-55-rem ">
        <img
          src={"/blogPic1.jpg"}
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
          <span className="py-2 px-5 text-xs bg-themeBlue1 rounded text-white">
            Blockchain
          </span>
          <span className="py-2 px-5 text-xs bg-themeBlue1 rounded text-white">
            Cryptocurrency
          </span>
        </div>
        <p className="text-gray-700 text-xl leading-relaxed pb-5 lg:px-0 sm:px-5 px-2.5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          quasi aliquam nisi veniam quibusdam, repudiandae ipsam, vero ex harum
          dolores amet, in optio ad provident doloremque? Autem maiores odio
          distinctio et praesentium? Ducimus, aliquam. Adipisci dolorem in
          consequuntur quia, hic ratione esse expedita quas, dicta laudantium
          perspiciatis sint necessitatibus quis autem ex veniam. Ipsa dolor
          deleniti quibusdam magnam fugiat consectetur. Possimus ut blanditiis
          alias, natus quia optio temporibus nisi tempore corporis nemo minima
          ad quaerat asperiores hic nulla delectus molestiae dicta minus
          inventore. Magnam rem repellat commodi blanditiis facilis amet
          architecto natus obcaecati, ratione iusto veritatis quis sapiente eius
          hic ullam consectetur expedita quasi placeat aspernatur enim
          voluptatibus praesentium. Aut distinctio incidunt consequatur,
          repellendus ipsum delectus quibusdam qui rerum doloremque velit illo
          consequuntur, voluptas nobis. Praesentium optio qui veritatis sapiente
          quos distinctio, repellat magnam obcaecati ab vel quaerat quae
          dignissimos dolorem hic! Dolor autem dignissimos officia amet in optio
          cum sunt minus aliquam expedita, architecto voluptatibus cumque
          ducimus saepe alias harum nobis, quae doloribus rem? Excepturi
          doloribus saepe beatae consequuntur, cupiditate dolores blanditiis
          porro esse explicabo sed atque inventore itaque modi ducimus veritatis
          id, necessitatibus unde corrupti. Architecto dolorum eveniet nobis
          unde quia accusamus quaerat consequatur possimus ipsam doloremque
          deleniti quis perspiciatis eaque optio voluptatem labore quod natus,
          cum culpa ratione dicta repellat velit voluptate quas. Voluptatum,
          repellat minima? Cum magnam eum pariatur? Ducimus odit maxime
          provident, sunt libero aspernatur ut asperiores! Repellendus quibusdam
          et iusto laboriosam, adipisci impedit ad sint, possimus quam sapiente
          debitis in maxime iste veniam provident a. Dolore, consequatur
          incidunt quis adipisci nulla eius est necessitatibus accusantium iusto
          dolorum sit sapiente impedit! Est nisi dolores alias labore fugiat
          eaque amet ducimus porro voluptas esse, et molestiae dolorem maiores
          dignissimos deserunt sint ea modi ut, sunt sequi, rem natus
          architecto? Eius doloribus magnam, aliquam excepturi expedita optio.
        </p>
      </div>
      <div className="h-96" />
    </div>
  );
};

export default BlogPost;
