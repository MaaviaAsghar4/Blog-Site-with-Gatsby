import React from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import styles from "./login.module.css";
export default function signup() {
  return (
    <div className={styles.container}>
      <Container maxWidth="sm">
        <form className={styles.formContainer}>
          <Typography className={styles.title}>SignUp Form</Typography>
          <TextField
            type="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            className={styles.inputField}
          />
          <TextField
            type="password"
            id="outlined"
            label="Password"
            variant="outlined"
            className={styles.inputField}
            fullWidth
          />
          <Button className={styles.btn} variant="contained">
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}
