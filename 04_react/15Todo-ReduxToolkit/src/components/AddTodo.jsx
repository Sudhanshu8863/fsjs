import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  // checking if the input is empty
  const checkEmptyInput = (text) => {
    if (text !== "") {
      return true;
    } else {
      setInput("");
    }
  };

  // adding todo
  const addingTodo = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (checkEmptyInput(text)) {
      dispatch(addTodo(text));
      setInput("");
    }
  };

  return (
    <div className="max-w-4xl mx-[2%] md:mx-auto">
      <h1 className="text-center my-5 text-2xl font-semibold">Todo</h1>
      <form
        className="space-x-2 md:space-x-5 max-w-3xl flex justify-center mx-auto"
        onSubmit={addingTodo}
      >
        <input
          className="bg-gray-700 border-2 outline-none border-r-0 rounded px-2 w-full"
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-sky-500 hover:bg-sky-600 font-semibold px-5 py-2 rounded-md"
          type="submit"
        >
          AddTodo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
