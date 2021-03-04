import React from "react";
import { Carousel } from "../carousel/Carousel";
import CategoryCard from "../category-card/CategoryCard";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import jeans from "../../assets/category/jeans.png";
import tshirt from "../../assets/category/t-shirt.png";
import casualShoes from "../../assets/category/casual-shoes.png";
import flipFlops from "../../assets/category/flip-flops.png";
import shirts from "../../assets/category/shirts.png";
import sportsShoes from "../../assets/category/sports-shoes.png";

const HomePage = () => {
  return (
    <>
      <Carousel></Carousel>
      <Typography align='center' gutterBottom variant="h4" component="h6" >
      MOST IN DEMAND
          </Typography>
      <Grid container justify='center'>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={jeans} category="Top Deals on Jeans"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={tshirt} category="Explore T - shirts"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={shirts} category="Best deals on Shirts"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={casualShoes} category="Catch the best Deals"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={flipFlops} category="Everyday Classics"></CategoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <CategoryCard src={sportsShoes} category="Best of Activewear"></CategoryCard>
        </Grid>
        
      </Grid>
      <br></br>
    </>
  );
};

export default HomePage;
