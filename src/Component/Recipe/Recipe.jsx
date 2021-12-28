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
import { getRecipe, getFilterRecipe, getPagination } from "../../store/actions/recipe";
import styles from './Recipe.module.scss'
import axios from 'axios'
import { BASE_URL } from "../../constants/constants";

function Recipe() {

  const selectStyle = {
    padding: '12px 16px',
    border: '1px solid #9F9F9F',
    boxSizing: 'border-box',
    borderRadius: '4px',
    width: '250px',
    marginTop: '10px'
  }

  // const {list} = useSelector((state) => state.recipe.listRecipe);
  // const {filterList} = useSelector((state) => state.recipe.listFilter);
  // console.log("list", list)
  // console.log("list filter", filterList)
  // const [cat, setCat] = useState("")
  // const [type, setType] = useState("")
  // const [gte, setGte] = useState("")
  // const [lte, setLte] = useState("")
  // const [loc, setLoc] = useState("")
  // const [showFilter, setShowFilter] = useState(false)
  // const [page, setPage] = useState(null)
  // const [showPage, setShowPage] = useState(false)
  // // const [total, setTotal] = useState(list?.totalPages ? list?.totalPages : null)
  // // console.log(total, "select")
  // console.log(page, "page")
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(getFilterRecipe({cat, type, gte, lte, loc}))
  //   setShowFilter(true)
  // }
  // const handlePage = (e) => {
  //   e.preventDefault()
  //   // console.log(e)
  //   setPage(parseInt(e.target.textContent))
  //   setShowPage(true)
  // }
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRecipe(page));
  // }, [page, dispatch]);
  const {list} = useSelector((state) => state.recipe.listRecipe);
  const {filterList} = useSelector((state) => state.recipe.listFilter);
  console.log("list", list)
  console.log("list filter", filterList)
  const [cat, setCat] = useState("")
  const [type, setType] = useState("")
  const [gte, setGte] = useState("")
  const [lte, setLte] = useState("")
  const [loc, setLoc] = useState("")
  const [showFilter, setShowFilter] = useState(false)
  const [page, setPage] = useState(1)
  const [showPage, setShowPage] = useState(false)
  // const [total, setTotal] = useState(list?.totalPages ? list?.totalPages : null)
  // console.log(total, "select")
  console.log(page, "page")
  const handleSubmit1 = (e) => {
    e.preventDefault()
    dispatch(getFilterRecipe({cat, type, gte, lte, loc}))
    setShowFilter(true)
  }
  const handleSubmit2 = (e) => {
    e.preventDefault()
    window.location.reload()
  }
  const handlePage = (e) => {
    e.preventDefault()
    // console.log(e)
    setPage(parseInt(e.target.textContent))
    setShowPage(true)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipe(page));
  }, [page, dispatch]);


  return (
    <div className='recipe-page'>
      <div className='recipe-section'>
        <div className='location-section'>
          <h5>Location</h5>
          <select
            name="loc"
            value={loc}
            style={selectStyle}
            onChange={(e) => setLoc(e.target.value)}
            // onBlur={}
          >
            <option value="" label="Select a Location" />
            <option value="1" label="Jakarta" />
            <option value="2" label="Bogor" />
            <option value="3" label="Depok" />
            <option value="4" label="Tangerang" />
            <option value="5" label="Bekasi" />
          </select>
          {/* <TextBarRecipe
            name='location'
            select='true'
            type='text'
            placeholder='Search other location'
          /> */}
        </div>
        <div className='type-section'>
          <h5>Type</h5>
          <select
            name="type"
            style={selectStyle}
            value={type}
            onChange={(e) => setType(e.target.value)}
            // onBlur={}
          >
            <option value="" label="Select Type" />
            <option value="1" label="Food" />
            <option value="2" label="Beverage" />
          </select>
          {/* <TextBarRecipe
            name='type'
            select='true'
            type='text'
            placeholder='Choose your type'
          /> */}
        </div>
        <div className='category-section'>
          <h5>Category</h5>
          <select
            name="cat"
            style={selectStyle}
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            // onBlur={}
          >
            <option value="" label="Select Category" />
            <option value="1" label="Meat" />
            <option value="2" label="Chicken" />
            <option value="3" label="Seafood" />
            <option value="4" label="Vegetarian" />
            <option value="5" label="Local" />
          </select>
          {/* <TextBarRecipe
            name='category'
            select='true'
            type='text'
            placeholder='Choose food category'
          /> */}
        </div>
        
        <div className='price-section'>
          <h5>Price</h5>
          <div className='button-section'>
            <input type="text" name="gte" style={selectStyle} placeholder="Min price..." value={gte} onChange={(e) => setGte(e.target.value)} />
            <input type="text" name="lte" style={selectStyle} placeholder="Max price..." value={lte} onChange={(e) => setLte(e.target.value)} />
          </div>
        </div>
        <div className="btn-filter">
        <Button
          onClick={handleSubmit1}
          sx={{
            marginRight: "26px",
            width: "110px",
            border: "1px solid #E0E0E0",
            color: "black",
            marginTop: "10px",
            borderRadius: "20px"
          }}
          variant='outlined'>
          Submit
        </Button>
        <Button
          onClick={handleSubmit2}
          sx={{
            marginRight: "26px",
            width: "110px",
            border: "1px solid #E0E0E0",
            color: "black",
            marginTop: "10px",
            borderRadius: "20px"
          }}
          variant='outlined'>
          Cancel
        </Button>
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
          {/* <FormControlLabel
            value='end'
            control={<Checkbox />}
            label='Show in stock only'
            labelPlacement='end'
            sx={{
              color: "black",
              marginLeft: "1rem",
            }}
          /> */}
          
          {/* <TextBarRecipe name='sorting' select='true' type='text' /> */}
          {/* <select
            name="sort"
            // value={select.sort}
            // onChange={setSelect}
            // onBlur={}
          >
            <option value="" label="Select Time" />
            <option value="1" label="Newest" />
            <option value="2" label="Oldest" />
          </select> */}
        </div>
        <div className={styles.CardSections}>
          {showFilter ? 
            filterList?.map((data) => (
              <Link to={`/details/${data.id}`} className={"card-section"}>
                <CardComp key={data.id} data={data} />
              </Link>
            ))
          : filterList.length !== 0 ?
            filterList?.map((data) => (
              <Link to={`/details/${data.id}`} className={"card-section"}>
                <CardComp key={data.id} data={data} />
              </Link>
            ))
            : showPage && list.currentPage == page ?
            list?.recipe?.map((data) => (
              <Link to={`/details/${data.id}`} className={"card-section"}>
                <CardComp key={data.id} data={data} />
              </Link>
            ))
            : 
            list?.recipe?.map((data) => (
              <Link to={`/details/${data.id}`} className={"card-section"}>
                <CardComp key={data.id} data={data} />
              </Link>
            ))
          }
          <div className='pagination-section'>
            <Pagination
              count={list?.totalPages}
              variant="outlined"
              shape="rounded"
              onChange={handlePage}
            />
          </div>
        </div>

        
      </div>
    </div>
  );
}


