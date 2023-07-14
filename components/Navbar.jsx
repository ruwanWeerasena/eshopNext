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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Navbar = ()=>{
  const {authdata} = useContext(UserContext);
  const{cart, setCart} = useContext(CartContext);

  const router = useRouter()

      return (
        
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
                    <IconButton onClick={()=>{}} sx={{ p: 0 }}>
                      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                      <AccountCircleIcon fontSize='large'/>
                    </IconButton>
                    </Tooltip>
                    <Menu
                      keepMounted
                      open={false}
                    >
                        <MenuItem >
                          <Typography textAlign="center">Sign Out</Typography>
                        </MenuItem>
                    </Menu>
                    </> :
                   
                        <Button
                              sx={{ color: 'white' }}
                              onClick={()=>{
                                router.push('/login')}}
                          >
                            Sign In
                          </Button>
                   
                  
                
              }
              
            
            </Box>
          </Toolbar>
        </AppBar>
      );

}

export default Navbar;




