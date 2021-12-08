import React from "react";
import SVG from "../../Asset/sellerIcon/Dashboard/store.svg";
import { Link } from "react-router-dom";
import styles from "./MyRecipe.module.scss";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Pagination } from "@mui/material";
import data from "./data";
import CardComp from "../../Component/Card/Card";
import "./MyRecipe.css";
import { Button } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MyRecipe() {
  const [expanded, setExpanded] = React.useState(false);
  const { product } = data;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.Body}>
      <div className={styles.SecondBody}>
        <div className={styles.ThirdBody}>
          <div className={styles.LeftSidebar}>
            <div className={styles.MenuBar}>
              <div className={styles.FirstButton}>
                <Link to='/dashboard'>
                  <Button
                    sx={{
                      fontFamily: "Nunito",
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#000000",
                      textTransform: "none",
                      padding: 0,
                      marginBottom: "17px",
                      "&:hover": {
                        backgroundColor: "#ffffff",
                        boxShadow: "none",
                      },
                    }}>
                    <h4>My Recipe</h4>
                  </Button>
                </Link>
              </div>
              <div className={styles.SecondButton}>
                <Link to='/order'>
                  <Button
                    sx={{
                      fontFamily: "Nunito",
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#000000",
                      textTransform: "none",
                      padding: 0,
                      marginBottom: "17px",
                      "&:hover": {
                        backgroundColor: "#ffffff",
                        boxShadow: "none",
                      },
                    }}>
                    <h4>My Order</h4>
                  </Button>
                </Link>
              </div>
            </div>
            <div className={styles.SellerDashboard}>
              <img src={SVG} alt='' />
              <ul>
                <li style={{ color: "#587b67" }}>Seller Dashboard</li>
              </ul>
            </div>
          </div>
          <div className={styles.MainContainer}>
            <h1 style={{ margin: "2rem 0 0 2rem" }}>My Recipe</h1>
            <div
              // sytle={{ display: "flex", position: "relative" }}
              className='card-section'>
              {product?.map((product) => (
                <CardComp key={product.id} product={product} />
              ))}
            </div>
            <div className={styles.PaginationSection}>
              <Pagination count={10} color='primary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}