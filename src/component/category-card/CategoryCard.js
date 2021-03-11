import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

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

export default function CategoryCard(props) {
  const classes = useStyles();
  return (
    <Link exact='true' to={`/category/${props.category}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.src} />
          <Typography
            className={classes.typography}
            align="center"
            gutterBottom
            variant="h4"
            component="h4"
          >
            <FormattedMessage id={props.category} />
          </Typography>
        </CardActionArea>
      </Card>
    </Link>
  );
}
