import React from "react";
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  Indicator,
} from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";
import classnames from "classnames";
import { useAppStateContext } from "../../context/contextProvider";
import { headerLinks } from "../../assets/links/index";
import { FaRegBell, FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiLocationPlus } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { avatar } from "../../assets/images/index";
import styles from "./HomeNav.module.scss";
import Image from "next/image";
import ProfileMenu from "../ProfileMenu";
import { useRouter } from "next/router";

const HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

type Props = {};

const HomeNav = (props: Props) => {
  const { classes } = useStyles();
  const router = useRouter();

  //@ts-ignore
  const { drawerActive, setDrawerActive, user } = useAppStateContext();

  const getLinkClasses = (label: string) =>
    classnames(
      `py-2 px-5 mx-1 transition-all font-semibold hover:text-black text-gray-800 text-md nav__link uppercase ${
        label === "Home" && router.pathname === "/home"
          ? styles.nav__link__selected
          : styles.nav__link
      } font__kaushan`,
      {
        "text-themeBlue1": label === "Home",
      }
    );

  const items = headerLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a
              href={link.link}
              className={getLinkClasses(link.label)}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                {/* @ts-ignore */}
                <span className={classes.linkLabel}>{link.label}</span>
                <IoIosArrowDown size={15} className="ml-2" />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={getLinkClasses(link.label)}
        onClick={(event) => {
          event.preventDefault();
          if (link.link === "/home") {
            router.push("/home");
          }
        }}
      >
        {link.label}
      </a>
    );
  });

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, ease: "backOut" }}
      className={styles.app__navbar}
    >
      <Header
        height={HEADER_HEIGHT}
        className={`w-full bg-transparent border-none py-12`}
        id={`${styles.navbar}`}
      >
        <Container
          className={`${classes.header} flex w-full max-w-full sm:px-20 xl1:px-40 px-5`}
        >
          <div className="flex items-center gap-2">
            <FaTelegramPlane size={35} color="black" />
            <span
              className="text-black text-2xl font-semibold tracking-widest"
              style={{ fontFamily: "'Kaushan Script', cursive" }}
            >
              Blogify
            </span>
          </div>
          <div className="items-center hidden xl:flex">
            <Group
              spacing={5}
              className={classes.links}
              style={{ marginRight: "3.5rem" }}
            >
              {items}
            </Group>

            <div
              className="w-0 h-4 bg-black rounded-lg mr-16"
              style={{ width: "3px" }}
            />
            <div
              className="flex items-center gap-2.5"
              style={{ marginRight: "5rem" }}
            >
              <BiLocationPlus size={22.5} />
              <Indicator
                inline
                size={12}
                offset={5}
                position="top-end"
                color="#4629dd"
                withBorder
              >
                <FaRegBell size={22.5} />
              </Indicator>
            </div>
            <Menu trigger="click" shadow="xl">
              <Menu.Target>
                <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg ml-2">
                  <img
                    src={user?.pic || avatar}
                    className="rounded-full object-cover shadow-inputTheme w-14 h-14"
                    alt="profile"
                  />
                  <p className="ml-2 font__kaushan tracking-widest cursor-pointer">
                    <span className="text-gray-400 text-14">Hi, </span>{" "}
                    <span className="text-black font-bold ml-1 text-14">
                      {user?.username?.slice(0, 10) || "User"}
                    </span>
                  </p>
                  <MdKeyboardArrowDown className="text-gray-400 text-14" />
                </div>
              </Menu.Target>
              <ProfileMenu />
            </Menu>
          </div>

          <Burger
            opened={drawerActive}
            onClick={() => {
              setDrawerActive(true);
            }}
            className={`${classes.burger} block xl:hidden`}
            size="sm"
            color="black"
          />
        </Container>
      </Header>
    </motion.div>
  );
};

export default HomeNav;
