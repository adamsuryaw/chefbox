import React from "react";
import "./DetailRecipe.css";
// import avatarPic from "../../Asset/Ellipse 12.svg";
// import avatarPic2 from "../../Asset/Ellipse 11.svg";
// import bigPict from "../../Asset/Rectangle 65.svg";
import {
  Rating,
  // Divider,
  // Card,
  // CardActions,
  // CardContent,
  // CardMedia,
  Button,
  Typography,
  // CardActionArea,
  Avatar,
  InputBase
} from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import PermIdentity from "@mui/icons-material/PermIdentity";
import Review from "../Review/Review";
import deliver from "../../Asset/carbon_delivery.svg";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
// import data from "../Data/data";
// import Cart from "../Cart/Cart";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import { styled } from "@mui/system";
import { getRecipeDetails } from "../../store/actions/recipe";
import { getReview } from "../../store/actions/review";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../../store/actions/cart";
// import { Link, useNavigate } from "react-router-dom";
import { postReview } from "../../store/actions/review";

// const styaleButton = {
//   width: '142px',
//   height: '36px',
//   background: '#f9c959',
//   color: '#000',
//   border: '1px solid #f9c959',
//   boxShadow: '0px 4px 10px rgba(33, 68, 87, 0.2)',
//   borderRadius: '24px',
//   fontWeight: 'bold',
//   "&:hover": {
//     cursor: 'pointer',
//     backgroundColor: '#fff',
//     color: '#000',
//   }
// }

// const Backdrop = styled("div")`
//     z-index: -1;
//     position: fixed;
//     right: 0;
//     bottom: 0;
//     top: 0;
//     left: 0;
//     background-color: rgba(0, 0, 0, 0.5);
//     -webkit-tap-highlight-color: transparent;
//   `;

