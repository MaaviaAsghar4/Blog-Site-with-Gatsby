import { Container, Box, Typography } from "@material-ui/core";
import React from "react";
import Layout from "../components/Layout";
import GatsbyBanner from "../images/gatsbyBanner.png";
import styles from "./blogTemplate.module.css";
export default function blogTemplate() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box>
          <Typography className={styles.title} variant="h1" gutterBottom>
            Title of Blog
          </Typography>
        </Box>
        <Box>
          <img className={styles.img} src={GatsbyBanner} alt="Featured Image" />
        </Box>
        <Box>
          <Typography className={styles.body} variant="body1" gutterBottom>
            This is the body of the blog that would display the rich data in the
            form of json api
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
