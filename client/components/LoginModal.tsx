import { FormEvent, useEffect, useState } from "react";
import { Modal, TextInput, Checkbox } from "@mantine/core";
import { useAppStateContext } from "../context/contextProvider";
import { BsFillPersonFill, BsShieldLockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { login } from "../api/index";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.minimal.css";
import Ripples from "react-ripples";
import { showNotification } from "@mantine/notifications";

type Props = {};

const LoginModal = (props: Props) => {
  const router = useRouter();
  //@ts-ignore
  const {
    loginModalActive,
    setLoginModalActive,
    setRegisterModalActive,
    setUser,
  } = useAppStateContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passVisibility, setPassVisibility] = useState(false);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof login>["0"]
    //@ts-ignore
  >(login, {
    onSuccess: (data) => {
      router.push("/home");
      localStorage.setItem("user", JSON.stringify(data));

      setUser(data);

      setLoginModalActive(false);

      showNotification({
        id: "login-success5",
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
    },
    onError: () => {
      showNotification({
        id: "login-error1",
        radius: "md",
        message: (
          <h1 className="font-semibold text-xl">INCORRECT CREDENTIALS</h1>
        ),
        autoClose: 5000,
        style: { height: "70px" },
        styles: (theme) => ({
          root: {
            boxShadow: "0 5px 20px 3px rgb(49 62 247 / 25%)",
            "&::before": { backgroundColor: "red" },
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
    },
    onMutate: () => {},
  });

  return (
    <Modal
      opened={loginModalActive}
      onClose={() => setLoginModalActive(false)}
      classNames={{ modal: "h-27-rem", close: "z-10" }}
      overlayBlur={3}
      overlayOpacity={0.55}
    >
      <div className="w-full flex flex-col items-center justify-center relative bottom-24">
        <span className="p-4 landing-review2-reverse rounded-full shadow-logCard">
          <BsFillPersonFill size={42.5} color="white" />
        </span>
        <h1 className="font-bold text-2xl font__kaushan tracking-wider">
          Login User
        </h1>
        <form onSubmit={handleSubmit} className="w-full px-8">
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
            <Ripples color="#fff" during={600}>
              <button
                className="landing-review2-reverse p-3 font-semibold text-white shadow-inputTheme rounded-full text-sm px-20 transition-all hover:scale-95 hover:shadow-logCard font__kaushan tracking-widest"
                type="submit"
                disabled={false}
              >
                LOGIN
              </button>
            </Ripples>
          </div>
        </form>
        <div className="px-3 mt-5 flex items-center gap-2 font__kaushan tracking-wider">
          <span>New to Blogify?</span>

          <button
            className="text-sm text-themeBlue1 hover:underline"
            onClick={() => {
              setLoginModalActive(false);
              setRegisterModalActive(true);
            }}
          >
            Sign Up here.
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
