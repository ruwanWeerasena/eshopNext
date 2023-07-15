// import { useState, useEffect } from "react";
// import { Elements, CardElement } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import CheckoutForm from "./CheckoutForm";

// const stripe = loadStripe(
//   "pk_test_51KSH8gJ1oAs7f97xvVhXKQYDCfxuM7Pohiq1ZSECIQBricQUQOfZy8TNEQNCgKMJJaC07QsjPipnP2e5Hu2bo70v00Obj9iuZB"
// );

// const PaymentOption = () => {
//   const [clientSecret, setClientSecret] = useState("");

//   var dto = { amount: 150, currency: 'USD' };

//   useEffect(() => {
//     axios
//       .post("http://localhost:5000/checkout/create-payment-intent", dto)
//       .then((result) => {
//           var { clientSecret } = result.data;
//           console.log(34, clientSecret);
//         setClientSecret(clientSecret);
//       });
//   }, []);

//   const options = {
//     // passing the client secret obtained from the server
//     clientSecret: clientSecret,
//   };
//   return (
//     <>
//       {clientSecret && (
//         <Elements stripe={stripe} options={options}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </>
//   );
// };
// export default PaymentOption;

"use client"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const PaymentOption = () => {
  return (
    // <Grid item xs={6}>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Payment Method
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Card" control={<Radio />} label="Card" />
          <FormControlLabel
            value="cod"
            control={<Radio />}
            label="Cash On Delivery"
          />
        </RadioGroup>
      </FormControl>
    // </Grid>
  );
};
export default PaymentOption;

