import { Box, Button, Container, FormControlLabel, Grid, Radio, TextField, Typography } from '@mui/material';
import React, { useEffect, useReducer } from 'react';
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const Headertop = styled("div")(({ theme }) => ({
  marginTop: "130px",
  [theme.breakpoints.down("md")]: {
    marginTop: "18px",
  },
}));

export const Thankyou=()=>{
    







  return(
    <Typography component={"div"}>
      <Headertop>

    
      <Typography variant="h3" textAlign='center'>Order Confirmed</Typography>
      <Container maxWidth="md">
        <Typography variant="h6" textAlign='center'>
                      Thanks your order has been received and on the way!</Typography>

                <Box sx={{ mx: 'auto'  }} textAlign='center'>
                <Button sx={{ width: '330',my:2  }} textAlign='center' className="addButton">
                                <Link to='/' >
                                   <span >
                                    Go for Shopping..</span> </Link>
                  </Button>
                  </Box>


            </Container>
 
</Headertop>
    </Typography>
      



    )
}