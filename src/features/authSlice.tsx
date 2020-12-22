import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initState {
  userEmail: string | null;
  token: string | null;
  isLoggedIn: boolean;
  number: number;
}

let initialState: initState = {
  userEmail: null,
  token: null,
  isLoggedIn: false,
  number: 0,
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
      state.number = payload.number;
      console.log(state.userEmail, state.token, state.isLoggedIn);
      alert("Sign In Successful");
    },
    blogShow(state, { payload }) {
      return {
        ...state,
        number: payload,
      };
    },
  },
});

export const { isAuthenticated, blogShow } = authSlice.actions;
export const userAuthentication = (state: any) => state.auth;
export default authSlice.reducer;
