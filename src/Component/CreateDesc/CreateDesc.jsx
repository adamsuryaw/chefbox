import React from "react";
import "./CreateDesc.css";
import {
  Button,
  // Box,
  // IconButton,
  InputBase,
  // Paper,
  // TextField,
  Typography,
} from "@mui/material";
// import imageLogo from "../../Asset/XMLID 306.svg";
// import data from "../Data/data";
// import TextBarCreate from "../TextBar/TextBarCreate";
import { useNavigate } from "react-router-dom";
import { postCreate } from "../../store/actions/create";
// import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { Formik } from "formik";
import UploadRecipe from "../Upload/UploadRecipe";
// import { getRecipe } from "../../store/actions/recipe";

export default function CreateDesc() {
  // const { id } = useParams();
  const stylesTitle = {
    width: "716px",
    border: "1px solid #9F9F9F",
    boxSizing: "border-box",
    borderRadius: "4px",
    padding: "12px 16px",
    fontFamily: "Nunito",
    fontWeight: "normal",
    fontSize: "14px",
  }

  const stylesSub = {
    width: "346px",
    border: "1px solid #9F9F9F",
    boxSizing: "border-box",
    borderRadius: "4px",
    padding: "12px 16px",
    fontFamily: "Nunito",
    fontWeight: "normal",
    fontSize: "14px",
  }

  const stylesDesc = {
    width: "716px",
    border: "1px solid #9F9F9F",
    boxSizing: "border-box",
    borderRadius: "4px",
    padding: "12px 16px",
    fontFamily: "Nunito",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "20px",
  }

  // const stylesSelect = {
  //   width: "716px",
  //   border: "1px solid #9F9F9F",
  //   boxSizing: "border-box",
  //   borderRadius: "4px",
  //   padding: "12px 16px",
  //   fontFamily: "Nunito",
  //   fontWeight: "normal",
  //   fontSize: "14px",
  //   lineHeight: "20px",
  // }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const {list} = useSelector((state) => state?.recipe?.listRecipe);
  // console.log(list?.recipe, "stepOne")
  // useEffect(() => {
  //   dispatch(getRecipe());
  // }, []);
  // useEffect(() => {
  //   dispatch(putCreate());
  //   dispatch(postCreate());
  // }, []);
  // const [createInputs, setCreateInput] = useState({
  //   id_category: [],
  //   id_type: [],
  //   title: "",
  //   duration: "",
  //   serving: "",
  //   image: {},
  //   description: "",
  // });

  // console.log("createInputs", "postCreate", createInputs, postCreate);

  // const changeInputs = (e) => {
  //   setCreateInput({
  //     ...createInputs,
  //     [e.target.name]: e.target.values,
  //   });
  // };

  // const submit = () => {
  //   if (createInputs.title.length > 0) {
  //     dispatch(postCreate(createInputs));
  //   }
  // };

  return (
    <div className='desc-section'>
      <div className='recipe-desc'>
        <div className='recipe-text'>
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
            <h4>Recipe Description</h4>
          </Button>
          <Button
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
            }}>
            <h4>Ingredients</h4>
          </Button>
          <Button
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
            }}>
            <h4>Directions</h4>
          </Button>
          <Button
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
            }}>
            <h4>Product Details</h4>
          </Button>
        </div>
      </div>
      <div className='input-desc'>
        <Formik
          initialValues={{
            id_category: "",
            id_type: "",
            title: "",
            duration: "",
            serving: "",
            image: "",
            description: "",
          }}
          onSubmit={(values) => {
            let formData = new FormData();
            Object.entries(values).forEach((item)=> {
              formData.append(item[0], item[1])
            })
            
            dispatch(postCreate(formData));
            // dispatch(getRecipe());
            navigate('/create/ingredient')
            // window.location.reload();
            // console.log(values)
          }}
        >
          {(formikProps) => {
            const {values, handleChange, handleBlur, handleSubmit} = formikProps
            return (
              <form onSubmit={handleSubmit}>
                <UploadRecipe name="image" value={values.image} />
                <div className='input-text'>
                  <h6>Title</h6>
                  <InputBase
                    name="title"
                    value={values.title}
                    placeholder='e.g. Healthy Berry Pancake'
                    sx={stylesTitle}
                    onChange={handleChange}
                  />
                  <div className='input-select'>
                    <div className='input-leftSelect'>
                      <h6>Type</h6>
                      <select
                          name="id_type"
                          value={values.id_type}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={stylesSub}
                        >
                          <option value="" label="Please Select..." />
                          <option value="1" label="Food" />
                          <option value="2" label="Beverage" />
                        </select>
                    </div>
                    <div className='input-rightSelect'>
                      <h6>Category</h6>
                      <select
                          name="id_category"
                          value={values.id_category}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={stylesSub}
                        >
                          <option value="" label="Please Select..." />
                          <option value="1" label="Meat" />
                          <option value="2" label="Chicken" />
                          <option value="3" label="Seafood" />
                          <option value="4" label="Vegetarian" />
                          <option value="5" label="Local" />
                        </select>
                    </div>
                  </div>
                  <div className='input-info'>
                    <div className='input-leftInfo'>
                      <h6>Cooking Time</h6>
                      <InputBase
                        name="duration"
                        value={values.duration}
                        placeholder='e.g. 30 minutes'
                        sx={stylesSub}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='input-rightInfo'>
                      <h6>Servings</h6>
                      <InputBase
                        name="serving"
                        value={values.serving}
                        placeholder='e.g. 5'
                        sx={stylesSub}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className='input-description'>
                    <h6>Description</h6>
                    <InputBase
                      sx={stylesDesc}
                      name="description"
                      value={values.description}
                      multiline
                      rows={4}
                      fullWidth
                      placeholder='e.g. This gluten-free baked oatmeal dotted with blueberries and raspberries is an easy and heathy brunch casserole. Reheat leftovers for a quick breakfast all weeklong.'
                      onChange={handleChange}
                    />
                  </div>
                  <div className='btn-next'>
                    {/* <Link to='/create/ingredient'> */}
                      <Button
                        type='submit'
                        variant='contained'
                        sx={{
                          width: "125px",
                          height: "45px",
                          background: "#F9C959",
                          boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
                          borderRadius: "24px",
                          marginTop: "57px",
                          marginLeft: "590px",
                          textTransform: "none",
                        }}>
                        <Typography
                          component='div'
                          sx={{
                            fontFamily: "Nunito",
                            fontWeight: "bold",
                            fontSize: "16px",
                            color: "#333333",
                          }}>
                          Next
                        </Typography>
                      </Button>
                    {/* </Link> */}
                  </div>
                </div>
              </form>
            )
          }}
          
        </Formik>
        
      </div>
    </div>
  );
}

