import { useState } from "react";
import { Modal, Tooltip, TextInput, Checkbox } from "@mantine/core";
import { useAppStateContext } from "../context/contextProvider";
import { BsFillPersonFill, BsShieldLockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";
import { BiUserPin } from "react-icons/bi";
import Link from "next/link";
type Props = {};

const RegisterModal = (props: Props) => {
  //@ts-ignore
  const { registerModalActive, setRegisterModalActive } = useAppStateContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [passVisibility, setPassVisibility] = useState(false);

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   const [validationState, setValidationState] = useState<EmployeeFormData>({
  //     firstname: false,
  //     lastname: false,
  //     email: false,
  //     phone: false,
  //     password: false,
  //     confirmPassword: false,
  //     mailAddress: false,
  //   });
  const [imageUrl, setImageUrl] = useState("");

  // Profile Picture
  const onDrop = (files: File[]) => {
    let file = files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
      //@ts-ignore
      setImageUrl(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const onReject = (files: any) => {
    console.log("rejected files", files);
  };

  //   const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     validate(event);
  //     setFormData({ ...formData, [event.target.name]: event.target.value });
  //   };

  //   const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     switch (event.target.name) {
  //       case "firstname":
  //         if (regexForm.firstname.test(event.target.value)) {
  //           setValidationState({ ...validationState, firstname: true });
  //         } else {
  //           setValidationState({
  //             ...validationState,
  //             firstname: "Please enter a valid name",
  //           });
  //         }
  //         break;

  //       case "lastname":
  //         if (regexForm.lastname.test(event.target.value)) {
  //           setValidationState({ ...validationState, lastname: true });
  //         } else {
  //           setValidationState({
  //             ...validationState,
  //             lastname: "Please enter a valid name",
  //           });
  //         }
  //         break;

  //       case "email":
  //         if (regexForm.email.test(event.target.value)) {
  //           setValidationState({ ...validationState, email: true });
  //         } else {
  //           setValidationState({
  //             ...validationState,
  //             email: "Please enter a valid email",
  //           });
  //         }
  //         break;

  //       case "password":
  //         if (regexForm.password.test(event.target.value)) {
  //           setValidationState({ ...validationState, password: true });
  //         } else {
  //           setValidationState({
  //             ...validationState,
  //             password: "Password is too weak!",
  //           });
  //         }
  //         break;

  //       case "confirmPassword":
  //         if (formData.password === event.target.value) {
  //           setValidationState({ ...validationState, confirmPassword: true });
  //         } else {
  //           setValidationState({
  //             ...validationState,
  //             confirmPassword: "Password's dont match!",
  //           });
  //         }
  //         break;

  //       case "mailAddress":
  //         if (regexForm.mailAddress.test(event.target.value)) {
  //           setValidationState({ ...validationState, mailAddress: true });
  //         } else {
  //           setValidationState({
  //             ...validationState,
  //             mailAddress: "Please enter a valid mailAddress",
  //           });
  //         }
  //         break;

  //       default:
  //         break;
  //     }
  //   };

  //   const mutation = useMutation<
  //     string,
  //     AxiosError,
  //     Parameters<typeof registerUser>["0"]
  //   >(registerUser, {
  //     onMutate: () => {
  //       showNotification({
  //         id: "register",
  //         title: "Creating accounts",
  //         message: "Please wait...",
  //         loading: true,
  //       });
  //     },
  //     onSuccess: () => {
  //       updateNotification({
  //         id: "register",
  //         title: "Success",
  //         message: "Successfully created account",
  //       });

  //       // router.push("/auth/login");
  //     },
  //     onError: () => {
  //       updateNotification({
  //         id: "register",
  //         title: "Error",
  //         message: "Could not create account",
  //       });
  //     },
  //   });

  return (
    <Modal
      opened={registerModalActive}
      onClose={() => setRegisterModalActive(false)}
      classNames={{ modal: "h-35-rem w-30-rem", close: "z-10" }}
      overlayBlur={3}
      overlayOpacity={0.55}
    >
      <div className="w-full flex flex-col items-center justify-center relative bottom-24">
        <span className="p-4 landing-review2-reverse rounded-full shadow-logCard">
          <BsFillPersonFill size={42.5} color="white" />
        </span>
        <h1 className="font-bold text-2xl font__kaushan tracking-wider">Register User</h1>
        <form onSubmit={() => {}} className="w-full px-8">
          <div className="flex items-center gap-5 my-5">
            <div className="rounded-full overflow-hidden w-16 h-16 flex items-center justify-center shadow-xl">
              {true ? (
                <Tooltip
                  label="Upload pic"
                  withArrow
                  // @ts-ignore
                  placement="center"
                  position="top"
                >
                  <label htmlFor="pic" className="cursor-pointer">
                    <img
                      src={
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      }
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
              <input type="file" className="hidden" id="pic" />
            </div>
            <label
              htmlFor="pic"
              className="text-sm text-white py-2 px-5 landing-review2-reverse rounded-full transition-all hover:scale-95 cursor-pointer shadow-xl font__kaushan tracking-widest"
            >
              Change
            </label>
            <button className="text-sm py-2 px-5 border-gray-200 hover:border-gray-300 border rounded-full transition-all hover:scale-95 shadow-xl font__kaushan tracking-widest">
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
          <div className="px-3 mb-8 flex items-center gap-2 font__kaushan tracking-wider">
              <span>Already registered?</span>
            <Link href="#">
              <a className="text-sm text-themeBlue1 hover:underline">
                Sign In here.
              </a>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <button className="landing-review2-reverse p-3 font-semibold text-white shadow-inputTheme rounded-full text-sm px-20 transition-all hover:scale-95 hover:shadow-logCard font__kaushan tracking-widest">
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
