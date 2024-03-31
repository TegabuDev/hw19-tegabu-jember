import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, username: "user", password: "user", email: "user@gmail.com" },
    { id: 2, username: "user2", password: "user2", email: "user2@gmail.com" },
    { id: 3, username: "user3", password: "user3", email: "user3@gmail.com" },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      const user = action.payload;
      if (!user) return;
      state.users.push(user);
    },

    removeUser(state, action) {},
    editUser(state, action) {},
  },
});

export const { editUser, removeUser, addUser } = usersSlice.actions;

export default usersSlice.reducer;
