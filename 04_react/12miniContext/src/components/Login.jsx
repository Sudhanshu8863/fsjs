import { useState, useContext } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-center">LogIn</h2>
      <input
        className="rounded px-2 py-1 text-black/80"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="rounded px-2 py-1 text-black/80"
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="rounded px-3 py-1 font-semibold bg-stone-700"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
