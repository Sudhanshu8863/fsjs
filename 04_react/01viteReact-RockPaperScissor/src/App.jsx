import ShowDate from "./ShowDate";
import RPS from "./RPS";
import rpsBackground from "./assets/rpsBackground.jpg";

function App() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        className="h-[100vh] w-[100vw] absolute top-0 -z-10"
        src={rpsBackground}
        alt="background-image"
      />
      <ShowDate />
      <RPS />
    </div>
  );
}

export default App;
