"use client"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { CartContext } from '@/app/layout';

const Summary = () => {
    const { cart } = useContext(CartContext);

    const total = cart.reduce(
        (accumulator, currentValue)=>accumulator + currentValue.product.price*currentValue.quantity,0
    );
    return (
      <>
        <Card >
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Total is : {total}
            </Typography>
          </CardContent>
          
        </Card>
      </>
    );

}
export default Summary;