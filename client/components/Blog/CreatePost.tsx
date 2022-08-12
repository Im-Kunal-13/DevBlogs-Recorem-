import { useCallback, useEffect, useRef, useState } from "react";
import { Modal, MultiSelect, TextInput } from "@mantine/core";
import { useAppStateContext } from "../../context/contextProvider";
import { useDropzone } from "react-dropzone";
import NextImage from "next/image";
import { MdError, MdCategory } from "react-icons/md";
import {
  BsCheckCircleFill,
  BsFillChatRightTextFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { regexForm } from "../../utility/utility";
import {
  HtmlEditor,
  Inject,
  Image,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import Lottie from "lottie-web";
//@ts-ignore
import { upload } from "../../assets/lottie";
import { motion } from "framer-motion";

import styles from "./CreatePost.module.scss";

type Props = {};

const qualificationsData = [
  { value: "react", label: "React" },
  { value: "ng", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "vue", label: "Vue" },
  { value: "riot", label: "Riot" },
  { value: "next", label: "Next.js" },
  { value: "blitz", label: "Blitz.js" },
  { value: "typescript", label: "Typescript" },
  { value: "mongodb", label: "Mongo DB" },
  { value: "node", label: "Node.js" },
];

const CreatePost = (props: Props) => {
  //@ts-ignore
  const { postModalActive, setPostModalActive } = useAppStateContext();
  const [render, setRender] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: 0,
    password: "",
    confirmPassword: "",
    active: true,
    department: "",
    mailAddress: "",
    qualifications: [],
    bio: "",
  });
  const [validationState, setValidationState] = useState<any>({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
    mailAddress: false,
  });
  const [passVisibility, setPassVisibility] = useState(false);

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    validate(event);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "firstname":
        if (regexForm.firstname.test(event.target.value)) {
          setValidationState({ ...validationState, firstname: true });
        } else {
          setValidationState({
            ...validationState,
            firstname: "Please enter a valid name",
          });
        }
        break;

      case "lastname":
        if (regexForm.lastname.test(event.target.value)) {
          setValidationState({ ...validationState, lastname: true });
        } else {
          setValidationState({
            ...validationState,
            lastname: "Please enter a valid name",
          });
        }
        break;

      case "email":
        if (regexForm.email.test(event.target.value)) {
          setValidationState({ ...validationState, email: true });
        } else {
          setValidationState({
            ...validationState,
            email: "Please enter a valid email",
          });
        }
        break;

      case "password":
        if (regexForm.password.test(event.target.value)) {
          setValidationState({ ...validationState, password: true });
        } else {
          setValidationState({
            ...validationState,
            password: "Password is too weak!",
          });
        }
        break;

      case "confirmPassword":
        if (formData.password === event.target.value) {
          setValidationState({ ...validationState, confirmPassword: true });
        } else {
          setValidationState({
            ...validationState,
            confirmPassword: "Password's dont match!",
          });
        }
        break;

      case "mailAddress":
        if (regexForm.mailAddress.test(event.target.value)) {
          setValidationState({ ...validationState, mailAddress: true });
        } else {
          setValidationState({
            ...validationState,
            mailAddress: "Please enter a valid mailAddress",
          });
        }
        break;

      default:
        break;
    }
  };

  const [imageUrl, setImageUrl] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onabort = () => console.log("file reading was aborted");

    reader.onerror = () => console.log("file reading has failed");

    reader.onload = (e: ProgressEvent<FileReader>) => {
      //@ts-ignore
      setImageUrl(e.target.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const [mounted, setMounted] = useState(false);

  // Getting a reference to the animation container.
  let animationContainer = useRef(null);
  const anim = useRef(null);

  // loading the animation once the component is mounted using useEffect.
  useEffect(() => {
    if (animationContainer.current) {
      //@ts-ignore
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: upload,
      });

      //@ts-ignore
      return () => anim.current?.destroy();
    }

    setMounted(true);
  }, []);

  return (
    <div className="w-full flex flex-col xl:px-52 my-24 sm:px-20 px-5">
      <form onSubmit={() => {}} className="w-full">
        {/* @ts-ignore */}
        <motion.div
          {...getRootProps()}
          className="mx-auto border-4 h-30-rem shadow border-dashed rounded-lg my-10 lg:w-55-rem w-full cursor-pointer hover:bg-themeBlue1 hover:bg-opacity-20"
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <input {...getInputProps()} />
          {imageUrl.length ? (
            <div className="flex flex-col items-center justify-center h-full w-full">
              <img
                src={imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full gap-3">
              <div
                className="rounded overflow-hidden w-full"
                ref={animationContainer}
                // whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                // transition={{ duration: 1.5, ease: "backOut" }}
              />
              <div className="flex items-center flex-col gap-3 relative bottom-24">
                <h1 className="font-bold font__montserrat sm:text-2xl text-md">
                  Drop your cover image here, or{" "}
                  <span className="text-themeBlue1">browse</span>
                </h1>
                <span className="text-gray-300 font__montserrat text-lg font-semibold">
                  Supports JPG, JPEG2000, PNG
                </span>
              </div>
            </div>
          )}
        </motion.div>
        <div className="mt-20 mb-10">
          <div className="grid grid-cols-2 gap-y-14">
            <div className="lg:col-span-1 col-span-2">
              <label
                className="text-black text-4xl font-bold font__kaushan tracking-wider cursor-pointer flex items-center sm:justify-start justify-center h-full"
                htmlFor="username"
              >
                USER-NAME
              </label>
            </div>
            <div className="lg:col-span-1 col-span-2 p-5 shadow-searchInput rounded flex items-center">
              <TextInput
                icon={<BsFillPersonFill size={40} />}
                placeholder="ENTER YOUR USERNAME"
                classNames={{
                  input:
                    " py-2 text-start border-none text-xl font-semibold ml-4 bg-transparent",
                  error: "absolute",
                }}
                className="w-full"
                id="username"
                name="lastname"
                value={formData.lastname}
                onChange={onFormChange}
                type="text"
                error={
                  validationState.lastname === true
                    ? false
                    : validationState.lastname
                }
                rightSection={
                  validationState.firstname === true ? (
                    <BsCheckCircleFill className="text-green-500" size={40} />
                  ) : (
                    <MdError color="red" size={40} />
                  )
                }
              />
            </div>
            <div className="lg:col-span-1 col-span-2">
              <label
                className="text-black text-4xl font-bold font__kaushan tracking-wider cursor-pointer flex sm:justify-start justify-center items-center h-full"
                htmlFor="username"
              >
                TITLE
              </label>
            </div>
            <div className="lg:col-span-1 col-span-2 p-5 shadow-searchInput rounded flex items-center">
              <TextInput
                icon={<BsFillChatRightTextFill size={32.5} />}
                placeholder="ENTER THE TITLE"
                classNames={{
                  input:
                    " py-2 text-start border-none text-xl font-semibold ml-4 bg-transparent",
                  error: "absolute",
                }}
                className="w-full"
                id="username"
                name="lastname"
                value={formData.lastname}
                onChange={onFormChange}
                type="text"
                error={
                  validationState.lastname === true
                    ? false
                    : validationState.lastname
                }
                rightSection={
                  validationState.firstname === true ? (
                    <BsCheckCircleFill className="text-green-500" size={40} />
                  ) : (
                    <MdError color="red" size={40} />
                  )
                }
              />
            </div>
            <div className="lg:col-span-1 col-span-2">
              <label
                className="text-black text-4xl font-bold font__kaushan tracking-wider sm:justify-start justify-center cursor-pointer flex items-center h-full"
                htmlFor="cate"
              >
                CATEGORIES
              </label>
            </div>
            <div className="lg:col-span-1 col-span-2 px-5 py-4 shadow-searchInput rounded flex items-center">
              <MultiSelect
                data={qualificationsData}
                icon={<MdCategory size={40} />}
                placeholder="ENTER THE CATEGORIES"
                className="w-full"
                classNames={{
                  input: "text-start border-none bg-transparent",
                  error: "absolute",
                  searchInput: "text-xl font-semibold ml-4",
                }}
                onChange={(value: []) =>
                  setFormData({ ...formData, qualifications: value })
                }
                value={formData.qualifications}
                styles={{ rightSection: { pointerEvents: "none" } }}
                id="categories"
              />
            </div>
            <div className="col-span-2 p-5 shadow-searchInput rounded flex items-center">
              <RichTextEditorComponent
                id="description"
                className="w-full"
                value={formData.bio}
                change={(e) => setFormData({ ...formData, bio: e.value })}
              >
                <Inject
                  services={[HtmlEditor, Toolbar, Link, QuickToolbar, Image]}
                />
              </RichTextEditorComponent>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <button className="bg-themeBlue1 text-white py-2 px-8 rounded font__kaushan text-2xl tracking-wider shadow-inputTheme transition-all hover:scale-95 hover:shadow-black1">
            POST
          </button>
          <button className="py-2 px-8 rounded font__kaushan text-2xl tracking-wider shadow-searchInput transition-all hover:scale-95">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
