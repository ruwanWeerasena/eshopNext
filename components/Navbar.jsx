"use client"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'




const Navbar = ()=>{
  const{data:session} = useSession()
  const [providers,setProviders] = useState(null);

  useEffect(()=>{
    const setProvider = async ()=>{
      const response = await getProviders();
      setProviders(response);
    }
    setProvider();
  },[])

  console.log(session);

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
              {
                session?.user?
                    <>
                    <Tooltip title="Open settings">
                    <IconButton onClick={()=>{}} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                    <>
                      {
                        providers &&
                        Object.values(providers).map(
                          
                            (provider)=>{
                          
                          return <Button
                          sx={{ color: 'white' }}
                          key={provider.name} 
                          onClick={()=>signIn(provider.id)}
                          >
                            Sign In
                          </Button>
                          }
                           
                          
                        )
                      }
                    </>
                  
                
              }
              
            
            </Box>
          </Toolbar>
        </AppBar>
      );

}

export default Navbar;




