import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "./todosSlice";
import usersSlice from "./usersSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice,
    users: usersSlice,
    user: userSlice,
  },
});

export default store;
