import React from "react";
import "./DetailRecipe.css";
import avatarPic from "../../Asset/Ellipse 12.svg";
import avatarPic2 from "../../Asset/Ellipse 11.svg";
import bigPict from "../../Asset/Rectangle 65.svg";
import {
  Rating,
  Divider,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
  Avatar,
} from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import PermIdentity from "@mui/icons-material/PermIdentity";
import Review from "../Review/Review";
import deliver from "../../Asset/carbon_delivery.svg";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import data from "../Data/data";
import Cart from "../Cart/Cart";
import { getRecipeDetails } from "../../store/actions/recipe";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailRecipe() {
  const [value, setValue] = React.useState(2);
  const { comment } = data;
  const details = useSelector((state) => state.recipe.listDetails);
  console.log("details", details);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeDetails(id));
  }, []);

  const [cartItems, setCartItems] = React.useState([]);

  return (
    <div className='detail-page'>
      <div className='menu-section'>
        <div className='food-section'>
          <h1>Baked Oatmeal with Mixed Berries</h1>
          <h3>
            This gluten-free baked oatmeal dotted with blueberries and
            raspberries is an easy and heathy brunch casserole. Reheat leftovers
            for a quick breakfast all weeklong.
          </h3>
          <div className='food-mid-section'>
            <div className='avatar-section'>
              <Avatar
                alt='Remy Sharp'
                src={avatarPic}
                sx={{ width: 32, height: 32 }}
              />
              <div className='avatar-info'>
                <Typography
                  component='div'
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginLeft: "10px",
                    color: "#333333",
                  }}>
                  Akachi Chua
                </Typography>
                <Typography
                  component='div'
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "normal",
                    fontSize: "12px",
                    marginLeft: "10px",
                    color: "#828282",
                  }}>
                  Published May 28, 2021
                </Typography>
              </div>
            </div>
            <Rating
              name='read-only'
              value={value}
              readOnly
              sx={{
                color: "#B6340B",
                marginLeft: "40px",
                marginRight: "13px",
                marginTop: "18px",
              }}
              size='small'
            />
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "normal",
                fontSize: "12px",
                marginTop: "19px",
              }}>
              12 Ratings
            </Typography>
            <div className='cooking-time'>
              <Typography
                component='div'
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#587B67",
                  marginTop: "10px",
                  marginLeft: "15px",
                }}>
                Cooking Time
              </Typography>
              <div className='minutes-bar'>
                <AccessTime
                  sx={{
                    fontSize: 15,
                    marginRight: "5px",
                    marginLeft: "29px",
                  }}
                />
                <Typography
                  component='div'
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "normal",
                    fontSize: "12px",
                  }}>
                  30 mins
                </Typography>
              </div>
            </div>
            <div className='service'>
              <Typography
                component='div'
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "14px",
                  color: "#587B67",
                  marginTop: "10px",
                  marginLeft: "35px",
                }}>
                Servings
              </Typography>
              <div className='service-bar'>
                <PermIdentity
                  sx={{
                    fontSize: 18,
                    marginRight: "2px",
                    marginLeft: "26px",
                  }}
                />
                <Typography
                  component='div'
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "normal",
                    fontSize: "12px",
                  }}>
                  5 servings
                </Typography>
              </div>
            </div>
          </div>
          <div className='picture-section'>
            <img src={bigPict} alt='' />
          </div>
          <div className='ingredient-section'>
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "6px",
              }}>
              Ingredients
            </Typography>
            <ul>
              <li>250 gr rolled oats</li>
              <li>125 ml milk</li>
              <li>3 eggs</li>
              <li>2 tablespoons melted butter or olive oil</li>
              <li>50 ml honey</li>
              <li>100 gr blueberries, divided</li>
              <li>100 gr raspberries, divided</li>
            </ul>
          </div>
          <div className='method-section'>
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "6px",
              }}>
              Method
            </Typography>
            <ol>
              <li>
                Preheat your oven to 375°F. Grease with butter or lined a 9x9
                baking dish with parchment.
              </li>
              <li>
                In a large mixing bowl, add oats, milk, eggs, melted butter,
                honey, yogurt, vanilla, and salt. Stir with a fork or whisk to
                combine thoroughly.
              </li>
              <li>
                Fold 3/4 cup each of blueberries and raspberries into the
                mixture. Pour mixture into prepared casserole dish. Sprinkle all
                remaining berries over top.
              </li>
              <li>
                Bake the oatmeal casserole for 45 minutes, or until the
                casserole is shiny on top and firm to the touch.
              </li>
            </ol>
          </div>
        </div>
        <div className='review-section'>
          <h1>Review</h1>
          <div className='review-per-section'>
            {comment?.map((comment) => (
              <Review key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      </div>
      <div className='stock-section'>
        <div className='top-stock'>
          <div className='stock'>
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#219653",
                marginRight: "6px",
              }}>
              In Stock
            </Typography>
            <img src={deliver} alt='mobil' />
          </div>
          <div className='location'>
            <LocationOnOutlined
              sx={{ fontSize: 20, marginRight: "3px", color: "#828282" }}
            />
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#828282",
                margin: 0,
              }}>
              Surabaya
            </Typography>
          </div>
        </div>
        <Cart cartItems={cartItems} />
        <div className='stock-field'>
          <div className='min-stock'>
            <Button
              sx={{
                minWidth: "32px",
                color: "#000000",
                padding: "3px 0px",
                borderRadius: "16px",
              }}>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}>
                -
              </Typography>
            </Button>
          </div>
          <div className='text-stock'>
            <input type='text' />
            <h6>
              Stock <span>4</span>
            </h6>
          </div>
          <div className='plus-stock'>
            <Button
              sx={{
                minWidth: "32px",
                color: "#000000",
                padding: "3px 0px",
                borderRadius: "16px",
              }}>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}>
                +
              </Typography>
            </Button>
          </div>
        </div>
        <div className='price-field'>
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontWeight: "normal",
              fontSize: "14px",
              color: "#828282",
              paddingLeft: "20px",
            }}>
            Total
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#000000",
              paddingLeft: "20px",
            }}>
            Rp. 75.000
          </Typography>
        </div>
        <div className='btn-field'>
          <Button
            variant='contained'
            sx={{
              minWidth: "259px",
              height: "45px",
              background: "#B6340B",
              boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
              borderRadius: "24px",
              marginTop: "31px",
              textTransform: "none",
            }}>
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "16px",
                color: "#F2F2F2",
              }}>
              Add to Cart
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailRecipe;
