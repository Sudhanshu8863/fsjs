import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1 className="mt-4">Please Login</h1>;

  return <div className="mt-4">Welcome {user.username}</div>;
}

export default Profile;
