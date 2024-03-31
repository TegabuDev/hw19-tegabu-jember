import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

//example data to practice login
const data = [
  { id: 1, username: "user", password: "user", email: "user@gmail.com" },
  { id: 2, username: "user2", password: "user2", email: "user2@gmail.com" },
  { id: 3, username: "user3", password: "user3", email: "user3@gmail.com" },
];

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const existUser = data.find(
    (us) => us.username === user.username && us.password === user.password
  );
  if (existUser) {
    return existUser;
  } else {
    return null;
  }
});

const initialState = {
  user: null,
  selectedUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
    selectUser(state, action) {
      // const id = action.payload;
      // if (!id) {
      //   state.selectedUser = null;
      //   return;
      // }
      // const existUser = data.find((user) => user.id === id);
      // if (!existUser) return;
      state.selectedUser = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        console.log("loginUser.pending");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("loginUser.rejected", action.error);
      });
  },
});

export const { logout, selectUser } = userSlice.actions; //login

export default userSlice.reducer;
