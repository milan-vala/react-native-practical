import { createSlice } from "@reduxjs/toolkit";

export interface IUserSlice {
  user: string;
}

const initialState: IUserSlice = {
  user: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
