"use client"

import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react';

const SignIn = () => {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = ()=>{
        
    }
  return (
    <form style={{ padding: "100px 300px" }}>
        <div style={{ display: "flex", padding: "5px" }}>
          <Typography
            variant="h6"
            component="div"
            color="grey"
            sx={{ flex: 1, paddingTop: 1 }}
          >
            Username
          </Typography>

          <TextField
            sx={{ flex: 2, lineHeight: 10 }}
            id="email"
            value={username}
            fullWidth
            
            variant="filled"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", padding: "5px" }}>
          <Typography
            variant="h6"
            component="div"
            color="grey"
            sx={{ flex: 1, paddingTop: 1 }}
          >
            Password
          </Typography>
          <TextField
            sx={{ flex: 2, lineHeight: 10 }}
            id="password"
            value={password}
            fullWidth
            variant="filled"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", padding: "5px" }}>
         
          <Button
            sx={{ marginLeft:32,width:200, marginTop: 3 }}
            fullWidth
            onClick={login}
            variant="outlined"
          >
            Login
          </Button>
        </div>
      </form>
  )
}

export default SignIn