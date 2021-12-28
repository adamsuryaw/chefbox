import styles from "./Seller.module.scss";
import sellerIcon from "../../Asset/sellerIcon/Dashboard/store.svg";
import buttonShipping from "../../Asset/seller.svg";
import buttonCompleted from "../../Asset/completed.svg";
import MenuImage from "../../Asset/Frame 3.svg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeller } from "../../store/actions/order";

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Seller() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [firstValue, setFirstValue] = React.useState(0);
  // const [secondValue, setSecondValue] = React.useState(0);
  // const [thirdValue, setThirdValue] = React.useState(0);
  const orderan = useSelector((state) => state?.order?.orderDetails);
  // console.log("orderan", orderan)
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getRecipe());
    // dispatch(viewCart());
    // dispatch(getOrder());
    dispatch(getSeller());
  }, [dispatch]);

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
          <h2>Seller Dashboard</h2>
          <div className={styles.menuButton}>
            <div className={styles.listButton}>
              <button className={styles.buttonAll}>All</button>
              <div className={styles.list}>
                {/* <button className={styles.buttonshipping}>
                  <div className={styles.iconbutton}>
                    <img src={buttonShipping} alt='' />
                    <span>Prepare Shipping</span>
                  </div>
                </button> */}
                <button className={styles.buttoncompleted}>
                  <div className={styles.iconbutton}>
                    <img src={buttonCompleted} alt='' />
                    <span>Completed</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {orderan?.orderList?.data?.map((data) => 
            <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt='' />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title3}>
                    <h4>{`Order ${data.id_order}`}</h4>
                  </div>
                  <div className={styles.button2}>
                  </div>
                  <div className={styles.button1}>
                    <p>
                      Completed
                      <img src={buttonCompleted} alt='' />
                    </p>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>{`${data.orders}`}</h4>
                  <p>{`${data.quantity} package`}</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Button 
                    onClick={handleOpen}
                    sx={{
                      fontFamily: "Nunito",
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "#828282",
                      textTransform: "none",
                      padding: 0,
                      marginBottom: "17px",
                      "&:hover": {
                        backgroundColor: "#ffffff",
                        boxShadow: "none",
                        color: "#000000",
                      },
                    }}
                    >
                    See Ingredient Details
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styleModal}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Info
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <List>
                          <ListItem disablePadding>
                            <ListItemText primary={`Buyer: ${data.buyer}`} />
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemText primary={`Address: ${data.delivery_address}`} />
                          </ListItem>
                          <ListItem disablePadding>
                            <ListItemText primary={`Phone Number: ${data.delivery_phonenumber}`} />
                          </ListItem>
                        </List>
                        
                      </Typography>
                    </Box>
                  </Modal>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div>
          )}
          
          {/* <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt='' />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title3}>
                    <h4>Baked Oatmeal with Mixed Berries</h4>
                  </div>
                  <div className={styles.button2}>
                    <p>
                      <img src={buttonShipping} alt='' />
                      Prepare Shipping
                    </p>
                  </div>
                  <div className={styles.button}>
                  <Link to="/seller/payment"><button>Verify Payment</button></Link>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>Rp.135.000</h4>
                  <p>1 package</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Link to='/details'>see ingredient details</Link>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt='' />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title3}>
                    <h4>Baked Oatmeal with Mixed Berries</h4>
                  </div>
                  <div className={styles.button2}>
                    <p>
                      <img src={buttonShipping} alt='' />
                      Prepare Shipping
                    </p>
                  </div>
                  <div style={{ marginLeft: "9rem" }} className={styles.button}>
                  <Link to="/seller/payment"><button >Verify Payment</button></Link>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>Rp.135.000</h4>
                  <p>1 package</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Link to='/details'>see ingredient details</Link>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt='' />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title2}>
                    <h4>Baked Oatmeal with Mixed Berries</h4>
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
                  </div>
                  <div className={styles.button1}>
                    <p>
                      Completed
                      <img src={buttonCompleted} alt='' />
                    </p>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>Rp.135.000</h4>
                  <p>1 package</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Link to='/details'>see ingredient details</Link>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt='' />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title2}>
                    <h4>Baked Oatmeal with Mixed Berries</h4>
                    <Box
                      className={styles.rating}
                      sx={{
                        "& > legend": { mt: 0 },
                        transform: "translateX(10px)",
                      }}>
                      <Typography component='legend'></Typography>
                      <Rating
                        name='simple-controlled'
                        value={firstValue}
                        onChange={(event, newValue) => {
                          setFirstValue(newValue);
                        }}
                      />
                    </Box>
                  </div>
                  <div className={styles.button1}>
                    <p>
                      Completed
                      <img src={buttonCompleted} alt='' />
                    </p>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>Rp.135.000</h4>
                  <p>1 package</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Link to='/details'>see ingredient details</Link>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className={styles.menuCollections}>
            <div className={styles.menuContainer}>
              <div className={styles.menuImage}>
                <img src={MenuImage} alt='' />
              </div>
              <div className={styles.menuDescriptions}>
                <div className={styles.menuCollectionButton}>
                  <div className={styles.title2}>
                    <h4>Baked Oatmeal with Mixed Berries</h4>
                    <Box
                      className={styles.rating}
                      sx={{
                        "& > legend": { mt: 0 },
                        transform: "translateX(10px)",
                      }}>
                      <Typography component='legend'></Typography>
                      <Rating
                        name='simple-controlled'
                        value={thirdValue}
                        onChange={(event, newValue) => {
                          setThirdValue(newValue);
                        }}
                      />
                    </Box>
                  </div>
                  <div className={styles.button1}>
                    <p>
                      Completed
                      <img src={buttonCompleted} alt='' />
                    </p>
                  </div>
                </div>
                <div className={styles.billDescription}>
                  <h4>Rp.135.000</h4>
                  <p>1 package</p>
                </div>
                <div className={styles.descriptionDates}>
                  <Link to='/details'>see ingredient details</Link>
                  <p>26 Jul 2021</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
