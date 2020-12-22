import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import styles from "./blog.module.css";
import { useSelector } from "react-redux";
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

export default function Blog({ data }) {
  const { allContentfulGatsby } = data;
  const auth = useSelector((state: any) => state.auth);
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
                  <Button className={styles.btn} size="small" color="primary">
                    <Link
                      to={auth.isLoggedIn ? `/blog/${blogData.slug}` : `/login`}
                    >
                      Read More
                    </Link>
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
