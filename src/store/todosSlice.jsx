import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  todos: [
    { id: 1, text: "to do something", isDone: false, info: "" },
    { id: 2, text: "to do react context", isDone: false, info: "" },
    { id: 3, text: "to do homework", isDone: false, info: "" },
  ],
  selectedTodo: null,
  editedTodo: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      const text = action.payload;
      const newTodo = {
        id: nanoid(),
        text,
        isDone: false,
      };
      state.todos.push(newTodo);
    },

    removeTodo(state, action) {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo(state, action) {
      const { id, text } = action.payload;
      const exitingTodo = state.todos.find((todo) => todo.id === id);
      if (exitingTodo) {
        exitingTodo.text = text;
      }
      state.editedTodo = null;
    },
    setEditedTodo(state, action) {
      const id = action.payload;
      const existTodo = state.todos.find((todo) => todo.id === id);
      state.editedTodo = existTodo;
    },

    toggleTodo(state, action) {
      const id = action.payload;
      const existTodo = state.todos.find((todo) => todo.id === id);
      if (existTodo) {
        existTodo.isDone = !existTodo.isDone;
      }
    },

    selectTodo(state, action) {
      const id = action.payload;
      if (!id) {
        state.selectedTodo = null;
        return;
      }
      const existTodo = state.todos.find((todo) => todo.id === id);
      if (!existTodo) return;
      state.selectedTodo = existTodo;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
  selectTodo,
  setEditedTodo,
  toggleTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
