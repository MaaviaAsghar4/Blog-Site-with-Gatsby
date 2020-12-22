import { Container, Box, Typography, Button } from "@material-ui/core";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "gatsby";
import Truncate from "react-truncate";
import Layout from "../components/Layout";
import styles from "./blogTemplate.module.css";

export default function blogTemplate({ pageContext }) {
  const { blogDetails } = pageContext;
  const auth = useSelector((state: any) => state.auth);
  const localData: any = localStorage.getItem("state");
  const shouldVisible = parseInt(localData);
  let [showBlog, setShowBlog] = React.useState(0);
  return (
    <Layout>
      {showBlog === 0 ? (
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
      ) : (
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
            {showBlog === 0 ? (
              <Box>
                <Typography
                  className={styles.truncatedText}
                  variant="h1"
                  gutterBottom
                >
                  <Truncate lines={8} ellipsis="&hellip;">
                    {renderRichText(blogDetails.blog)}
                  </Truncate>
                </Typography>
                <Button className={styles.btn} variant="contained">
                  <Link to="/login">Sign In To Read Full Content</Link>
                </Button>
              </Box>
            ) : (
              <Typography className={styles.body} variant="body1" gutterBottom>
                {renderRichText(blogDetails.blog)}
              </Typography>
            )}
          </Box>
        </Container>
      )}
    </Layout>
  );
}
