import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import firebase from "gatsby-plugin-firebase";

let initialState = {
  userEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpUser(state, { payload }): any {
      let { email, password } = payload;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          console.log(user);
          // state.userEmail = user.email;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    logInUser(state, { payload }): any {
      let { email, password } = payload;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          // state.user = email;
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});

export const { signUpUser, logInUser } = authSlice.actions;
export const userAuthentication = (state: any) => state.auth;
export default authSlice.reducer;
