"use client"

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import CartItems from '@/components/CartItems';
import Summary from '@/components/Summery';
import { UserContext } from '../layout';
import { useContext } from 'react';
import Typography from '@mui/material/Typography'


const Cart = () => {
  const router = useRouter()
  const {authdata, setAuthdata}  = useContext(UserContext);


if(!(authdata?.customer)){
  return <Grid container spacing={2}>
            <Grid item xs={12} sx={{textAlign:'center'}}>
              <Typography variant="subtitle2" color="initial">
                  Please Login First..!
              </Typography>
            </Grid>
          
            
         </Grid>
}

  return (
    <>
      

      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CartItems/>
        </Grid>
        <Grid item xs={4}>
          <Summary />
          <Button sx={{marginTop:3}} fullWidth onClick={() => {
            router.push("/");
          }} variant="outlined">Shop More
        </Button>
          <Button sx={{marginTop:3}} fullWidth onClick={() => {
            router.push("/checkout");
          }} variant="outlined">Checkout
        </Button>
        </Grid>
        
      </Grid>
    </>
  );
};

export default Cart;
