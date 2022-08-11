import React from "react";
import HomeNav from "../components/Home/HomeNav";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="h-35-rem absolute m-auto top-0 bottom-0 -left-96"
      >
        <path
          fill="#21D2FE"
          d="M49.4,-75.8C63.8,-67.5,75.1,-53.5,81.5,-37.7C87.9,-22,89.4,-4.5,87.3,12.8C85.3,30.1,79.8,47.2,69.2,60.6C58.6,74,43,83.7,26.1,88.4C9.2,93.1,-9,92.8,-25.5,87.6C-42.1,82.4,-57,72.3,-68.4,59.2C-79.9,46.1,-87.9,30,-89.3,13.5C-90.6,-3,-85.2,-19.7,-77.4,-34.8C-69.6,-49.8,-59.4,-63.2,-46.1,-71.9C-32.8,-80.7,-16.4,-84.8,0.5,-85.6C17.5,-86.4,34.9,-84,49.4,-75.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="h-40-rem absolute m-auto -top-20 -right-96"
      >
        <path
          fill="#4629dd"
          d="M40.9,-33.8C55.3,-14.5,71,2.6,67.8,14.9C64.5,27.2,42.4,34.6,22.6,42.3C2.9,50.1,-14.5,58.1,-31.8,54.3C-49.2,50.5,-66.5,34.8,-72.7,14.6C-79,-5.7,-74.1,-30.5,-60.2,-49.6C-46.2,-68.8,-23.1,-82.4,-4.9,-78.4C13.2,-74.5,26.5,-53.1,40.9,-33.8Z"
          transform="translate(100 100)"
        />
      </svg>
      <HomeNav />
    </div>
  );
};

export default Home;