//   const {list} = useSelector((state) => state.recipe.listRecipe);
//   // const {filterList} = useSelector((state) => state.recipe.listFilter);
//   console.log("list", list)
//   // console.log("list filter", filterList)
//   const [cat, setCat] = useState("")
//   const [type, setType] = useState("")
//   const [gte, setGte] = useState("")
//   const [lte, setLte] = useState("")
//   const [loc, setLoc] = useState("")
//   const [showFilter, setShowFilter] = useState(false)
//   const [page, setPage] = useState(1)
//   const [totalPage, setTotalPage] = useState(0)
//   const [showPage, setShowPage] = useState(false)
//   const [data, setData] = useState([])
//   // const [total, setTotal] = useState(list?.totalPages ? list?.totalPages : null)
//   // console.log(total, "select")
//   console.log(page, "page")
//   const handleSubmit = (e) => {
//     setPage(1)
//     dispatch(getRecipe(page, {cat, type, gte, lte, loc}))
//     // setShowFilter(true)
//   }
//   const handlePage = (e) => {
//     // console.log(e)
//     setPage(parseInt(e.target.textContent))
//     // setShowPage(true)
//   }
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getRecipe(page, {}))
//   }, [page])

//   return (
//     <div className='recipe-page'>
//       <div className='recipe-section'>
//         <div className='location-section'>
//           <h5>Location</h5>
//           <select
//             name="loc"
//             value={loc}
//             onChange={(e) => setLoc(e.target.value)}
//             // onBlur={}
//           >
//             <option value="" label="Select a Location" />
//             <option value="1" label="Jakarta" />
//             <option value="2" label="Bogor" />
//             <option value="3" label="Depok" />
//             <option value="4" label="Tangerang" />
//             <option value="5" label="Bekasi" />
//           </select>
//           <TextBarRecipe
//             name='location'
//             select='true'
//             type='text'
//             placeholder='Search other location'
//           />
//         </div>
//         <div className='type-section'>
//           <h5>Type</h5>
//           <select
//             name="type"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             // onBlur={}
//           >
//             <option value="" label="Select Type" />
//             <option value="1" label="Food" />
//             <option value="2" label="Beverage" />
//           </select>
//           <TextBarRecipe
//             name='type'
//             select='true'
//             type='text'
//             placeholder='Choose your type'
//           />
//         </div>
//         <div className='category-section'>
//           <h5>Category</h5>
//           <select
//             name="cat"
//             value={cat}
//             onChange={(e) => setCat(e.target.value)}
//             // onBlur={}
//           >
//             <option value="" label="Select Category" />
//             <option value="1" label="Meat" />
//             <option value="2" label="Chicken" />
//             <option value="3" label="Seafood" />
//             <option value="4" label="Vegetarian" />
//             <option value="5" label="Local" />
//           </select>
//           <TextBarRecipe
//             name='category'
//             select='true'
//             type='text'
//             placeholder='Choose food category'
//           />
//         </div>
        
