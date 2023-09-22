import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-black/90 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold py-6">Learning Context API !</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
