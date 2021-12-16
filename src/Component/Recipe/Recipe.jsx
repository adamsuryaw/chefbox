import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import TextBarRecipe from "../TextBar/TextBarRecipe";
import montes from "../../Asset/Frame 3.svg";
import CardComp from "../Card/Card";
import data from "../Data/data";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getRecipe } from "../../store/actions/recipe";
import styles from './Recipe.module.scss'

function Recipe() {
  const {list} = useSelector((state) => state.recipe.listRecipe);
  console.log("list", list)
  const [loc, setLoc] = useState()


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipe());
  }, []);

  return (
    <div className='recipe-page'>
      <div className='recipe-section'>
        <div className='location-section'>
          <h5>Location</h5>
          {/* <h6>Based on your profile</h6>
          <FormControlLabel
            value='end'
            control={<Checkbox />}
            label='Surabaya'
            labelPlacement='end'
            sx={{
              color: "black",
            }}
          /> */}
          <select
            name="loc"
            value={loc}
            // onChange={}
            // onBlur={}
          >
            <option value="" label="Select a Location" />
            <option value="1" label="Jakarta" />
            <option value="2" label="Bogor" />
            <option value="3" label="Depok" />
            <option value="4" label="Tangerang" />
            <option value="5" label="Bekasi" />
          </select>
          <TextBarRecipe
            name='location'
            select='true'
            type='text'
            placeholder='Search other location'
          />
        </div>
        <div className='type-section'>
          <h5>Type</h5>
          <select
            name="loc"
            value={loc}
            // onChange={}
            // onBlur={}
          >
            <option value="" label="Select your Type" />
            <option value="1" label="Food" />
            <option value="2" label="Beverage" />
          </select>
          <TextBarRecipe
            name='type'
            select='true'
            type='text'
            placeholder='Choose your type'
          />
        </div>
        <div className='category-section'>
          <h5>Category</h5>
          <select
            name="loc"
            value={loc}
            // onChange={}
            // onBlur={}
          >
            <option value="" label="Select Category" />
            <option value="1" label="Meat" />
            <option value="2" label="Chicken" />
            <option value="3" label="Seafood" />
            <option value="4" label="Vegetarian" />
            <option value="5" label="Local" />
          </select>
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
          <select
            name="loc"
            value={loc}
            // onChange={}
            // onBlur={}
          >
            <option value="" label="Select Time" />
            <option value="ASC" label="Newest" />
            <option value="DESC" label="Oldest" />
          </select>
          <TextBarRecipe name='sorting' select='true' type='text' />
        </div>
        <div className={styles.CardSections}>
          {list?.map((data) => (
            <Link to={`/details/${data.id}`} className={"card-section"}>
              <CardComp key={data.id} data={data} />
            </Link>
          ))}
        </div>

        <div className='pagination-section'>
          <Pagination count={10} color='primary' />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
