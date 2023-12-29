import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { styled } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';

const Headertop = styled("div")(({ theme }) => ({
  marginTop: "130px",
  [theme.breakpoints.down("md")]: {
    marginTop: "18px",
  },
}));

export const Checkout=()=>{
  const navigate = useNavigate();
const {state, dispatch: contextDispatch} = useContext(Store) 
const { cart: { shippingAddress },} = state;
  const [fname, setFname]=useState(shippingAddress.fname || '');
const [lname, setLname]=useState(shippingAddress.lname || '');
const [address, setAddress]=useState(shippingAddress.address || '');
const [country, setCountry]=useState(shippingAddress.country || '');
const [province, setProvince]=useState(shippingAddress.province || '');
const [city, setCity]=useState(shippingAddress.city || '');
const [postal, setPostal]=useState(shippingAddress.postal || '');
const [phoneNum, setPhoneNum]=useState(shippingAddress.phoneNum || '');
const [email, setEmail]=useState(shippingAddress.email || '');

  const shippingFormHandler=(e)=>{
    e.preventDefault();
contextDispatch({
    type : 'SAVE_SHIPPING_ADDRESS',
    payload: { fname, lname, address, email, country, province, city, postal, phoneNum}
});
localStorage.setItem(
    'shippingAddress', 
    JSON.stringify({
        fname, lname, address,email, country, province, city, postal, phoneNum
    })
);



    navigate('/payment-method');
}
  
    return(
    <Typography component={"div"}>
      <Headertop>
        <Typography variant="h3" textAlign='center'>Shipping Address</Typography>
        <Container maxWidth="sm">
            <form onSubmit={shippingFormHandler}>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <TextField sx={{width: '100%'}} required type='text' onChange={(e)=>setFname(e.target.value)} 
                    value={fname} id="standard-basic"  label="First Name" variant="standard" />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={{width: '100%'}} required type='text' onChange={(e)=>setLname(e.target.value)}
                   value={lname} id="standard-basic" label="Last Name" variant="standard" />
                </Grid>
                <Grid item sm={12}>
                    <TextField sx={{width: '100%'}} required type='text' onChange={(e)=>setAddress(e.target.value)}
                   value={address} id="standard-basic" label="Street Address" variant="standard" />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={{width: '100%'}} required type='text' onChange={(e)=>setCountry(e.target.value)}
                  value={country}  id="standard-basic" label="Country" variant="standard" />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={{width: '100%'}} required type='email' onChange={(e)=>setEmail(e.target.value)}
                  value={email}  id="standard-basic" label="Enter your email" variant="standard" />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={{width: '100%'}} required type='text' onChange={(e)=>setProvince(e.target.value)}
                   value={province} id="standard-basic" label="State Province" variant="standard" />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={{width: '100%'}} required type='text' onChange={(e)=>setCity(e.target.value)}
                  value={city}  id="standard-basic" label="City" variant="standard" />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={{width: '100%'}} required type='text' onChange={(e)=>setPostal(e.target.value)}
                   vale={postal} id="standard-basic" label="Postal Code" variant="standard" />
                </Grid>
                <Grid item sm={6}>
                    <TextField sx={{width: '100%'}} required type='text' onChange={(e)=>setPhoneNum(e.target.value)}
                   value={phoneNum} id="standard-basic" label="Phone Number"  variant="standard" />
                </Grid>
            </Grid>
                    <Button type='submit' sx={{ width: '100%',my:2  }} className="addButton">
                    Next
                    </Button>
            </form>
            </Container>,



      </Headertop>
    </Typography>
      



    )
}