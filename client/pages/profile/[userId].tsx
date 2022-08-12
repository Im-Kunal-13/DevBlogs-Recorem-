import React from "react";
import HomeNav from "../../components/Home/HomeNav";
import BlogList from "../../containers/BlogList/BlogList";
import ProfileHeader from "../../containers/ProfileHeader/ProfileHeader";
import ProfileSearch from "../../containers/ProfileSearch/ProfileSearch";
import Search from "../../containers/Search/Search";
import Socials from "../../containers/Socials/Socials";
import ThemeLayout from "../../layout/themeLayout";
import { motion } from "framer-motion";
import LogoutModal from "../../components/LogoutModal";

type Props = {};

const Profile = (props: Props) => {
  return (
    <ThemeLayout>
      <HomeNav />
      <LogoutModal />
      <ProfileHeader />
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ProfileSearch />
        <Socials />
      </motion.div>
      <BlogList />
    </ThemeLayout>
  );
};

export default Profile;
