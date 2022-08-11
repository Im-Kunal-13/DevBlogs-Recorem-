import { Select } from "@mantine/core";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex items-center flex-col justify-center py-14 mt-24">
      <h1 className="font-bold text-4xl font__kaushan tracking-wider relative">
        Plan Your Success!
        <div className="absolute -top-5 -right-11">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-themeCyan1 w-3 h-3 inline-block shadow-dotCyan" />
            <div className="flex flex-col gap-2">
              <span className="rounded-full bg-themeBlue1 w-3 h-3 inline-block shadow-dotBlue" />
              <span className="rounded-full bg-themeViolet1 w-3 h-3 inline-block shadow-dotViolet" />
            </div>
          </div>
        </div>
      </h1>
      <p className="font__kaushan tracking-wider mt-3 text-gray-400 font-semiboldfont-semibold">
        Find your favorite blogs on our network!
      </p>
      <div className="mt-6 p-5 shadow-searchInput rounded flex items-center gap-3">
        <Select
          placeholder="Search by category"
          searchable
          icon={<BiSearchAlt size={22.5} />}
          classNames={{ input: "bg-inputBg py-6 sm:pr-40 pr-24 text-start border-none" }}
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

export default Search;
