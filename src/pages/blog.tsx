import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import styles from "./blog.module.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardActions,
  Grid,
} from "@material-ui/core";
import { blogShow } from "../features/authSlice";
import { increment } from "../features/stateSlice";

export default function Blog({ data }) {
  const dispatch = useAppDispatch();
  const { allContentfulGatsby } = data;
  const auth = useSelector((state: any) => state.auth);
  const blogState = useSelector((state: any) => state.blogState);
  const handleBlogVisiblity = () => {
    let number = 0;
    if (blogState.number === 0) {
      dispatch(blogShow(0));
      dispatch(increment(1));
    } else {
      dispatch(blogShow(1));
    }
  };
  return (
    <Layout>
      <Grid container spacing={3} className={styles.container}>
        {allContentfulGatsby.nodes.map((blogData: any) => {
          return (
            <Grid item xs={12} sm={12} md={4} key={blogData.slug}>
              <Card variant="outlined">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={blogData.featuredImage.description}
                    height="140"
                    image={blogData.featuredImage.file.url}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      className={styles.mainFont}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {blogData.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={handleBlogVisiblity}
                    className={styles.btn}
                    size="small"
                    color="primary"
                  >
                    <Link to={`/blog/${blogData.slug}`}>Read More</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query blogs {
    allContentfulGatsby {
      nodes {
        slug
        featuredImage {
          description
          file {
            url
          }
          fluid {
            src
          }
        }
        title
        blog {
          raw
        }
      }
    }
  }
`;
