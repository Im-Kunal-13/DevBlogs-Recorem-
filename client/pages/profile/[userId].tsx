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
import { useAppStateContext } from "../../context/contextProvider";
import { showNotification } from "@mantine/notifications";

type Props = {};

const Profile = (props: Props) => {
  const router = useRouter();
  const { userId }: any = router.query;

  //@ts-ignore
  const { setUser } = useAppStateContext();

  const [userState, setUserState] = useState<User | undefined>();
  const [userBlogs, setUserBlogs] = useState<Blog[]>();

  const init = async () => {
    const data = await getUser(userId);
    const data1 = await getUserBlogs(userId);

    setUserState(data);
    setUserBlogs(data1);
  };

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      !(localUser.username && localUser.pic && localUser.email && localUser._id)
    ) {
      router.push("/");
      showNotification({
        id: "logout-success3",
        radius: "md",
        message: (
          <h1 className="font-semibold text-xl">{"YOU'VE BEEN LOGGED OUT"}</h1>
        ),
        autoClose: 5000,
        style: { height: "70px" },
        styles: (theme) => ({
          root: {
            boxShadow: "0 5px 20px 3px rgb(49 62 247 / 25%)",
            "&::before": { backgroundColor: "#313EF7" },
          },

          icon: {
            height: "50px",
            width: "50px",
          },
          closeButton: {
            "&:hover": { backgroundColor: "transparent" },
            transform: "scale(1.5)",
          },
        }),
      });
    } else {
      setUser(localUser);
    }

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