//         <div className='price-section'>
//           <h5>Price</h5>
//           <div className='button-section'>
//             <input type="text" name="gte" value={gte} onChange={(e) => setGte(e.target.value)} />
//             <input type="text" name="lte" value={lte} onChange={(e) => setLte(e.target.value)} />
//           </div>
//         </div>
//         <Button
//           onClick={handleSubmit}
//           sx={{
//             marginRight: "26px",
//             width: "110px",
//             border: "1px solid #E0E0E0",
//             color: "black",
//           }}
//           variant='outlined'>
//           Submit
//         </Button>
//       </div>
//       <div className='browse-section'>
//         <h1>Browse Recipe</h1>
//         <p className='paragraf'>
//           Using only fresh ingredients, our Halal-certified bento meals are
//           thoughtfully prepared by a team of chefs; and are available in a wide
//           variety of flavours, such as Local delights, Western, Malay, Indian
//           and Japanese cuisines.
//         </p>
//         <div className='browse-bar'>
//           <FormControlLabel
//             value='end'
//             control={<Checkbox />}
//             label='Show in stock only'
//             labelPlacement='end'
//             sx={{
//               color: "black",
//               marginLeft: "1rem",
//             }}
//           />
          
//           <TextBarRecipe name='sorting' select='true' type='text' />
//           <select
//             name="sort"
//             // value={select.sort}
//             // onChange={setSelect}
//             // onBlur={}
//           >
//             <option value="" label="Select Time" />
//             <option value="1" label="Newest" />
//             <option value="2" label="Oldest" />
//           </select>
//         </div>
//         <div className={styles.CardSections}>
//           {list?.recipe?.map((data) => (
//               <Link to={`/details/${data.id}`} className={"card-section"}>
//                 <CardComp key={data.id} data={data} />
//               </Link>
//             ))}
//           <div className='pagination-section'>
//             <Pagination
//               count={list.totalPages}
//               variant="outlined"
//               shape="rounded"
//               onChange={handlePage}
//             />
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// }

export default Recipe;
