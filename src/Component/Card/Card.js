import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Avatar,
} from "@mui/material";
// import TextBarRecipe from "../TextBar/TextBarRecipe";
import AccessTime from "@mui/icons-material/AccessTime";
import PermIdentity from "@mui/icons-material/PermIdentity";
import deliver from "../../Asset/carbon_delivery.svg";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import avatarPic from "../../Asset/Ellipse 12.svg";
import "./Card.css";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getRecipe } from "../../store/actions/recipe";

function CardComp({data}) {
  // console.log("data", data);

  // const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='cardAttend'>
        {/* <Link to="/event/1" style={{ textDecoration: 'none' }}> */}
        <Card className="card-one"
          sx={{
            borderRadius: '16px',
            padding: '0px 12px 12px 12px',
            margin: '0px 24px 24px 0px',
          }}
        >
          <CardActionArea>
            <CardMedia
              sx={{
                height: "193px",
                width: "350px",
                position: "relative",
                right: "20px",
              }}
              component='img'
              image={data.image}
              alt='makan'
            />
            <CardContent sx={{ padding: "14px 0px 0px 0px" }}>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}>
                {data.title}
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#B6340B",
                }}>
                {data.price}
              </Typography>
              <div className='content-card'>
                <div className='left-content'>
                  <div className='top-left-content'>
                    <AccessTime sx={{ fontSize: 15, marginRight: "5px" }} />
                    <Typography
                      component='div'
                      sx={{
                        fontFamily: "Nunito",
                        fontWeight: "normal",
                        fontSize: "12px",
                      }}>
                      {`${data.duration} mins`}
                    </Typography>
                  </div>
                  <div className='bottom-left-content'>
                    <PermIdentity sx={{ fontSize: 18, marginRight: "2px" }} />
                    <Typography
                      component='div'
                      sx={{
                        fontFamily: "Nunito",
                        fontWeight: "normal",
                        fontSize: "12px",
                      }}>
                      {`${data.serving} servings`}
                    </Typography>
                  </div>
                </div>
                <div className='right-content'>
                  <div className='top-right-content'>
                    {data.stock > 0 ?
                      <>
                        <Typography
                          component='div'
                          sx={{
                            fontFamily: "Nunito",
                            fontWeight: "bold",
                            fontSize: "12px",
                            color: "#219653",
                            marginRight: "6px",
                            marginLeft: "9px",
                          }}>
                          In Stock
                        </Typography>
                        <img src={deliver} alt='mobil' />
                      </>
                      :
                      <>
                        <Typography
                          component='div'
                          sx={{
                            fontFamily: "Nunito",
                            fontWeight: "bold",
                            fontSize: "12px",
                            color: "red",
                            marginRight: "6px",
                            marginLeft: "9px",
                          }}>
                          Out of Stock
                        </Typography>
                        {/* <img src={deliver} alt='mobil' /> */}
                      </>
                    }                   
                  </div>
                  <div className='bottom-right-content'>
                    <LocationOnOutlined
                      sx={{ fontSize: 18, marginRight: "2px" }}
                    />
                    <Typography
                      component='div'
                      sx={{
                        fontFamily: "Nunito",
                        fontWeight: "normal",
                        fontSize: "12px",
                      }}>
                      {data?.location?.name}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className='avatar-content'>
                <Avatar
                  alt='Remy Sharp'
                  src={avatarPic}
                  sx={{ width: 24, height: 24 }}
                />
                <Typography
                  component='div'
                  sx={{
                    fontFamily: "Nunito",
                    fontWeight: "normal",
                    fontSize: "12px",
                    padding: "5px 0 5px 0",
                    marginLeft: "9px",
                  }}>
                  {data.user.userName}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default CardComp;
