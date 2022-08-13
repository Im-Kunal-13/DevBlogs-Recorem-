import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { MultiSelect, TextInput } from "@mantine/core";
import { useDropzone } from "react-dropzone";
import { BsFillChatRightTextFill } from "react-icons/bs";
import {
  HtmlEditor,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import Lottie from "lottie-web";
//@ts-ignore
import { upload } from "../../assets/lottie";
import { motion } from "framer-motion";
import { MdCategory } from "react-icons/md";
import { Notification } from "@mantine/core";
import { hideNotification, showNotification } from "@mantine/notifications";
import Ripples from "react-ripples";
import { createBlog } from "../../api";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

import styles from "./CreatePost.module.scss";

type Props = {};

const qualificationsData = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
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
  const [formData, setFormData] = useState({
    title: "",
    categories: [],
    description: "",
  });

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Image  UPloading
  const [imageUrl, setImageUrl] = useState("");
  //@ts-ignore
  const [image, setImageFile] = useState<File>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file: File = acceptedFiles[0];

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

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: any = new FormData();

    if (!image) {
      showNotification({
        id: "select-image",
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
    data.append("file", image);
    data.append("upload_preset", "blogify-prototype");
    data.append("cloud_name", "blogify13z");

    showNotification({
      id: "image-uploading1",
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
        mutation.mutate({ ...formData, coverImage: data.url });
      })
      .catch((err) => {
        console.log(err);
      });

    hideNotification("image-uploading1");
  };

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof createBlog>["0"]
  >(createBlog, {
    onSuccess: () => {
      showNotification({
        id: "blog-post-success1",
        radius: "md",
        message: (
          <h1 className="font-semibold text-xl">BLOG POSTED SUCCESSFULLY</h1>
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
        id: "blog-post-error1",
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
    onMutate: () => {
      <Notification
        loading={true}
        id="blog-uploading1"
        style={{ height: "70px", width: "27.5rem" }}
        radius="md"
        styles={(theme) => ({
          root: {
            boxShadow: "0 5px 20px 3px rgb(49 62 247 / 25%)",
            "&::before": { backgroundColor: "rgb(74 222 128)" },
          },
          icon: {
            height: "50px",
            width: "50px",
          },

          closeButton: {
            "&:hover": { backgroundColor: "transparent" },
            transform: "scale(1.5)",
          },
        })}
      >
        <span className="font-semibold text-xl">UPLOADING</span>
      </Notification>;
    },
  });

  // Lottie
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
      <form onSubmit={handleSubmit} className="w-full">
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
                onClick={() => {
                  console.log(image);
                }}
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
                id="title"
                name="title"
                value={formData.title}
                onChange={onFormChange}
                type="text"
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
                  setFormData({ ...formData, categories: value })
                }
                value={formData.categories}
                styles={{ rightSection: { pointerEvents: "none" } }}
                id="categories"
              />
            </div>
            <div className="col-span-2 p-5 shadow-searchInput rounded flex items-center">
              <RichTextEditorComponent
                id="description"
                className="w-full"
                value={formData.description}
                change={(e) =>
                  setFormData({ ...formData, description: e.value })
                }
              >
                <Inject services={[HtmlEditor, Toolbar, Link, QuickToolbar]} />
              </RichTextEditorComponent>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <Ripples color="#fff" during={600}>
            <button
              className="bg-themeBlue1 text-white py-2 px-8 rounded font__kaushan text-2xl tracking-wider shadow-inputTheme transition-all hover:scale-95 hover:shadow-black1"
              type="submit"
            >
              POST
            </button>
          </Ripples>
          <button className="py-2 px-8 rounded font__kaushan text-2xl tracking-wider shadow-searchInput transition-all hover:scale-95">
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
