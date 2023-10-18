import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Slidebar() {
  const sidebarList = {
    "Home_(w)": "/",
    "Live_(w)": "/live",
    "Upcoming_(w)": "/upcoming",
    "Trending_(w)": "/trending",
    Music: "/",
    Films: "/",
    Gaming: "/",
    News: "/",
    Sport: "/",
    Podcasts: "/",
  };

  const showSlidebar = useSelector((store) => store.slidebar.showSlidebar);

  if (!showSlidebar) {
    return null;
  }

  return (
    <div className="">
      <ul className=" flex flex-col shadow-lg sticky top-20 h-[32rem] space-y-4">
        {Object.keys(sidebarList).map((item) => (
          <li key={item} className="px-12 font-semibold text-lg">
            <Link to={sidebarList[item]}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slidebar;
