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

export default function Payment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    navigate(`/${detailOrder?.orderList?.invoice_url}`)
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
                  <h4>{"details?.data[0]?.total + details?.data[1]?.total"}</h4>
                  <h4>Bank Central Asia</h4>
                  <h4>PT. Chef Box Indonesia</h4>
                  <h4>0123456789</h4>
                </div>
              </div>
            </div>
          </div>
          {/* <Formik
            initialValues={{
              image: "",
            }}
            onSubmit={(values) => {
              let formData = new FormData();
              Object.entries(values).forEach((item)=> {
                formData.append(item[0], item[1])
              })
              dispatch(postOrderPay(detailOrder?.orderList?.formData));
              // navigate('/create/ingredient')
              // window.location.reload();
              console.log(values, "values")
            }}
          >
            {(formikProps) => {
            const {values, handleChange, handleBlur, handleSubmit} = formikProps
            return (
              <form onSubmit={handleSubmit}>
                <Stack
                  className={styles.buttons}
                  spacing={5}
                  direction='row'
                  sx={{ marginTop: "3rem" }}>
                  <UploadPay name="image" value={values.image} />                  
                </Stack>
                {values.image ?
                  <button type="submit">Upload</button>
                  :
                  null
                }
              </form>
            )}}
          </Formik> */}
          <div className={styles.LowerSection}>
            <Link to='/order'>
              <h4>Back to order details</h4>
            </Link>

            <Stack className={styles.buttons} spacing={5} direction='row'>
              <Button
                // type="submit"
                onClick={handleSubmit}
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
          </div>
        </div>
      </div>
    </div>
  );
}
