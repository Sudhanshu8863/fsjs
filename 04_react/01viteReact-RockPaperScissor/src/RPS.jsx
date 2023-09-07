import { useState } from "react";
import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissor from "./assets/scissor.png";

function RPS() {
  let [result, setResult] = useState("Let's Play");
  let [totalScore, setTotalScore] = useState(0);

  // cpu turn
  const cpu = () => {
    let cpuI = Math.floor(Math.random() * 3);
    return ["rock", "paper", "scissor"][cpuI];
  };

  // matching result
  const match = (cpu, user) => {
    if (cpu === user) {
      setResult(() => `Match draw, Computer chooses ${cpu}`);
    } else if (cpu === "rock" && user === "paper") {
      setResult(() => `You Won, Computer chooses ${cpu}`);
      setTotalScore(() => totalScore + 1);
    } else if (cpu === "rock" && user === "scissor") {
      setResult(() => `You Loose, Computer chooses ${cpu}`);
      setTotalScore(() => totalScore - 1);
    } else if (cpu === "paper" && user === "scissor") {
      setResult(() => `You Won, Computer chooses ${cpu}`);
      setTotalScore(() => totalScore + 1);
    } else if (cpu === "paper" && user === "rock") {
      setResult(() => `You Loose, Computer chooses ${cpu}`);
      setTotalScore(() => totalScore - 1);
    } else if (cpu === "scissor" && user === "rock") {
      setResult(() => `You Won, Computer chooses ${cpu}`);
      setTotalScore(() => totalScore + 1);
    } else if (cpu === "scissor" && user === "paper") {
      setResult(() => `You Loose, Computer chooses ${cpu}`);
      setTotalScore(() => totalScore - 1);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-medium my-10 text-center">
        Rock, Paper and Scissor
      </h1>

      <p className="text-xl font-medium my-10 text-center">Choose Me</p>

      <div className="flex">
        <div
          className="w-40 animate-bounce"
          onClick={() => match(cpu(), "rock")}
        >
          <img src={rock} alt="" />
        </div>

        <div
          className="w-40 animate-spin"
          onClick={() => match(cpu(), "paper")}
        >
          <img src={paper} alt="" />
        </div>

        <div
          className="w-40 animate-pulse"
          onClick={() => match(cpu(), "scissor")}
        >
          <img src={scissor} alt="" />
        </div>
      </div>

      <div className="text-lg font-medium my-10 text-center">
        <p>{result}</p>

        <p className="my-5">
          Total Score:
          <span className="ml-2 p-2 rounded-md bg-[rgba(56,54,54,0.19)] backdrop-blur-3xl">
            {totalScore}
          </span>
        </p>
      </div>
    </div>
  );
}
export default RPS;
