import React from "react";
import "./category-card.css";
import { FormattedMessage } from "react-intl";
const Card = (params) => {
  return(
      <div className="card">
        <img src={params.src} alt={params.category}/>
        <div className="overlay"> 
          <FormattedMessage id={params.category} />
        </div>
      </div>
  )
    
}

const CategoryCard = () => {

  return (
    <div className="card-list">
      <Card src='./category/Casual-Shoe.webp' category='casual-shoes'></Card>
      <Card src='./category/Flipflop.webp' category='flip-flops'></Card>
      <Card src='./category/jeans.jpg' category='jeans'></Card>
      <Card src='./category/Shirts.webp' category='shirts'></Card>
      <Card src='./category/Shorts.webp' category='trousers'></Card>
      <Card src='./category/Trackpants.webp' category='track-pants'></Card>
      <Card src='./category/T-Shirts.webp' category='t-shirts'></Card>
      <Card src='./category/Sports-Shoe.webp' category='sports-shoes'></Card>
      <Card src='./category/Kurta-_-Kurta_sets.webp' category='kurta'></Card>
      <Card src='./category/Sarees.webp' category='sarees'></Card>      
    </div>
  );
};

export default CategoryCard;
