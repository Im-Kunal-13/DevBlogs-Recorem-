import { Select } from "@mantine/core";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

import styles from "./ProfileSearch.module.scss";

type Props = {};

const ProfileSearch = (props: Props) => {
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
          nothingFound="No options"
          data={["React", "Angular", "Svelte", "Vue"]}
          styles={(theme) => ({
            item: {
              // applies styles to selected item
              "&[data-selected]": {
                "&, &:hover": {
                  backgroundColor: "#313EF7",
                  color: "white",
                },
              },

              // applies styles to hovered item (with mouse or keyboard)
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
