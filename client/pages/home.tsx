import React, { useEffect, useState } from "react";
import HomeNav from "../components/Home/HomeNav";
import LogoutModal from "../components/LogoutModal";
import BlogList from "../containers/BlogList/BlogList";
import Search from "../containers/Search/Search";
import Socials from "../containers/Socials/Socials";
import ThemeLayout from "../layout/themeLayout";
import { getAllBlogs } from "../api/index";

import { motion } from "framer-motion";

type Props = {};

const Home = (props: Props) => {
  //@ts-ignore
  const [blogs, setBlogs] = useState<Blog[]>();

  const init = async () => {
    const data = await getAllBlogs();
    setBlogs(data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ThemeLayout>
      <LogoutModal />
      <HomeNav />
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1.25, ease: "backOut" }}
      >
        <Search />
        <Socials />
      </motion.div>
      <BlogList blogs={blogs || []} />
    </ThemeLayout>
  );
};

export default Home;
