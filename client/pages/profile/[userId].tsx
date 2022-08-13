import React, { useEffect, useState } from "react";
import HomeNav from "../../components/Home/HomeNav";
import BlogList from "../../containers/BlogList/BlogList";
import ProfileHeader from "../../containers/ProfileHeader/ProfileHeader";
import ProfileSearch from "../../containers/ProfileSearch/ProfileSearch";
import Socials from "../../containers/Socials/Socials";
import ThemeLayout from "../../layout/themeLayout";
import { motion } from "framer-motion";
import LogoutModal from "../../components/LogoutModal";
import { useRouter } from "next/router";
import { Blog, User } from "../../types";
import { getUserBlogs, getUser } from "../../api";

type Props = {};

const Profile = (props: Props) => {
  const router = useRouter();
  const { userId }: any = router.query;

  const [userState, setUserState] = useState<User | undefined>();
  const [userBlogs, setUserBlogs] = useState<Blog[]>();

  const init = async () => {
    const data = await getUser(userId);
    const data1 = await getUserBlogs(userId);

    setUserState(data);
    setUserBlogs(data1);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <ThemeLayout>
      <HomeNav />
      <LogoutModal />
      <ProfileHeader user={userState} />
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ProfileSearch />
        <Socials />
      </motion.div>
      <BlogList blogs={userBlogs || []} />
    </ThemeLayout>
  );
};

export default Profile;
