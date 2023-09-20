import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 112, text: "Learn Redux" },
    { id: 152, text: "Complete reduxjs/toolkit" },
  ],
};

const todosSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generating a unique ID
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
