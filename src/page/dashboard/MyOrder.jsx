import styles from "./MyOrder.module.scss";
import sellerIcon from "../../Asset/sellerIcon/Dashboard/store.svg";
import buttonShipping from "../../Asset/seller.svg";
import buttonCompleted from "../../Asset/completed.svg";
import MenuImage from "../../Asset/Frame 3.svg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../store/actions/recipe";
import Modal from "@mui/material/Modal";
import { Pagination } from "@mui/material";
import { styled } from "@mui/system";

export default function MyOrder() {
  const [name, setName] = React.useState("");

  const [firstValue, setFirstValue] = React.useState(0);
  const [secondValue, setSecondValue] = React.useState(0);
  const [thirdValue, setThirdValue] = React.useState(0);

  const { list } = useSelector((state) => state.recipe.listRecipe);
  console.log("list", list);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipe());
  }, []);

  const [open, setOpen] = React.useState(true);
  const handleOpen = (recipe) => {
    setOpen(true);
    setName(recipe);
  };
  const handleClose = () => setOpen(false);

  const style = {
    display: "flex",
    justifyContent: "space-around",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fffaef",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

  return (
    <div className={styles.sellerContainer}>
      <div className={styles.seller}>
        <div className={styles.menuBarSeller}>
          <div className={styles.menuBar}>
            <Link to='/dashboard'>
              <Button
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#828282",
                  textTransform: "none",
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                    color: "#000000",
                  },
                }}>
                <h4>My Recipe</h4>
              </Button>
            </Link>
            <Link to='/dashboard/my-order'>
              <Button
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#828282",
                  textTransform: "none",
                  padding: 0,
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                    color: "#000000",
                  },
                }}>
                <h4>My Order</h4>
              </Button>
            </Link>
          </div>
          <div className={styles.sellerBar}>
            <div className={styles.iconStore}>
              <img src={sellerIcon} alt='' />
            </div>
            <Link to='/seller'>
              <ul>
                <li style={{ color: "#587b67" }}>Seller Dashboard</li>
              </ul>
            </Link>
          </div>
        </div>
        <div className={styles.menuSeller}>
          <h2>My Order</h2>
          <div className={styles.menuCollections}>
            {list?.map((data) => (
              <div className={styles.menuContainer}>
                <div className={styles.menuImage}>
                  <img src={data.image} alt='' />
                </div>
                <div className={styles.menuDescriptions}>
                  <div className={styles.title3}>
                    <h4>{data.title}</h4>
                  </div>
                  <div className={styles.billDescription}>
                    <div className={styles.priceAndStock}>
                      <h4>{data.price}</h4>
                      <p>{data.stock}</p>
                    </div>
                    <Link to='/details/1'>see ingredient details</Link>
                  </div>
                  <div
                    className={styles.leftSideDescriptions}
                    style={{
                      position: "absolute",
                      marginTop: "-5rem",
                      right: "7.5rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}>
                    <div className={styles.menuCollectionButton}>
                      <div className={styles.button2}></div>
                      <div className={styles.button}>
                        <button onClick={() => handleOpen(data.title)} open={open}>
                          Review
                        </button>
                      </div>
                    </div>
                    <div
                      className={styles.descriptionDates}
                      style={{ marginTop: "2rem", color: "#BDBDBD" }}>
                      <p>26 Jul 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
              BackdropComponent={Backdrop}>
              <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  <div className={styles.ProductContent}>
                    <h4>{name}</h4>
                    <div className={styles.ProductList}>
                      <Box
                        className={styles.rating}
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
                        />
                      </Box>
                      <ul>
                        <li style={{ listStyleType: "disc" }}>
                          1 kg package egg noodles
                        </li>
                        <li style={{ listStyleType: "disc" }}>50 gr butter</li>
                        <li style={{ listStyleType: "disc" }}>
                          50 gr minced parsley
                        </li>
                        <li style={{ listStyleType: "disc" }}>50 gr salt</li>
                        <li style={{ listStyleType: "disc" }}>
                          10 gr black pepper
                        </li>
                        <li style={{ listStyleType: "disc" }}>
                          100 ml olive oil
                        </li>
                      </ul>
                    </div>
                  </div>
                </Typography>
                <Typography
                  id='modal-modal-description'
                  sx={{ mt: 2 }}></Typography>
              </Box>
            </Modal>
          </div>
          <div className={styles.PaginationSection}>
            <Pagination count={10} color='primary' />
          </div>
        </div>
      </div>
    </div>
  );
}
