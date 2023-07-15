"use client"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { CartContext } from '@/app/layout';
import { Grid, Typography } from '@mui/material';

const CartItems = () => {
  const {cart,setCart} = useContext(CartContext);
  console.log(cart.legth);
    if(cart.length==0){
      return <Grid container spacing={2}>
                <Grid item xs={12} sx={{textAlign:'center'}}>
                  <Typography variant="subtitle2" color="initial">
                      Your cart is Empty..! Click Shop More to Fill the Cart
                  </Typography>
                </Grid>
    
              </Grid>
    }
    return (
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Line Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((itm) => (
                <TableRow
                  key={itm.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {itm.product.name}
                  </TableCell>
                  <TableCell align="right">{itm.quantity}</TableCell>
                  <TableCell align="right">{itm.product.price}</TableCell>
                  <TableCell align="right">
                    {itm.quantity * itm.product.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
}
export default CartItems;