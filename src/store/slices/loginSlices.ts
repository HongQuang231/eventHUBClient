import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
})

export const { setIsLogin } = loginSlice.actions;

export default loginSlice.reducer;