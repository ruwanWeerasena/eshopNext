"use client"

import { useContext, useEffect, useState } from "react";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';

import Paper from '@mui/material/Paper';
import { UserContext } from "../layout";

const History = ()=>{

   const {authdata} = useContext(UserContext);

    const[orders,setOrders] = useState([]);
  
   useEffect(() => {
     async function fetchData() {

       try {
         const response = await fetch(`/api/checkout/${authdata.customer.id}`);
         const data = await response.json();
         setOrders(data);
       } catch (error) {}

     }
     fetchData();
   }, [authdata]);
    
   
    
console.log(authdata,"ddd",orders);
    return(
   <>
        <Grid container spacing={2} sx={{paddingBottom:10}}>
        <Grid item xs={8}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>firstName</TableCell>
                <TableCell align="right">order id</TableCell>
                <TableCell align="right">orderDate</TableCell>
                <TableCell align="right">paymentMethod</TableCell>
                <TableCell align="right">state </TableCell>
                <TableCell align="right">streetAddress</TableCell>
                <TableCell align="right"> Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{order.customer.firstname}</TableCell>
                  <TableCell align="right">{order.id}</TableCell>
                  <TableCell align="right">{order.orderDate}</TableCell>
                  <TableCell align="right">{order.paymentMethod}</TableCell>
                  <TableCell align="right">{order.city}</TableCell>
                  <TableCell align="right">{order.streetAddress}</TableCell>   
                  <TableCell align="right">{order.total}</TableCell>   
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
        
        <Grid item xs={4}>
          <Card sx={{textAlign:'center'}}>
                <CardHeader title="My Profile"/>
                <IconButton
                    sx={{ p: 0, }}
                  >
                    <Avatar
                      sx={{ bgcolor: deepOrange[500] }}
                      alt={authdata.customer.firstname}
                      src=" "
                    />
                  </IconButton>
              <CardContent sx={{textAlign:'center'}}>
                <Typography>Name :  {authdata.customer.firstname +" "+ authdata.customer.lastname}</Typography>
                <Typography>Email :  {authdata.customer.email}</Typography>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
      </>
    
    );
}

export default History;