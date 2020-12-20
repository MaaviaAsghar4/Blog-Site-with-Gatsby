import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import styles from "./Footer.module.css";

export default function Footer() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className={styles.mainFooter}>
        <Button
          className={styles.btn}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Contact Developer
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <a href="https://github.com/MaaviaAsghar4">Github</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="https://www.facebook.com/maaviaasghar/">Facebook</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="https://www.fiverr.com/users/maaviasghar4/">Fiverr</a>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
