import React from "react";
import { Carousel } from "../carousel/Carousel";
import CategoryCard from "../category-card/CategoryCard";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import jeans from "../../assets/category/jeans.webp";
import tshirt from "../../assets/category/t-shirt.webp";
import casualShoes from "../../assets/category/casual-shoes.webp";
import flipFlops from "../../assets/category/flip-flops.webp";
import shirts from "../../assets/category/shirts.webp";
import sportsShoes from "../../assets/category/sports-shoes.webp";
import { FormattedMessage } from "react-intl";

const HomePage = () => {
  const categoryContainerStyle = {
    width: "80%",
    "margin-left": "10%"
  };

  return (
    <>
      <Carousel></Carousel>
      <Typography align="center" gutterBottom variant="h4" component="h6">
        <FormattedMessage id="category-heading" />
      </Typography>
      <Grid container justify="center" style={categoryContainerStyle}>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={jeans} category="jeans"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={tshirt} category="t-shirts"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={shirts} category="shirts"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard
            src={casualShoes}
            category="casual-shoes"
          ></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={flipFlops} category="flip-flops"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={sportsShoes} category="sports-shoes"></CategoryCard>
        </Grid>
      </Grid>
      <br></br>
    </>
  );
};

export default HomePage;