// export default function CreateDesc();

// import React, { Component } from 'react';
// import './App.css';
// export class App extends Component {
//   state={
//     profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
//   }
//   imageHandler = (e) => {
//     const reader = new FileReader();
//     reader.onload = () =>{
//       if(reader.readyState === 2){
//         this.setState({profileImg: reader.result})
//       }
//     }
//     reader.readAsDataURL(e.target.files[0])
//   };
// 	render() {
//     const { profileImg} = this.state
// 		return (
// 			<div className="page">
// 				<div className="container">
// 					<h1 className="heading">Add your Image</h1>
// 					<div className="img-holder">
// 						<img src={profileImg} alt="" id="img" className="img" />
// 					</div>
// 					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
// 					<div className="label">
//           <label className="image-upload" htmlFor="input">
// 						<i className="material-icons">add_photo_alternate</i>
// 						Choose your Photo
// 					</label>
//           </div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default App;

// import React from "react";
// import styles from "./CampaignCreation.module.scss";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
// import FormatBoldIcon from "@mui/icons-material/FormatBold";
// import FormatItalicIcon from "@mui/icons-material/FormatItalic";
// import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
// import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
// import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
// import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
// import { BiLinkAlt } from "react-icons/bi";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { createCampaignAction } from "../../Store/Actions/Campaign/campaign";

// export default function CampaignCreation() {
//   const dispatch = useDispatch();
//   const [inputCampaign, setInputCampaign] = useState({
//     image: null,
//     title: "",
//     story: "",
//     goal: "",
//     deviation: "",
//     collected: "",
//     dueDate: "",
//     categoryId: "",
//     share: "",
//   });
//   console.log("inputCampaign", inputCampaign);
//   const changeInput = (e) => {
//     setInputCampaign({
//       ...inputCampaign,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const [imageCampaign, setImageCampaign] = useState();
//   const [isUpload, setIsUpload] = useState(false);
//   function ChangeImageCampaign(e) {
//     if (e.target.files && e.target.files[0]) {
//       setInputCampaign({ ...inputCampaign, image: e.target.files[0] });
//       let reader = new FileReader();

//       reader.onload = function (e) {
//         setImageCampaign(e.target.result);
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   }

//   const submitCampaign = () => {
//     dispatch(createCampaignAction(changeInput));
//   };

//   const [currency, setCurrency] = useState();
//   const [value, setValue] = useState(null);

//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   const currencies = [
//     {
//       value: "Disability",
//       label: "Disability",
//     },
//     {
//       value: "Medical",
//       label: "Medical",
//     },
//     {
//       value: "Education",
//       label: "Education",
//     },
//     {
//       value: "Religious",
//       label: "Religious",
//     },
//     {
//       value: "Humanity",
//       label: "Humanity",
//     },
//     {
//       value: "Environment",
//       label: "Environment",
//     },
//     {
//       value: "Disaster",
//       label: "Disaster",
//     },
//     {
//       value: "Sociopreneur",
//       label: "Sociopreneur",
//     },
//   ];

