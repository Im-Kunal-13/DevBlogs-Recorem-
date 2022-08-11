import React from "react";
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Burger,
  Tooltip,
  Indicator,
} from "@mantine/core";
import { IoIosArrowDown } from "react-icons/io";
import classnames from "classnames";
import { useAppStateContext } from "../../context/contextProvider";
import { headerLinks } from "../../assets/links";
import { RiAppsLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./Navbar.module.scss";
// import "./Navbar.scss";

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

const Navbar = (props: Props) => {
  const { classes } = useStyles();

  //@ts-ignore
  const {
    drawerActive,
    setDrawerActive,
    setLoginModalActive,
    setRegisterModalActive,
  } = useAppStateContext();

  const getLinkClasses = (label: string) =>
    classnames(
      `py-2 px-5 mx-1 transition-all font-semibold hover:text-white text-gray-200 text-md nav__link uppercase ${styles.nav__link} font__kaushan`,
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
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, ease: "backOut" }}
    >
      <Header
        height={HEADER_HEIGHT}
        className={`w-full bg-transparent border-none py-12`}
        id={styles.navbar}
      >
        <Container
          className={`${classes.header} m-0 flex w-full max-w-full sm:px-16 px-5`}
        >
          <div className="flex items-center gap-2">
            <FaTelegramPlane size={35} color="white" />
            <span
              className="text-white text-2xl font-semibold tracking-widest"
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
              className="w-0 h-4 bg-white rounded-lg mr-16"
              style={{ width: "3px" }}
            />
            <div className="flex items-center gap-5">
              <button
                className={`font-semibold hover:text-white text-gray-200 text-md hover:bg-opacity-20 px-5 py-1 rounded hover:shadow border-gray-300 hover:border-gray-50 transition-all hover:scale-95 hover:shadow-white font__kaushan`}
                style={{ borderWidth: "1.75px" }}
                onClick={() => setLoginModalActive(true)}
              >
                LOGIN
              </button>
              <button
                className={`font-semibold hover:text-white text-gray-200 text-md bg-black bg-opacity-20 px-5 py-1 rounded hover:shadow hover:bg-opacity-30 border-transparent border transition-all hover:scale-95 hover:shadow-white font__kaushan`}
                style={{ borderWidth: "1.75px" }}
                onClick={() => setRegisterModalActive(true)}
              >
                SIGNUP
              </button>
            </div>
          </div>

          <Burger
            opened={drawerActive}
            onClick={() => {
              setDrawerActive(true);
            }}
            className={`${classes.burger} block xl:hidden text-white`}
            size="sm"
            color="white"
          />
        </Container>
      </Header>
    </motion.div>
  );
};

export default Navbar;
