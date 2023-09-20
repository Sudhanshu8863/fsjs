import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../features/todoSlice";
import { useState } from "react";

function Todos() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex space-x-2">
        <input
          className="outline-none bg-gray-900 px-3"
          type="text"
          placeholder="Enter your Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-gray-800 px-3 py-1 rounded"
          onClick={() => {
            dispatch(addTodo(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {todos.map((todo) => (
          <div className="flex justify-between space-x-5" key={todo.id}>
            <span className="bg-gray-800 px-3 py-1 rounded">{todo.text}</span>
            <button
              className="bg-gray-800 text-red-600 px-3 py-1 rounded"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
