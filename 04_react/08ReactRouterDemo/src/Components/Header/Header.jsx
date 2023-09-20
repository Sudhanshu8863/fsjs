import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="w-full bg-gray-900">
      <ul className="flex justify-around py-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-orange-500 font-semibold" : "text-gray-300"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-orange-500 font-semibold" : "text-gray-300"} `
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-orange-500 font-semibold" : "text-gray-300"}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              `${isActive ? "text-orange-500 font-semibold" : "text-gray-300"}`
            }
          >
            Github
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
