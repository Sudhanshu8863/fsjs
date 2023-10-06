import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  todos: [
    {
      id: 1,
      text: "Learn Redux",
      tempText: "Learn Redux",
      isEditable: false,
      isDone: false,
    },
  ],
  searchedTodos: [],
};

// todoSlice
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // adding todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        tempText: action.payload,
        isEditable: false,
        isDone: false,
      };
      state.todos.push(todo);
    },

    // removing todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      // for searchedTodos
      state.searchedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    // making todo editable
    makeEditable: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isEditable = true;
        }
      });

      // for searchedTodos
      state.searchedTodos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isEditable = true;
        }
      });
    },

    // changing todo text
    changeText: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.tempText = action.payload.text;
        }
      });

      // for searchedTodos
      state.searchedTodos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.tempText = action.payload.text;
        }
      });
    },

    // confirming change
    confirmChange: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          const tempText = todo.tempText.trim();
          if (tempText !== "") {
            todo.text = tempText;
            todo.tempText = tempText;
            todo.isEditable = false;
          } else {
            todo.isEditable = false;
            todo.tempText = todo.text;
          }
        }
      });

      // for searchedTodos
      state.searchedTodos.map((todo) => {
        if (todo.id === action.payload) {
          const tempText = todo.tempText.trim();
          if (tempText !== "") {
            todo.text = tempText;
            todo.tempText = tempText;
            todo.isEditable = false;
          } else {
            todo.isEditable = false;
            todo.tempText = todo.text;
          }
        }
      });
    },

    // for checking task is done
    isTaskDone: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
      });

      // for searchedTodos
      state.searchedTodos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
      });
    },

    // for searching todo
    searchTodo: (state, action) => {
      if (action.payload === "") {
        state.searchedTodos = [];
        // console.log(state.searchedTodos);
      } else {
        const search = state.todos.filter((todo) =>
          todo.text.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.searchedTodos = search;
        // console.log(state.searchedTodos);
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  makeEditable,
  changeText,
  confirmChange,
  isTaskDone,
  searchTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
