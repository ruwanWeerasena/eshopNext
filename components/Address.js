"use client"
import TextField from "@mui/material/TextField";

const Address = ({ address, setAddress }) => {
  return (
      <>
          {address.streetError && <span font='red'>Street address is required.</span>}
      <TextField
        onChange={(e) => {
          setAddress({ ...address, streetAddress: e.target.value });
        }}
        // value={address.streetAddress}
              onBlur={(e) => {
            console.log('onblur')
          if (address.streetAddress) {
            setAddress({ ...address, streetError: false });
          } else {
            setAddress({ ...address, streetError: true });
          }
        }}
        sx={{ marginBottom: 2 }}
        fullWidth
        label="Street Address"
        id="Street"
      />
      
      <TextField
        onChange={(e) => {
          setAddress({ ...address, city: e.target.value });
        }}
        // value={address.city}
        sx={{ marginBottom: 2 }}
        fullWidth
        label="City"
        id="City"
      />
      <TextField
        onChange={(e) => {
          setAddress({ ...address, state: e.target.value });
        }}
        // value={address.state}
        sx={{ marginBottom: 2 }}
        fullWidth
        label="State"
        id="State"
      />
    </>
  );
};
export default Address;
