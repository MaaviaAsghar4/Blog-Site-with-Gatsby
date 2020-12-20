import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import styles from "./blog.module.css";
import GatsbyBannger from "../images/gatsbyBanner.png";
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

export default function Blog() {
  return (
    <Layout>
      <Grid container spacing={3} className={styles.container}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={GatsbyBannger}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  className={styles.mainFont}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={styles.btn} size="small" color="primary">
                <Link to="/blog/blogpost">Read More</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={GatsbyBannger}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  className={styles.mainFont}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={styles.btn} size="small" color="primary">
                <Link to="/blog/blogpost">Read More</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={GatsbyBannger}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  className={styles.mainFont}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={styles.btn} size="small" color="primary">
                <Link to="/blog/blogpost">Read More</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={GatsbyBannger}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  className={styles.mainFont}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={styles.btn} size="small" color="primary">
                <Link to="/blog/blogpost">Read More</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
