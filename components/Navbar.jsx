"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState , useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { CartContext, UserContext } from '@/app/layout';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const Navbar = ()=>{
  const {authdata,setAuthdata} = useContext(UserContext);
  const{cart, setCart} = useContext(CartContext);

  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    router.push('/profile')
    setAnchorEl(null);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    handleClose();
    setOpen(true);
  };
  const signouthandleClickClose = ()=>{
    handleClose();
    setOpen(false);
  }

  const signouthandleClose = () => {
    setOpen(false);
    setAnchorEl(null);
    setAuthdata(null);
    router.push('/');
  };

  

      return (
       <div>
        <AppBar position="static" sx={{mb:2}}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1   }}>
              <Box sx={{display: { xs: 'none', sm: 'flex' }}}>
                <Button
                  sx={{ color: 'white' }}
                  onClick={()=>router.push('/')}
                >
                  Home
                </Button>
                <Button
                  sx={{ color: 'white' }}
                  onClick={()=>router.push('/cart')}
                >
                  Cart
                </Button>
              </Box>
            </Box>
            
            <Box sx={{ flexGrow: 0}}>
            <IconButton
              size="large"
              aria-label="show 16 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cart.reduce((previous, current) => previous + current.quantity, 0)} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
              {
                authdata?.customer?
                <>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt={authdata.customer.firstName}
                      src=" "
                    />
                  </IconButton>
               
                </Tooltip>
                    <div>
                    
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={signouthandleClose}>Sign-Out</MenuItem>
                  </Menu>
                </div>
                
              </>:
                   
                <Button
                      color="inherit"
                      onClick={()=>{
                        router.push('/login')}}
                  >
                    Login
                  </Button>
                   
                  
                
              }
              
            
            </Box>
          </Toolbar>
        </AppBar>
        {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Alert"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have items in your cart..!<br/>
            Are You sure to Sign Out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={signouthandleClickClose}>No</Button>
          <Button onClick={signouthandleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog> */}
      </div> 
      );

}

export default Navbar;




