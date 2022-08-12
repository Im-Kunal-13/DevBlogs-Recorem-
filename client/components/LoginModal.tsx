import { useState } from "react";
import { Modal, TextInput, Checkbox } from "@mantine/core";
import { useAppStateContext } from "../context/contextProvider";
import { BsFillPersonFill, BsShieldLockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import Link from "next/link";

type Props = {};

const LoginModal = (props: Props) => {
  //@ts-ignore
  const { loginModalActive, setLoginModalActive } = useAppStateContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passVisibility, setPassVisibility] = useState(false);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal
      opened={loginModalActive}
      onClose={() => setLoginModalActive(false)}
      classNames={{ modal: "h-25-rem", close: "z-10" }}
      overlayBlur={3}
      overlayOpacity={0.55}
    >
      <div className="w-full flex flex-col items-center justify-center relative bottom-24">
        <span className="p-4 landing-review2-reverse rounded-full shadow-logCard">
          <BsFillPersonFill size={42.5} color="white" />
        </span>
        <h1 className="font-bold text-2xl font__kaushan tracking-wider">Login User</h1>
        <form onSubmit={() => {}} className="w-full px-8">
          <TextInput
            placeholder="E-Mail"
            name="email"
            type="email"
            value={formData.email}
            icon={<GrMail size={20} className="text-themeBlue1" />}
            className="my-8 rounded-full shadow-inputTheme overflow-hidden py-1.5 px-2"
            classNames={{ input: "border-none" }}
            onChange={onFormChange}
            autoComplete="email"
          />
          <TextInput
            placeholder="Password"
            name="password"
            type={passVisibility ? "text" : "password"}
            value={formData.password}
            icon={<BsShieldLockFill size={20} className="text-themeBlue1" />}
            className="mt-8 mb-3 rounded-full shadow-inputTheme overflow-hidden py-1.5 px-2"
            rightSection={
              passVisibility ? (
                <RiEyeFill
                  size={20}
                  className="z-10 cursor-pointer text-themeBlue1"
                  onClick={() => {
                    setPassVisibility(!passVisibility);
                  }}
                />
              ) : (
                <RiEyeCloseLine
                  size={20}
                  className="z-10 cursor-pointer text-themeBlue1"
                  onClick={() => {
                    setPassVisibility(!passVisibility);
                  }}
                />
              )
            }
            classNames={{ input: "border-none" }}
            onChange={onFormChange}
            autoComplete="current-password"
          />
          <div className="px-3 mb-7 flex items-center justify-between">
            <Checkbox
              label="Remember me"
              classNames={{
                input: "checked:bg-themeBlue1 cursor-pointer",
                label: "cursor-pointer font__kaushan tracking-wider",
              }}
            />
            <Link href="#">
              <a className="text-sm text-themeBlue1 hover:underline font__kaushan tracking-wider">
                Forgot password?
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button className="landing-review2-reverse p-3 font-semibold text-white shadow-inputTheme rounded-full text-sm px-20 transition-all hover:scale-95 hover:shadow-logCard font__kaushan tracking-widest">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModal;
