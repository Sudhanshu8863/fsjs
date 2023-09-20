import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByValue,
} from "./features/counterSlice/counterSlice";

function App() {
  const [input, setInput] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="bg-zinc-900 text-zinc-100 flex justify-center items-center flex-col min-h-screen gap-6">
      <div className="space-x-3">
        <input
          className="bg-zinc-700 border-2 rounded outline-none"
          type="number"
          placeholder="Enter a number..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-zinc-700 px-3 py-1 rounded"
          onClick={() => dispatch(incrementByValue(+input))}
        >
          Increment by Value
        </button>
      </div>
      <div className="space-x-6">
        <button
          className="bg-zinc-700 px-3 py-1 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment by 1
        </button>
        <span className="bg-zinc-700 px-3 py-1 rounded">{count}</span>
        <button
          className="bg-zinc-700 px-3 py-1 rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement by 1
        </button>
      </div>
    </div>
  );
}

export default App;
