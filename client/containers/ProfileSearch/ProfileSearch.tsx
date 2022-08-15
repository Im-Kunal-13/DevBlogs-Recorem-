import { Select } from "@mantine/core";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useAppStateContext } from "../../context/contextProvider";
import { categories } from "../../assets/links/index";

const ProfileSearch = () => {
  //@ts-ignore
  const { homeSearchQuery, setHomeSearchQuery } = useAppStateContext();

  return (
    <div className="flex items-center flex-col justify-center py-14">
      <div className="p-5 shadow-searchInput rounded flex items-center gap-3">
        <Select
          placeholder="Search by category"
          searchable
          icon={<BiSearchAlt size={22.5} />}
          classNames={{
            input: "bg-inputBg py-6 sm:pr-40 pr-24 text-start border-none",
          }}
          onChange={(value) => {
            setHomeSearchQuery(value);
          }}
          value={homeSearchQuery}
          nothingFound="No options"
          data={categories}
          styles={(theme) => ({
            item: {
              "&[data-selected]": {
                "&, &:hover": {
                  backgroundColor: "#313EF7",
                  color: "white",
                },
              },
              "&[data-hovered]": {},
            },
          })}
        />
        <button className="bg-themeBlue1 rounded px-5 py-3 text-white font__kaushan tracking-wider sm:block hidden">
          Search
        </button>
      </div>
    </div>
  );
};

export default ProfileSearch;
