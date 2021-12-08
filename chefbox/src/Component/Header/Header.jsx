import React from 'react'
import logo from '../../Asset/Group 2.svg'
import './Header.css'
import { Box, IconButton, InputBase, Paper, Button, Typography, Avatar, Menu, MenuItem, Divider, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import profilePict from '../../Asset/Ellipse 11-1.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    // function token() {
    //     localStorage.removeItem("token");
    // }
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header-section">
            <img src={logo} alt="logo" />
            <div className="recipe">
                <h3>Recipe</h3>
                <Box
                    sx={{
                        width: '49px',
                        height: '2px',
                        background: '#B6340B',
                    }}
                />
            </div>
            <Paper
                sx={{ 
                    p: '2px 4px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    width: '466px',
                    height: '40px',
                    border: '1px solid #333333',
                    borderRadius: '8px',
                    background: '#FCE4AC',
                    marginLeft: '31px',
                }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="What do you want to eat today?"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <Button 
                variant="contained"
                sx={{
                    width: '172px',
                    height: '36px',
                    background: '#B6340B',
                    boxShadow: '0px 4px 10px rgba(33, 68, 87, 0.2)',
                    borderRadius: '24px',
                    marginTop: '5px',
                    marginLeft: '505px',
                    textTransform: 'none'
                }}
            >
                <Typography 
                    component="div"
                    sx={{
                        fontFamily: 'Nunito',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        color: '#F2F2F2',
                        }}
                >
                    Create Recipe
                </Typography>
            </Button>
            <div className="shop-button">
                <ShoppingCartOutlined sx={{ fontSize: '24px' }} />
            </div>
            <Box
                sx={{
                    width: '0px',
                    height: '35px',
                    border: '1px solid #828282',
                    marginLeft: '36px',
                    marginTop: '1px',
                }}
            />
            <div>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                        <Avatar
                            src={profilePict}
                            sx={{ 
                                width: 32, 
                                height: 32,
                                marginRight: '12px'
                            }} 
                        />
                        <Typography 
                            component="div"
                            sx={{
                                fontFamily: 'Nunito',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: '#000000',
                                marginRight: '14px'
                                }}
                        >
                            Justin
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
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default Header
