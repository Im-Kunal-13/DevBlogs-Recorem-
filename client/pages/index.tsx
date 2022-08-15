import type { NextPage } from "next";
import DrawerRight from "../components/Navbar/DrawerRight";
import LoginModal from "../components/LoginModal";
import Hero from "../containers/Hero/Hero";
import RegisterModal from "../components/RegisterModal";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppStateContext } from "../context/contextProvider";
import { showNotification } from "@mantine/notifications";

const Home: NextPage = () => {
  const router = useRouter();
  //@ts-ignore
  const { setUser } = useAppStateContext();

  useEffect(() => {
    const locaUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (locaUser.username && locaUser.pic && locaUser.email && locaUser._id) {
      router.push("/home");

      setUser(locaUser);

      showNotification({
        id: "login-success3",
        radius: "md",
        message: (
          <h1 className="font-semibold text-xl">{"YOU'RE LOGGED IN"}</h1>
        ),
        autoClose: 5000,
        style: { height: "70px" },
        styles: (theme) => ({
          root: {
            boxShadow: "0 5px 20px 3px rgb(49 62 247 / 25%)",
            "&::before": { backgroundColor: "rgb(34 197 94)" },
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
    }
  }, []);

  return (
    <div>
      <DrawerRight />
      <LoginModal />
      <RegisterModal />
      <Hero />
      <div className="h-96"></div>
    </div>
  );
};

export default Home;
