import { Divider, Modal } from "@mantine/core";
import { useAppStateContext } from "../context/contextProvider";
import { RiAlertFill } from "react-icons/ri";

type Props = {};

const LogoutModal = (props: Props) => {
  //@ts-ignore
  const { logoutModalActive, setLogoutModalActive } = useAppStateContext();

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
          <button className="py-2 px-5 rounded transition-all hover:scale-95 shadow-inputTheme bg-red-600 text-white">
            Logout
          </button>
          <button className="py-2 px-5 rounded transition-all hover:scale-95 shadow-inputTheme">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
