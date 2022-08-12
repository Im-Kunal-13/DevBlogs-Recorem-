import React from "react";
import HomeNav from "../components/Home/HomeNav";
import LogoutModal from "../components/LogoutModal";
import BlogList from "../containers/BlogList/BlogList";
import Search from "../containers/Search/Search";
import Socials from "../containers/Socials/Socials";
import ThemeLayout from "../layout/themeLayout";
import { motion } from "framer-motion";

type Props = {};

const Home = (props: Props) => {
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
      <BlogList />
    </ThemeLayout>
  );
};

export default Home;