function DetailRecipe() {
  const [count, setCount] = React.useState(0)
  const [comment, setComment] = React.useState("");
  const [value, setValue] = React.useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeDetails(id));
    dispatch(getReview(id))
    // dispatch(addToCart(id))
  }, [dispatch, id]);

  // const handleCart = (count) => {
  //   dispatch(addToCart(count))
  // }
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = (recipe) => {
  //   setOpen(true);
  // };
  // const handleClose = () => setOpen(false);
  
  const {details} = useSelector((state) => state.recipe.listDetails);
  // console.log("details", details.averageRatings);
  const review = useSelector((state) => state.review.userReview);
  // console.log("review", review);
  // const shopCart = useSelector((state) => state.addCart.cartUser);
  // console.log("shop", shopCart);
  // const [cartItems, setCartItems] = React.useState([]);
  const handleSubmit = () => {
    // console.log(value, "value")
    dispatch(postReview(details?.data?.id, {comment, value}));
    // window.location.reload();
    // console.log(comment)
  }
  // let harga = details?.price
  // const plusCount = (harga, count) => {
  //   const plus = harga + count
  //   return plus
  // }
  return (
    <div className='detail-page'>
      <div className='menu-section'>
        <div className='food-section'>
          <h1>{details?.data?.title}</h1>
          <h3>
            {details?.data?.description}
          </h3>
          <div className='food-mid-section'>
            <div className='avatar-section'>
              <Avatar
                alt='Remy Sharp'
                src={details?.data?.user?.image}
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
                  {details?.data?.user?.userName}
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
              value={parseInt(details?.averageRatings)}
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
              {`${details?.peopleRatings} People`}
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
                  {`${details?.data?.duration} mins`}
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
                  {`${details?.data?.serving} servings`}
                </Typography>
              </div>
            </div>
          </div>
          <div className='picture-section'>
            <img src={details?.data?.image} alt='' />
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
            {details?.data?.ingredient == null ?
            <ul>
              <li>250 gr rolled oats</li>
              <li>125 ml milk</li>
              <li>3 eggs</li>
              <li>2 tablespoons melted butter or olive oil</li>
              <li>50 ml honey</li>
              <li>100 gr blueberries, divided</li>
              <li>100 gr raspberries, divided</li>
            </ul>
            :
            details?.data?.ingredient
            }
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
              {details?.data?.direction}
              </li>
            </ol>
            
          </div>
        </div>
        <div className='review-section'>
          <h1>Review</h1>
          <div className='review-per-section'>
            {review?.details?.length > 0 && review?.details?.map((details) => (
              <Review key={details.id} details={details} />
            ))}

            <InputBase
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Comment here...'
              multiline
              rows={4}
              sx={{
                width: "716px",
                border: "1px solid #9F9F9F",
                boxSizing: "border-box",
                borderRadius: "4px",
                padding: "12px 16px",
                fontFamily: "Nunito",
                fontWeight: "normal",
                fontSize: "14px",
                marginRight: "30px",
              }}
            />
            <Rating
              name='simple-controlled'
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{ width: "10rem" }}
            />
            {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
              BackdropComponent={Backdrop}>
              <Box>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  <div>
                    <div>
                      <Box
                        sx={{
                          "& > legend": { mt: 0 },
                          transform: "translateX(10px)",
                        }}>
                        <Typography component='legend'></Typography>
                        <Rating
                          name='simple-controlled'
                          value={secondValue}
                          onChange={(event, newValue) => {
                            setSecondValue(newValue);
                          }}
                          sx={{ width: "10rem" }}
                        />
                      </Box>
                      <button type="submit" onClick={"handleRating"} style={styaleButton}>
                        Submit
                      </button>
                    </div>
                  </div>
                </Typography>
                <Typography
                  id='modal-modal-description'
                  sx={{ mt: 2 }}></Typography>
              </Box>
            </Modal> */}
            
            <Button
            type="submit"
            onClick={handleSubmit}
            variant='contained'
            sx={{
              minWidth: "150px",
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
              Submit
            </Typography>
          </Button>
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
              {details?.data?.location?.name}
            </Typography>
          </div>
        </div>
        {/* <Cart cartItems={cartItems} /> */}
        <div className='stock-field'>
          <div className='min-stock'>
            {count === 0 ? 
              <Button
              disabled
                sx={{
                  minWidth: "32px",
                  color: "#000000",
                  padding: "3px 0px",
                  borderRadius: "16px",
                }}
                onClick={() => setCount(count - 1)}
                >
                <Typography
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  -
                </Typography>
              </Button>
              :
              <Button
                sx={{
                  minWidth: "32px",
                  color: "#000000",
                  padding: "3px 0px",
                  borderRadius: "16px",
                }}
                onClick={() => setCount(count - 1)}
                >
                <Typography
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  -
                </Typography>
              </Button>
            }
            
          </div>
          <div className='text-stock'>
            <div className="counter">
              <h2>{count}</h2>
            </div>
            <h6>
              Stock <span>{details?.data?.stock}</span>
            </h6>
          </div>
          <div className='plus-stock'>
            {count >= details?.data?.stock ? 
              <Button
                disabled
                sx={{
                  minWidth: "32px",
                  color: "#000000",
                  padding: "3px 0px",
                  borderRadius: "16px",
                }}
                onClick={() => setCount(count + 1)}
                >
                <Typography
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  +
                </Typography>
              </Button>
              :
              <Button
                sx={{
                  minWidth: "32px",
                  color: "#000000",
                  padding: "3px 0px",
                  borderRadius: "16px",
                }}
                onClick={() => setCount(count + 1)}
                >
                <Typography
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}>
                  +
                </Typography>
              </Button>
            }
            
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
            {`Rp. ${details?.data?.price}`}
          </Typography>
        </div>
        <div className='btn-field'>
          {details?.data?.stock <= 0 ?
            <Button
              disabled
              variant='contained'
              onClick={() => {
                dispatch(addToCart(id, count));
                // navigate('/register/signup')
                console.log(id, count, "count")
              }}
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
            :
            <Button
              variant='contained'
              onClick={() => {
                dispatch(addToCart(id, count));
                // navigate('/register/signup')
                console.log(id, count, "count")
              }}
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
          }
          
        </div>
      </div>
    </div>
  );
}

export default DetailRecipe;
