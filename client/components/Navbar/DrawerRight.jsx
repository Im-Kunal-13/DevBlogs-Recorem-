import { Drawer, Tooltip, useMantineTheme, Collapse } from "@mantine/core";
import { useAppStateContext } from "../../context/contextProvider";
import { headerLinks } from "../../assets/links";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DrawerRight = (props) => {
  const theme = useMantineTheme();
  const { drawerActive, setDrawerActive, setLoginModalActive } =
    useAppStateContext();

  const [collapse, setCollapse] = useState({
    manual: false,
    support: false,
  });

  const handleCollapse = (label) => {
    switch (label) {
      case "Manual":
        setCollapse({ ...collapse, manual: !collapse.manual });
        break;

      case "Support":
        setCollapse({ ...collapse, support: !collapse.support });
        break;

      default:
        break;
    }
  };

  const getCollapseBool = (label) => {
    switch (label) {
      case "Manual":
        return collapse.manual;

      case "Support":
        return collapse.support;

      default:
        break;
    }
  };

  const items = headerLinks.map((link) => {
    const menuItems = link.links?.map((item) => (
      <div
        key={item.label}
        className="mb-4 ml-5 flex items-center hover:underline"
      >
        <MdKeyboardArrowRight color="white" className="mr-2" />
        <a
          href={item.link}
          className={"font-semibold"}
          onClick={(event) => event.preventDefault()}
        >
          {item.label}
        </a>
      </div>
    ));

    if (menuItems) {
      return (
        <div key={link.label}>
          <button
            className="my-3 font-semibold flex items-center"
            onClick={() => {
              handleCollapse(link.label);
            }}
          >
            <span>{link.label}</span>
            <IoMdArrowDropdown
              className="ml-2 transition-all"
              style={{
                transform: getCollapseBool(link.label) ? "rotate(180deg)" : "",
              }}
            />
          </button>
          <Collapse in={getCollapseBool(link.label)}>{menuItems}</Collapse>
        </div>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={"font-semibold my-3 hover:underline transition-all"}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Drawer
      overlayColor={
        theme.colorScheme === "light"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0}
      overlayBlur={3}
      opened={drawerActive}
      onClose={() => setDrawerActive(false)}
      position="right"
      title="Settings"
      padding="md"
      size="lg"
      className="font-semibold px-5 overflow-y-scroll"
      classNames={{ closeButton: { display: "none !important" } }}
    >
      <div className="flex flex-col">
        {items}
        <button
          className="font-semibold text-black text-md px-5 py-1 rounded hover:shadow border-gray-300 w-40 mb-6 mt-3"
          style={{ borderWidth: "1.75px" }}
          onClick={() => {
            setLoginModalActive(true);
            setDrawerActive(false);
          }}
        >
          LOGIN
        </button>
        <button
          className="font-semibold hover:text-white text-gray-200 text-md bg-black bg-opacity-20 px-5 py-1 rounded hover:shadow hover:bg-opacity-30 border-transparent border w-40 landing-review"
          style={{ borderWidth: "1.75px" }}
        >
          SIGNUP
        </button>
      </div>
    </Drawer>
  );
};

export default DrawerRight;
