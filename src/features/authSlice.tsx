import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initState {
  userEmail: string | null;
  token: string | null;
  isLoggedIn: boolean;
}

let initialState: initState = {
  userEmail: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuthenticated(state, { payload }) {
      console.log(payload);
      state.userEmail = payload.email;
      state.token = payload.token;
      state.isLoggedIn = payload.isAuth;
      console.log(state.userEmail, state.token, state.isLoggedIn);
      alert("Sign In Successful");
    },
  },
});

export const { isAuthenticated } = authSlice.actions;
export const userAuthentication = (state: any) => state.auth;
export default authSlice.reducer;
