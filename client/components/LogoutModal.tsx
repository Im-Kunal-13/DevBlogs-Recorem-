import { Modal } from "@mantine/core";
import { useAppStateContext } from "../context/contextProvider";
import { RiAlertFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { showNotification } from "@mantine/notifications";

type Props = {};

const LogoutModal = (props: Props) => {
  const router = useRouter();
  //@ts-ignore
  const { logoutModalActive, setLogoutModalActive, setUser, user } =
    useAppStateContext();

  const getCookie = (name: string) => {
    return document.cookie.split(";").some((c) => {
      return c.trim().startsWith(name + "=");
    });
  };
  const deleteCookie = (name: string, path: string, domain: string) => {
    if (getCookie(name)) {
      document.cookie =
        name +
        "=" +
        (path ? ";path=" + path : "") +
        (domain ? ";domain=" + domain : "") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(JSON.parse("{}"));
    // document.cookie = "accessToken=bar";
    deleteCookie("accessToken", "/", "localhost");

    router.push("/");
    showNotification({
      id: "logout-success1",
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

    setLogoutModalActive(false);
  };

  return (
    <Modal
      opened={logoutModalActive}
      onClose={() => setLogoutModalActive(false)}
      classNames={{ close: "z-10", modal: "h-17.5-rem w-30-rem" }}
      overlayBlur={3}
      overlayOpacity={0.55}
      centered
    >
      <div className="w-full flex flex-col items-center justify-center relative bottom-24">
        <span className="p-4 bg-red-600 rounded-full shadow-logCard">
          <RiAlertFill size={42.5} color="white" />
        </span>
        <h1 className="font-bold text-2xl font__kaushan tracking-wider py-2.5">
          Confirm Logout
        </h1>
        <div
          className="w-full my-2.5 bg-gray-300"
          style={{ height: "1.5px" }}
        />
        <h3 className="font-medium text-2xl text-gray-400 font__kaushan tracking-wider py-2.5">
          Are you sure you want to logout?
        </h3>
        <div
          className="w-full my-2.5 bg-gray-300"
          style={{ height: "1.5px" }}
        />
        <div className="w-full flex items-center justify-end gap-5 pt-5">
          <button
            className="py-2 px-5 rounded transition-all hover:scale-95 shadow-inputTheme bg-red-600 text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="py-2 px-5 rounded transition-all hover:scale-95 shadow-inputTheme"
            onClick={() => {
              setLogoutModalActive(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
