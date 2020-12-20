import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import GatsbyBannger from "../images/gatsbyBanner.png";
import styles from "./index.module.css";

export default () => {
  return (
    <Layout>
      <div className={styles.margin}>
        <Grid className={styles.flexCenter} container>
          <Grid item xs={12} sm={6}>
            <Typography className={styles.headFont}>
              Welcome to My <br />
              Gatsby Blog
            </Typography>
            <Typography className={styles.subFont}>
              This blog site has been developed <br />
              with Gatsby SSG and Contentful
            </Typography>
            <Button className={styles.btn} variant="contained">
              <Link to="/blog">Visit the Blog</Link>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              className={styles.bannerImg}
              src={GatsbyBannger}
              alt="Hero Banner for Gatsby Blog Site"
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};
