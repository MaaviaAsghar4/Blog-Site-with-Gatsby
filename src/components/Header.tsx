import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./Header.module.css";
import { Link } from "gatsby";

export default function Header() {
  return (
    <AppBar position="static" className={styles.mainNav}>
      <Toolbar className={styles.displayRight}>
        <Typography className={styles.marginLeft} variant="h6">
          <Link to="/">Home</Link>
        </Typography>
        <Typography className={styles.marginLeft} variant="h6">
          <Link to="/blog">Blogs</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
