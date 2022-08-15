import { FormEvent, useCallback, useState } from "react";
import { Modal, Tooltip, TextInput } from "@mantine/core";
import { useAppStateContext } from "../context/contextProvider";
import { BsFillPersonFill, BsShieldLockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { BiUserPin } from "react-icons/bi";
import { registerUser } from "../api";
import { useMutation } from "react-query";
import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.minimal.css";
import Ripples from "react-ripples";
import { hideNotification, showNotification } from "@mantine/notifications";

type Props = {};

const RegisterModal = (props: Props) => {
  //@ts-ignore
  const { registerModalActive, setRegisterModalActive, setLoginModalActive } =
    useAppStateContext();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passVisibility, setPassVisibility] = useState(false);
  const [confirmPassVisibility, setConfirmPassVisibility] = useState(false);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Image File Loading
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File>();

  const handlePicInput = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    setImageFile(file);

    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");

    reader.onerror = () => console.log("file reading has failed");

    reader.onload = (e: ProgressEvent<FileReader>) => {
      //@ts-ignore
      setImageUrl(e.target.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: any = new FormData();

    if (!imageFile) {
      showNotification({
        id: "select-image1",
        radius: "md",
        message: (
          <h1 className="font-semibold text-xl">SELECT AN IMAGE TO CONTINUE</h1>
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

      return;
    }
    data.append("file", imageFile);
    data.append("upload_preset", "blogify-prototype");
    data.append("cloud_name", "blogify13z");

    showNotification({
      id: "pic-uploading1",
      loading: true,
      radius: "md",
      message: <h1 className="font-semibold text-xl">UPLOADING</h1>,
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

    await fetch("https://api.cloudinary.com/v1_1/blogify13z/image/upload", {
      method: "post",
      mode: "cors",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        mutation.mutate({ ...formData, pic: data.url });

        showNotification({
          id: "register-success1",
          radius: "md",
          message: (
            <h1 className="font-semibold text-xl">
              USER REGISTERED SUCCESSFULLY
            </h1>
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

        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        setImageUrl("");
      })
      .catch((err) => {
        console.log(err);
      });

    hideNotification("pic-uploading1");
  };

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof registerUser>["0"]
  >(registerUser, {
    onSuccess: () => {
      setRegisterModalActive(false);

      showNotification({
        id: "register-success1",
        radius: "md",
        message: (
          <h1 className="font-semibold text-xl">
            USER REGISTERED SUCCESSFULLY
          </h1>
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
        id: "register-post-error1",
        radius: "md",
        message: (
          <h1 className="font-semibold text-xl">OOPS! AN ERROR OCCURED</h1>
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
      opened={registerModalActive}
      onClose={() => setRegisterModalActive(false)}
      classNames={{ modal: "h-40-rem w-30-rem", close: "z-10" }}
      overlayBlur={3}
      overlayOpacity={0.55}
    >
      <div className="w-full flex flex-col items-center justify-center relative bottom-24">
        <span className="p-4 landing-review2-reverse rounded-full shadow-logCard">
          <BsFillPersonFill size={42.5} color="white" />
        </span>
        <h1 className="font-bold text-2xl font__kaushan tracking-wider">
          Register User
        </h1>
        <form onSubmit={handleSubmit} className="w-full px-8">
          <div className="flex items-center gap-5 my-5">
            <div className="rounded-full overflow-hidden w-16 h-16 flex items-center justify-center shadow-xl">
              {imageUrl.length ? (
                <Tooltip
                  label="Upload pic"
                  withArrow
                  // @ts-ignore
                  placement="center"
                  position="top"
                >
                  <label htmlFor="pic" className="cursor-pointer">
                    <img
                      src={imageUrl}
                      alt="profile picture"
                      className="h-16 w-16 object-cover"
                    />
                  </label>
                </Tooltip>
              ) : (
                <label
                  htmlFor="pic"
                  className="p-4 bg-gray-300 rounded-full cursor-pointer"
                >
                  <BsFillPersonFill size={40} color="white" />
                </label>
              )}
              <input
                type="file"
                className="hidden"
                id="pic"
                onChange={(e) => {
                  // @ts-ignore
                  handlePicInput(e.target.files);
                }}
              />
            </div>
            <label
              htmlFor="pic"
              className="text-sm text-white py-2 px-5 landing-review2-reverse rounded-full transition-all hover:scale-95 cursor-pointer shadow-xl font__kaushan tracking-widest"
            >
              Change
            </label>
            <button
              className="text-sm py-2 px-5 border-gray-200 hover:border-gray-300 border rounded-full transition-all hover:scale-95 shadow-xl font__kaushan tracking-widest"
              onClick={() => setImageUrl("")}
            >
              Remove
            </button>
          </div>
          <TextInput
            placeholder="Username"
            name="username"
            type="username"
            value={formData.username}
            icon={<BiUserPin size={25} className="text-themeBlue1" />}
            className="my-8 rounded-full shadow-inputTheme overflow-hidden py-1.5 px-2"
            classNames={{ input: "border-none" }}
            onChange={onFormChange}
            autoComplete="username"
          />
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
          <TextInput
            placeholder="Confirm Password"
            name="confirmPassword"
            type={confirmPassVisibility ? "text" : "password"}
            value={formData.confirmPassword}
            icon={<BsShieldLockFill size={20} className="text-themeBlue1" />}
            className="mt-8 mb-3 rounded-full shadow-inputTheme overflow-hidden py-1.5 px-2"
            rightSection={
              confirmPassVisibility ? (
                <RiEyeFill
                  size={20}
                  className="z-10 cursor-pointer text-themeBlue1"
                  onClick={() => {
                    setConfirmPassVisibility(!confirmPassVisibility);
                  }}
                />
              ) : (
                <RiEyeCloseLine
                  size={20}
                  className="z-10 cursor-pointer text-themeBlue1"
                  onClick={() => {
                    setConfirmPassVisibility(!confirmPassVisibility);
                  }}
                />
              )
            }
            classNames={{ input: "border-none" }}
            onChange={onFormChange}
            autoComplete="current-password"
          />
          <div className="px-3 mb-8 flex items-center gap-2 font__kaushan tracking-wider">
            <span>Already registered?</span>

            <button
              className="text-sm text-themeBlue1 hover:underline"
              onClick={() => {
                setRegisterModalActive(false);
                setLoginModalActive(true);
              }}
            >
              Sign In here.
            </button>
          </div>
          <div className="flex items-center justify-center">
            <Ripples color="#fff" during={600}>
              <button
                className="landing-review2-reverse p-3 font-semibold text-white shadow-inputTheme rounded-full text-sm px-20 transition-all hover:scale-95 hover:shadow-logCard font__kaushan tracking-widest"
                type="submit"
              >
                SIGN UP
              </button>
            </Ripples>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
