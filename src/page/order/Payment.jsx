import React from "react";
import styles from "./Payment.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { putCreate, postCreate } from "../../store/actions/create";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { viewCart } from "../../store/actions/cart";
import { getOrder, postOrderPay } from "../../store/actions/order";
import UploadPay from "../../Component/Upload/UploadPay";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
// import Timer from "./Timer"

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
  p: 4
};

const styaleButton = {
  width: '142px',
  height: '36px',
  background: '#f9c959',
  color: '#000',
  border: '1px solid #f9c959',
  boxShadow: '0px 4px 10px rgba(33, 68, 87, 0.2)',
  borderRadius: '24px',
  fontWeight: 'bold',
  "&:hover": {
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: '#000',
  }
}

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

export default function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(viewCart());
    dispatch(getOrder(id));
  }, []);
  const {details} = useSelector((state) => state?.addCart?.cartUser);
  console.log("details", details);

  const detailOrder = useSelector((state) => state?.order?.orderDetails);
  console.log("detailOrder", detailOrder);
  const handleSubmit = () => {
    dispatch(postOrderPay())
    // navigate(`/${detailOrder?.orderList?.invoice_url}`)
    // console.log(e)
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    dispatch(postOrderPay())
  };
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    // dispatch(postOrderPay())
    navigate(`${detailOrder?.orderList?.invoice_url}`)
    // console.log(e)
  }
  return (
    <div className={styles.Body}>
      <div className={styles.SecondBody}>
        <div className={styles.ThirdBody}>
          <div
            style={{
              borderBottom: "3px groove",
              margin: "0rem 0rem 1.5rem 0rem",
              padding: "1rem 0rem 0.7rem 2rem",
            }}
            className={styles.Container}>
            <h1>Confirm Payment</h1>
          </div>
          <div className={styles.BankContainer}>
            <div className={styles.BankDetails}>
              <h2 style={{ color: "#333333", marginTop: "2rem" }}>
                Bank Transfer
              </h2>
              <p style={{ margin: "1rem 0 1.5rem 0" }}> Please complete your payment</p>
              <div className={styles.OrderLists}>
                <div className={styles.FirstOrder}>
                  
                  {/* <h4 style={{ textAlign: "left"}}>Sate Lontong</h4>
                  <h4 style={{ textAlign: "left"}}>213100</h4> */}
                </div>
                {/* <div className={styles.SecondOrder}>
                  <h4>Es Teh</h4>
                  <h4>100000</h4>
                </div> */}
              </div>

              <div className={styles.DetailedBank}>
                <div className={styles.DetailedBankContainer}>
                  {details?.data?.map((data) => (
                      <div>
                        <h4 style={{ textAlign: "left"}}>{data.title}</h4>
                      </div>
                    ))}
                  <p>Total</p>
                  <p>Bank</p>
                  <p>Account Name</p>
                  <p>Account No</p>
                </div>
                <div className={styles.DetailedBankContainerNominal}>
                  {details?.data?.map((data) => (
                      <div>
                        <h4 style={{ textAlign: "right"}}>{data.total}</h4>
                      </div>
                    ))}
                  <h4>{detailOrder?.orderList?.detailOrder?.total}</h4>
                  <h4>Bank Central Asia</h4>
                  <h4>PT. Chef Box Indonesia</h4>
                  <h4>0123456789</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.LowerSection}>
            <Link to='/order'>
              <h4>Back to order details</h4>
            </Link>
            <Stack className={styles.buttons} spacing={5} direction='row'>
              <Button
                // type="submit"
                onClick={handleOpen}
                className={styles.button}
                variant='contained'
                sx={{
                  width: "100%",
                  background: "#B6340B",
                  color: "#FFF",
                  borderRadius: "50px",
                  margin: "0 3.5rem",
                  padding: "5px 17.9  rem",
                  fontFamily: "Nunito Sans",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}>
                Confirm Payment
              </Button>
            </Stack>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
              BackdropComponent={Backdrop}>
              <Box sx={style}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  <div className={styles.ProductContent}>
                    <h4>Confirm Payment?</h4>
                    <a href={`${detailOrder?.orderList?.invoice_url}`}>
                      <button style={styaleButton}>
                        Yes
                      </button>
                    </a>
                      
                      <button type="submit" onClick={handleClose} style={styaleButton}>
                        No
                      </button>
                  </div>
                </Typography>
                <Typography
                  id='modal-modal-description'
                  sx={{ mt: 2 }}></Typography>
              </Box>
            </Modal>
            
          </div>
        </div>
      </div>
    </div>
  );
}
