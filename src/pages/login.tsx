import React, { useState } from "react";
import { Link } from "gatsby";
import { useAppDispatch } from "../store";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { logInUser } from "../features/authSlice";
import styles from "./login.module.css";

export default function login() {
  const dispatch = useAppDispatch();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let payload = { email, password };
    dispatch(logInUser(payload));
  };
  return (
    <div className={styles.container}>
      <Container maxWidth="sm">
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <Typography className={styles.title}>SignUp Form</Typography>
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            fullWidth
            className={styles.inputField}
          />
          <TextField
            type="password"
            id="outlined"
            label="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            variant="outlined"
            className={styles.inputField}
            fullWidth
          />
          <Button type="submit" className={styles.btn} variant="contained">
            Login
          </Button>
          <Box>
            <Typography className={styles.Link} variant="body1">
              Need an account? <Link to="/signup">Sign Up</Link>
            </Typography>
          </Box>
        </form>
      </Container>
    </div>
  );
}
