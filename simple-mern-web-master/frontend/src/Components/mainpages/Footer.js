import React, { useState } from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
} from "@mui/material";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {





  return(
<>
<Box className="betfirst1" sx={{ marginTop: "20px", height:'auto', mb:4  }}>
        <Box sx={{ width: "90%", background: "black", mx: "auto",
       py:2 }} className="betfirst">
          <Box textAlign="center" sx={{ color: "white" }}>
            <Typography variant="h6" sx={{ pt: 2 }}>
              <strong>BE THE FIRST </strong>
            </Typography>
            <Typography variant="h6" sx={{ pt: 4 }}>
              New arrivals. Exclusive previews. First access to
              <br /> sales. Sign up to stay in the know.
            </Typography>
             <Box>
 
              <form  >
                 <Box sx={{mb:1, display:'flex', justifyContent: 'center', mt:2 }}>
                    <button type="submit" className="btn btn-outline-light " onClick={(e)=>{e.preventDefault()}}>Coming soon!</button>
                  </Box>
              </form>
              
 
              </Box>     
          </Box>
        </Box>
      </Box>
<Box sx={{ width: "98%",  height: '150px', mx: 'auto' }}>
<Grid container sx={{display:'flex', width:'center'}}>
  <Grid item xs={12} sm={3} sx={{textAlign:'center'}}>
  <Typography variant="h6" sx={{ pt: 2 }}>
              BE THE FIRST 
            </Typography>
            
            <Typography sx={{fontSize:'12px'}}>+92 21 111 112 111 ({' '} 9am - 10pm, Mon- Sat)</Typography>
          <Link to="#"  underline="hover" color="gray">
              eshop@junaidjamshed.com    
          </Link>
        
  </Grid>
  <Grid item xs={12} sm={3} sx={{textAlign:'center'}}>
  <Typography variant="h6" sx={{ pt: 2 }}>
              CUSTOMER SERVICE 
            </Typography>
            <Link to="#" underline="hover" color="gray">
            <Typography>Contact Us</Typography>
          </Link>
          <Link to="#" underline="hover" color="gray">
            <Typography>Delivery</Typography>
          </Link>
          <Link to="#" underline="hover" color="gray">
            <Typography>Paymeny Guid</Typography>
          </Link>
  </Grid>
  <Grid item xs={12} sm={3} sx={{textAlign:'center'}}>
  <Typography variant="h6" sx={{ pt: 2 }}>
              COMPANY
            </Typography>
            <Link to="#" underline="hover" color="gray">
            <Typography>About Us</Typography>
          </Link>
          <Link to="#" underline="hover" color="gray">
            <Typography>Careers</Typography>
          </Link>
          <Link to="#" underline="hover" color="gray">
            <Typography>store Locator</Typography>
          </Link>
  </Grid>
  <Grid item xs={12} sm={3} sx={{textAlign:'center'}}>
  <Typography variant="h6" sx={{ pt: 2 }}>
              FOLLOW US
            </Typography>
            <Link to="#" underline="hover" color="gray">
                      <WhatsAppIcon/>
          </Link>
  </Grid>
  
  </Grid>
</Box>

</>
      )
  }