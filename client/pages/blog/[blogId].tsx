import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import HomeNav from "../../components/Home/HomeNav";
import LogoutModal from "../../components/LogoutModal";
import BlogPost from "../../containers/Blog/BlogPost";
import { useAppStateContext } from "../../context/contextProvider";
import ThemeLayout from "../../layout/themeLayout";

const Blog = () => {
  //@ts-ignore
  const { setUser } = useAppStateContext();
  const router = useRouter();
  const { blogId }: any = router.query;

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
  }, []);

  return (
    <ThemeLayout>
      <HomeNav />
      <LogoutModal />
      <BlogPost blogId={blogId} />
    </ThemeLayout>
  );
};

export default Blog;
