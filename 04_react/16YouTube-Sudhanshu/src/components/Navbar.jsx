import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSlidebar } from "../features/slidebarSlice";
import { setSearchFor } from "../features/searchSlice";

function Navbar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchingFor = useSelector((store) => store.search.searchFor);

  useEffect(() => {
    setSearch(searchingFor);
  }, [searchingFor]);

  return (
    <div className="flex items-center justify-between h-16 shadow-lg px-5 bg-white sticky top-0">
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="hamburger_logo"
          className="w-6 h-6 cursor-pointer"
          onClick={() => dispatch(toggleSlidebar())}
        />
        <Link to="/">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
            alt="youtube_logo"
            className="h-5 ml-5"
          />
        </Link>
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-96 border border-gray-600 px-3 rounded-l-full outline-none"
        />
        <Link to={`/results?search_query=${search}`}>
          <div onClick={() => dispatch(setSearchFor(search))}>
            <img
              src="https://e7.pngegg.com/pngimages/313/69/png-clipart-magnifying-glass-computer-icons-searching-glass-share-icon.png"
              alt="search_logo"
              className="h-7 bg-gray-100 border border-gray-600 px-3 py-1 rounded-r-full cursor-pointer"
            />
          </div>
        </Link>
      </div>

      <div className="">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt="user_logo"
          className="w-6"
        />
      </div>
    </div>
  );
}

export default Navbar;
