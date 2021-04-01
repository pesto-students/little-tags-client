import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: "1%",
  },
  media: {
    height: 300,
  },
  typography: {
    position: "absolute",
    top: "0",
    right: "2%",
    color: "#ffffff",
  },
});

export default function CategoryCard({ category, src }) {
  const classes = useStyles();
  const history = useHistory();

  const openProductCategory = () => {
    history.push(`/products?category=${category}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openProductCategory}>
        <CardMedia className={classes.media} image={src} />
        <Typography
          className={classes.typography}
          align="center"
          gutterBottom
          variant="h4"
          component="h4"
        >
          <FormattedMessage id={category} />
        </Typography>
      </CardActionArea>
    </Card>
  );
}