//   return (
//     <>
//       <div className={styles.campaignCreation}>
//         <div className={styles.containerCreation}>
//           <h1>New Campaign</h1>
//         </div>
//         <form action="" src={imageCampaign ? imageCampaign : inputCampaign.image}>

//           <div
//             className={styles.boxImage}
//           >
//             <div className={styles.boxAddImage}>
//               <div className={styles.iconAdd}>
//                 <input
//                   // style={{ visibility: "hidden" }}
//                   id="upload-campaign"
//                   accept="image/*"
//                   type="file"
//                   onChange={ChangeImageCampaign}
//                 />
//                 <label
//                   htmlFor="upload-campaign"
//                   >
//                   <button
//                   // onClick={() => {
//                   //   setIsUpload(false);
//                   //   setImageCampaign(null);
//                   // }}
//                   // htmlFor="upload-campaign"
//                   // onChange={ChangeImageCampaign}
//                   // onChange={ChangeImageCampaign}
//                   >
//                     <AddCircleOutlineIcon
//                       sx={{ fontSize: 50, color: "#9f9f9f" }}
//                     />
//                   </button>
//                 </label>
//               </div>
//               <h2>Add Header Photo</h2>
//             </div>
//           </div>
//         </form>

//         <div className={styles.formCreation}>
//           <div className={styles.textInputCreation}>
//             <TextField
//               required
//               id="standard-required"
//               label="Title"
//               placeholder="e.g. Help we get clean water"
//               variant="standard"
//               sx={{ width: "477px", height: "200px", paddingTop: "20px" }}
//             />
//             <TextField
//               required
//               id="standard-required-select-currency"
//               select
//               label="Category"
//               value={currency}
//               onChange={handleChange}
//               variant="standard"
//               sx={{ width: "477px", height: "200px", paddingTop: "20px" }}
//             >
//               {currencies.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>
//           <div className={styles.textInputCreation}>
//             <TextField
//               required
//               id="standard-required"
//               label="Goal"
//               placeholder="e.g. 20000000"
//               variant="standard"
//               sx={{ width: "477px", height: "200px", paddingTop: "20px" }}
//             />
//             <LocalizationProvider dateAdapter={AdapterDateFns}>
//               <DatePicker
//                 label="Due Date"
//                 value={value}
//                 onChange={(newValue) => {
//                   setValue(newValue);
//                 }}
//                 renderInput={(params) => (
//                   <TextField
//                     id="standard"
//                     variant="standard"
//                     placeholder="Select due date"
//                     sx={{
//                       border: "none",
//                       outline: "none",
//                       width: "477px",
//                       height: "200px",
//                       paddingTop: "20px",
//                     }}
//                     {...params}
//                   />
//                 )}
//               />
//             </LocalizationProvider>
//           </div>
//         </div>
//         <div className={styles.textareaCreation}>
//           <div className={styles.textarea}>
//             <h3>Story</h3>
//           </div>
//           <div className={styles.containerTextarea}>
//             <div className={styles.iconsTextarea}>
//               <div className={styles.icons}>
//                 <button>
//                   <FormatBoldIcon sx={{ padding: "6px 6px" }} />
//                 </button>
//               </div>
//               <div className={styles.icons}>
//                 <button>
//                   <FormatItalicIcon sx={{ padding: "6px 6px" }} />
//                 </button>
//               </div>
//               <div className={styles.icons}>
//                 <button>
//                   <FormatUnderlinedIcon sx={{ padding: "6px 6px" }} />
//                 </button>
//               </div>
//               <div className={styles.icons}>
//                 <button>
//                   <FormatListBulletedIcon sx={{ padding: "6px 6px" }} />
//                 </button>
//               </div>
//               <div className={styles.icons}>
//                 <button>
//                   <FormatIndentDecreaseIcon sx={{ padding: "6px 6px" }} />
//                 </button>
//               </div>
//               <div className={styles.icons}>
//                 <button>
//                   <FormatIndentIncreaseIcon sx={{ padding: "6px 6px" }} />
//                 </button>
//               </div>
//               <div className={styles.icons}>
//                 <button>
//                   <InsertPhotoIcon sx={{ padding: "6px 6px" }} />
//                 </button>
//               </div>
//               <div className={styles.icons}>
//                 <button>
//                   <BiLinkAlt style={{ fontSize: "20px", padding: "8px 8px" }} />
//                 </button>
//               </div>
//             </div>
//             <textarea
//               name=""
//               id=""
//               cols="30"
//               rows="10"
//               placeholder="Tell your story..."
//             ></textarea>
//           </div>
//         </div>
//       </div>
//       <div className={styles.campaignButton}>
//         <button className={styles.button}>CREATE CAMPAIGN</button>
//       </div>
//     </>
//   );
// }
