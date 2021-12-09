import React from "react";
import "./Recipe.css";
import {
  FormControlLabel,
  Checkbox,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
  Avatar,
  Pagination,
} from "@mui/material";
import TextBarRecipe from "../TextBar/TextBarRecipe";
import montes from "../../Asset/Frame 3.svg";
import CardComp from "../Card/Card";
import data from "../Data/data";
import { Link } from "react-router-dom";

function Recipe() {
  const { product } = data;
  console.log(data);

  return (
    <div className='recipe-page'>
      <div className='recipe-section'>
        <div className='location-section'>
          <h5>Location</h5>
          <h6>Based on your profile</h6>
          <FormControlLabel
            value='end'
            control={<Checkbox />}
            label='Surabaya'
            labelPlacement='end'
            sx={{
              color: "black",
            }}
          />
          <TextBarRecipe
            name='location'
            select='true'
            type='text'
            placeholder='Search other location'
          />
        </div>
        <div className='type-section'>
          <h5>Type</h5>
          <TextBarRecipe
            name='type'
            select='true'
            type='text'
            placeholder='Choose your type'
          />
        </div>
        <div className='category-section'>
          <h5>Category</h5>
          <TextBarRecipe
            name='category'
            select='true'
            type='text'
            placeholder='Choose food category'
          />
        </div>
        <div className='price-section'>
          <h5>Price</h5>
          <div className='button-section'>
            <Button
              sx={{
                marginRight: "26px",
                width: "110px",
                border: "1px solid #E0E0E0",
                color: "black",
              }}
              variant='outlined'>
              Min
            </Button>
            <Button
              sx={{
                width: "110px",
                border: "1px solid #E0E0E0",
                color: "black",
              }}
              variant='outlined'>
              Max
            </Button>
          </div>
        </div>
      </div>
      <div className='browse-section'>
        <h1>Browse Recipe</h1>
        <p className='paragraf'>
          Using only fresh ingredients, our Halal-certified bento meals are
          thoughtfully prepared by a team of chefs; and are available in a wide
          variety of flavours, such as Local delights, Western, Malay, Indian
          and Japanese cuisines.
        </p>
        <div className='browse-bar'>
          <FormControlLabel
            value='end'
            control={<Checkbox />}
            label='Show in stock only'
            labelPlacement='end'
            sx={{
              color: "black",
              marginLeft: "1rem",
            }}
          />
          <TextBarRecipe name='sorting' select='true' type='text' />
        </div>
        <Link to='/details' className='card-section'>
          {product?.map((product) => (
            <CardComp key={product.id} product={product} />
          ))}
        </Link>
        <div className='pagination-section'>
          <Pagination count={10} color='primary' />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
