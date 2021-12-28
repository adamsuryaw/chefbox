import React from "react";
import logo from "../../Asset/Group 2.svg";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Button,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
// import profilePict from "../../Asset/Ellipse 11-1.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import { getUser } from "../../store/actions/profile";
import { viewCart } from "../../store/actions/cart";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getSearchRecipe } from "../../store/actions/recipe";

function Header() {
  const [search, setSearch] = useState(false)
  // const {list} = useSelector((state) => state.recipe.listRecipe);
  // const {filterList} = useSelector((state) => state.recipe.listFilter);
  // console.log("list", list)
  // console.log("list SEARCH", filterList)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [keyword, setKeyword] = useState('')
  // const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();
  const handleSubmit1 = (e) => {
    e.preventDefault()
    dispatch(getSearchRecipe(keyword))
    setSearch(true)
  }
  const handleSubmit2 = (e) => {
    e.preventDefault()
    setSearch(false)
    window.location.reload()
  }
  function clearToken() {
    localStorage.clear();
    // window.location.reload();
    navigate(`/`)
  }
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
        dispatch(viewCart());
      }, [dispatch]);

    const userHeader = useSelector((state) => state?.account?.userDetails);
    console.log("user header", userHeader);
    const cartShop = useSelector((state) => state?.addCart?.cartUser);
    // console.log("cart total", cartShop?.details?.total);
    // return (
    //     <div className="header-section">
    //         <img src={logo} alt="logo" />
    //         <div className="recipe">
    //             <h3>Recipe</h3>
    //             <Box
    //                 sx={{
    //                     width: '49px',
    //                     height: '2px',
    //                     background: '#B6340B',
    //                 }}
    //             />
    //         </div>
    //         <Paper
    //             sx={{ 
    //                 p: '2px 4px', 
    //                 display: 'flex', 
    //                 alignItems: 'center', 
    //                 width: '466px',
    //                 height: '40px',
    //                 border: '1px solid #333333',
    //                 borderRadius: '8px',
    //                 background: '#FCE4AC',
    //                 marginLeft: '31px',
    //             }}
    //             >
    //             <InputBase
    //                 sx={{ ml: 1, flex: 1 }}
    //                 placeholder="What do you want to eat today?"
    //                 inputProps={{ 'aria-label': 'search google maps' }}
    //             />
    //             <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
    //                 <SearchIcon />
    //             </IconButton>
    //         </Paper>
    //         <Button 
    //             variant="contained"
    //             sx={{
    //                 width: '172px',
    //                 height: '36px',
    //                 background: '#B6340B',
    //                 boxShadow: '0px 4px 10px rgba(33, 68, 87, 0.2)',
    //                 borderRadius: '24px',
    //                 marginTop: '5px',
    //                 marginLeft: '505px',
    //                 textTransform: 'none'
    //             }}
    //         >
    //             <Typography 
    //                 component="div"
    //                 sx={{
    //                     fontFamily: 'Nunito',
    //                     fontWeight: 'bold',
    //                     fontSize: '16px',
    //                     color: '#F2F2F2',
    //                     }}
    //             >
    //                 Create Recipe
    //             </Typography>
    //         </Button>
    //         <div className="shop-button">
    //             <ShoppingCartOutlined sx={{  marginTop: '12px', marginLeft: '24px', fontSize: '24px' }} />
    //             {cartShop?.details?.length ?
    //                 <h3>{cartShop?.details?.length}</h3>
    //                 :
    //                 null
    //             }
    //         </div>
    //         <Box
    //             sx={{
    //                 width: '0px',
    //                 height: '35px',
    //                 border: '1px solid #828282',
    //                 marginLeft: '36px',
    //                 marginTop: '1px',
    //             }}

  return (
    <div className='header-section'>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <Link to='/recipe' style={{ textDecoration: "none", color: "black" }}>
      <div className='recipe'>
        <h3>Recipe</h3>
        <Box
          sx={{
            width: "49px",
            height: "2px",
            background: "#B6340B",
          }}
        />
      </div>
      </Link>
      <Paper
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "466px",
          height: "40px",
          border: "1px solid #333333",
          borderRadius: "8px",
          background: "#FCE4AC",
          marginLeft: "31px",
        }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          name="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='What do you want to eat today?'
          inputProps={{ "aria-label": "search google maps" }}
        />
        {search === false ?
          <IconButton type='submit' onClick={handleSubmit1} sx={{ p: "10px" }} aria-label='search'>
            <SearchIcon />
          </IconButton>
          :
          <IconButton type='submit' onClick={handleSubmit2} sx={{ p: "10px" }} aria-label='search'>
            <CloseIcon />
          </IconButton>
        }
      </Paper>
      <Link to='/create'>
        <Button
          variant='contained'
          sx={{
            width: "145px",
            height: "36px",
            background: "#B6340B",
            boxShadow: "0px 4px 10px rgba(33, 68, 87, 0.2)",
            borderRadius: "24px",
            marginTop: "5px",
            marginLeft: "505px",
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
            Create Recipe
          </Typography>
        </Button>
      </Link>
      <Link to='/order'>
        <div className='shop-button'>
          <ShoppingCartOutlined sx={{ marginTop: '12px', marginLeft: '24px', fontSize: "24px" }} />
          {cartShop?.details?.total ?
              <h3>{cartShop?.details?.total}</h3>
              :
              null
          }
        </div>
      </Link>
      
      <Box
        sx={{
          width: "0px",
          height: "35px",
          border: "1px solid #828282",
          marginLeft: "36px",
          marginTop: "1px",
        }}
      />
      {/* <div>
        <Tooltip title='Account settings'>
          <IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
            <Avatar
              src={profilePict}
              sx={{
                width: 32,
                height: 32,
                marginRight: "12px",
              }}
            /> */}
      <div>
        <Tooltip title='Account settings'>
          <IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
            <Avatar
              src={userHeader?.details?.image}
              sx={{
                width: 32,
                height: 32,
                marginRight: "12px",
              }}
            />
            <Typography
              component='div'
              sx={{
                fontFamily: "Nunito",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#000000",
                marginRight: "14px",
              }}>
              {userHeader?.details?.userName}
            </Typography>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              width: 150,
              "& .MuiAvatar-root": {
                width: 22,
                height: 22,
                ml: -0.5,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
          <MenuItem>
            <Link to='/account' style={{ textDecoration: "none" }}>
              <Avatar /> My account
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize='small' />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem onClick={clearToken}>
            <ListItemIcon>
              <Logout fontSize='small' />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
