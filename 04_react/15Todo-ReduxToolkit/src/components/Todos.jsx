import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  makeEditable,
  changeText,
  confirmChange,
  isTaskDone,
  searchTodo,
} from "../features/todoSlice";

function Todos() {
  let displayTodo = useSelector((state) => state.todo.todos);
  const todos = useSelector((state) => state.todo.todos);
  const searching = useSelector((state) => state.todo.searchedTodos);
  const dispatch = useDispatch();

  searching.length > 0 ? (displayTodo = searching) : (displayTodo = todos);

  return (
    <div className="max-w-3xl mx-[2%] md:mx-auto p-8 bg-gray-950 rounded-md shadow-2xl mt-10 mb-10 md:mt-20 md:mb-20 lg:mb-40 xl:mb-60 space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12 3xl:space-y-14">
      <input
        className="mb-3 bg-gray-900 py-2 px-3 border-2 border-gray-800 rounded-sm shadow-xl shadow-gray-900/50 w-full"
        type="text"
        placeholder="Search Todo"
        onChange={(e) => dispatch(searchTodo(e.target.value.trim()))}
      />
      <ul className="space-y-8 my-6">
        {displayTodo.map((todo) => (
          <div
            className={`bg-gray-950 py-2 px-3 border-2 border-gray-800 rounded shadow-xl shadow-gray-900/50`}
            key={todo.id}
          >
            {!todo.isEditable && (
              <li
                className={`w-full flex bg-gray-900 py-2 px-3 border-2 border-gray-800 rounded ${
                  todo.isDone &&
                  `line-through decoration-white decoration-2 text-gray-50`
                }`}
              >
                <input
                  className="mr-2 outline-none"
                  type="checkbox"
                  onClick={() => dispatch(isTaskDone(todo.id))}
                />
                {todo.text}
              </li>
            )}

            {todo.isEditable && (
              <input
                className={`w-full bg-gray-900 py-2 px-3 border-2 border-white outline-none rounded`}
                type="text"
                value={todo.tempText}
                onChange={(e) =>
                  dispatch(changeText({ id: todo.id, text: e.target.value }))
                }
              />
            )}

            <span className={`space-x-3 block mt-2 text-right`}>
              {!todo.isDone && (
                <span>
                  {!todo.isEditable && (
                    <button
                      className={`text-sm text-red-600 bg-gray-800 px-3 py-1 rounded-sm font-semibold hover:relative hover:bottom-[2px]`}
                      onClick={() => dispatch(makeEditable(todo.id))}
                    >
                      Edit
                    </button>
                  )}

                  {todo.isEditable && (
                    <button
                      className={`text-sm text-red-600 bg-gray-800 px-3 py-1 rounded-sm font-semibold hover:relative hover:bottom-[2px]`}
                      type="submit"
                      onClick={() => dispatch(confirmChange(todo.id))}
                    >
                      Confirm
                    </button>
                  )}
                </span>
              )}

              <button
                className={`text-sm bg-red-600 px-3 py-1 rounded-sm font-semibold hover:relative hover:bottom-[2px]`}
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Delete
              </button>
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
