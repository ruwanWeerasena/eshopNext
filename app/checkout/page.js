"use client"


import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createContext, useContext, useState } from 'react';
import { CartContext, UserContext } from '../layout';
import Address from '@/components/Address';
import PaymentOption from '@/components/PaymentOption';
import Summary from '@/components/Summery';
import CartItems from '@/components/CartItems';
import { useRouter } from 'next/navigation';

const CheckoutContext = createContext();

const Checkout = () => {  
  const router = useRouter()

  const [address, setAddress] = useState({
    streetAddress: "",
    streetError: false,
    city: "",
    cityError: false,
    state: "",
    stateError: false
  });
  const { authdata } = useContext(UserContext)

  const { cart ,setCart } = useContext(CartContext)

  const checkout = {
    "customerId": authdata.customer.id,
    "streetAddress": address?.streetAddress,
    "city": address?.city,
    "state": address.state,
    "paymentMethod": "Card"
  }
  const total = cart.reduce((accumulator, currentValue)=>accumulator + currentValue.product.price*currentValue.quantity,0);

  const createOder =  async() => {

    const order = { ...checkout,total:total };

    
      console.log(order)
      const response = await fetch("/api/checkout",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `bearer ${authdata.token}`,
            },
            body:JSON.stringify(order)
          } );
      console.log("order Created");
      router.push('/')

    console.log(order);
  }
  return (
    <CheckoutContext.Provider value={{createOder, address}}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
            <Address setAddress={setAddress} address={address} />
            <PaymentOption />
            <Summary/>
            <Button
              sx={{ marginTop: 3 }}
              fullWidth
              onClick={createOder}
              variant="outlined"
            >
              Create Oder
            </Button>

        </Grid>
        
        <Grid item xs={6}>
          <CartItems />
        </Grid>
      </Grid>
      
    </CheckoutContext.Provider>
  );
};

export default Checkout;

export {CheckoutContext};
