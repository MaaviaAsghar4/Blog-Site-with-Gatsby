import React from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import styles from "./signup.module.css";
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
          <TextField
            type="password"
            id="outlined"
            label="Confirm Password"
            variant="outlined"
            className={styles.inputField}
            fullWidth
          />
          <Button className={styles.btn} variant="contained">
            SignUp
          </Button>
        </form>
      </Container>
    </div>
  );
}
