import { createSlice } from "@reduxjs/toolkit";

let value = {
  name: "user",
  initialState: {
    name: "xxxxxx",
    accountNumber: "xxxxx",
    age: "xx",
    balance: "xxxxxxx",
  },
  reducers: {
    login(state, action) {
      return { ...state, ...action.payload };
    },
    logout(state, action) {
      return value.initialState;
    },
  },
};
const userSlice = createSlice(value);

const { actions, reducer } = userSlice;
export const { login, logout } = actions;
export default reducer;
