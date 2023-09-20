import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center space-y-6">
      <h1 className="text-3xl">Todo with Rudux</h1>
      <Todos />
    </div>
  );
}

export default App;
