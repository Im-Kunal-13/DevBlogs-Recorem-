import React, { useEffect, useState } from "react";
import HomeNav from "../components/Home/HomeNav";
import LogoutModal from "../components/LogoutModal";
import BlogList from "../containers/BlogList/BlogList";
import Search from "../containers/Search/Search";
import Socials from "../containers/Socials/Socials";
import ThemeLayout from "../layout/themeLayout";
import { getAllBlogs } from "../api/index";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { showNotification } from "@mantine/notifications";
import { useAppStateContext } from "../context/contextProvider";

type Props = {};

const Home = (props: Props) => {
  //@ts-ignore
  const [blogs, setBlogs] = useState<Blog[]>();

  const router = useRouter();
  //@ts-ignore
  const { setUser } = useAppStateContext();

  const init = async () => {
    try {
      const allBlogs = await getAllBlogs();

      setBlogs(allBlogs);
    } catch (error) {
      console.log(error);
    }
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
      <LogoutModal />
      <HomeNav />
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Search />
        <Socials />
      </motion.div>
      <BlogList blogs={blogs || []} />
    </ThemeLayout>
  );
};

export default Home;
