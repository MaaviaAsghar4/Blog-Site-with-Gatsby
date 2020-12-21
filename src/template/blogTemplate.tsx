import { Container, Box, Typography } from "@material-ui/core";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import Layout from "../components/Layout";
import styles from "./blogTemplate.module.css";

export default function blogTemplate({ pageContext }) {
  console.log(pageContext);
  const { blogDetails } = pageContext;
  console.log(blogDetails);
  return (
    <Layout>
      <Container maxWidth="md">
        <Box className={styles.imgBox}>
          <Typography className={styles.title} variant="h1" gutterBottom>
            {blogDetails.title}
          </Typography>
        </Box>
        <Box className={styles.imgBox}>
          <img
            className={styles.img}
            src={blogDetails.featuredImage.file.url}
            alt={blogDetails.featuredImage.description}
          />
        </Box>
        <Box>
          <Typography className={styles.body} variant="body1" gutterBottom>
            {renderRichText(blogDetails.blog)}
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
