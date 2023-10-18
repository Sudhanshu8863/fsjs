import { Outlet } from "react-router-dom";
import Slidebar from "./Slidebar";

function Body() {
  return (
    <div className="flex">
      <Slidebar />
      <Outlet />
    </div>
  );
}

export default Body;
