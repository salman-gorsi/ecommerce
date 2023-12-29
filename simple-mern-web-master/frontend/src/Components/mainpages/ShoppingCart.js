import React, { useContext, useState } from 'react';
import { styled } from "@mui/material/styles";
import { Box, Button, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import axios from 'axios';


const Headertop = styled("div")(({ theme }) => ({
  marginTop: "130px",
  [theme.breakpoints.down("md")]: {
    marginTop: "18px",
  },
}));
export const ShoppingCart=()=>{

    const {state, dispatch: contextDispatch }=useContext(Store);
    const {cart: { cartItems },} = state;
const updateCartHandler= async (x, quantity)=>{
const { data } = await axios.get(`/api/products/${x._id}`);
if( data.countInStock < quantity ) {
    window.alert('soory no product available now');
        return;
}
contextDispatch( { 
    type: 'ADD_TO_CART', 
    payload: { ...x, quantity},
})
}



const removeItem = (x) =>{
    contextDispatch({ type: 'CART_ITEM_REMOVE', payload: x})
}

    return (
cartItems.length === 0 ? (<Headertop>
  <Typography component='div' sx={{mt: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  Cart is empty {' '}<Link to='/'>Go to shopping...</Link> </Typography></Headertop>) :  (
<Typography component={"div"}>
      <Headertop>
            <Container maxWidth="lg">
                <Typography variant="h5">
                    SHOPPING CART
                </Typography>
                   <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={8}>
                            <Box  >
                                    <Grid container>
                            <Grid item xs={5} >
                                <strong>Item</strong>
                                <Divider sx={{mb:1}}></Divider>
                            </Grid>
                            <Grid item xs={2}>
                                <strong>Price</strong>
                                <Divider sx={{mb:1}}></Divider>
                            </Grid>
                            <Grid item xs={3}>
                                <strong>Qty</strong>
                                <Divider sx={{mb:1}}></Divider>
                            </Grid>
                            <Grid item xs={2}>
                                <strong>Remove</strong>
                                <Divider sx={{mb:1}}></Divider>
                            </Grid>
                        </Grid>

                                { cartItems.map( (x)=> {
                                    return( <>
                                <Grid container sx={{mt:2}} key={x.slug}>
                                    <Grid item xs={5}>
                                              <Box sx={{display: "flex"}}>
                                    <img  width={80}
                                    src={x.image}
                                    alt={x.slug} />
                                    <Typography sx={{ml:2}}>
                                        {x.name}
                                    </Typography>
                                    </Box>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography sx={{ml:2}}>
                                        PKR {x.price}
                                    </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <IconButton
                           onClick={()=> updateCartHandler(x, x.quantity - 1)}
                            size="small"
                              disabled={x.quantity === 1}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </IconButton>{" "}
                         <span>{x.quantity}</span> 
                          {""}
                          <IconButton
                         onClick={()=> updateCartHandler(x, x.quantity + 1)}
                            size="small"
                             disabled={x.quantity === x.countInStock}
                          >
                            <i className="fas fa-plus-circle"></i>
                          </IconButton>
                                    </Grid>
                                    <Grid item xs={2}>
                            <Typography onClick={()=> removeItem(x)} sx={{display: 'flex', justifyContent: 'center', cursor: 'pointer'}} component='div'>
                               <span> Delete </span> 
                             </Typography>
                                   
                                    </Grid>
                                </Grid>
                            <Divider sx={{mt:3}}></Divider>
                                </>)
                            })}
                            
                            </Box>

                        </Grid>
                        <Grid item xs={12} lg={4} >
                                <Box sx={{backgroundColor: 'lightGray'}}>
                                    <Typography sx={{p:1}} variant="h5">
                                        Summary
                                    </Typography>
                                        <Divider sx={{mb:2}}></Divider>
                                    <Grid container sx={{p:1}}>
                                        <Grid item xs={8}>
                                           <span style={{fontSize: 14}}>SubTotal :</span> 
                                        </Grid>
                                        <Grid item xs={4}>
                                                PKR {cartItems.reduce( (a, c)=> a+ c.price * c.quantity, 0)}
                                        </Grid>
                                        <Grid item xs={8}>
                                             <span style={{fontSize: 15}}>Tax :</span>
                                        </Grid>
                                        <Grid item xs={4}>
                                                PKR 0
                                        </Grid>
                                        <Divider ></Divider>
                                        <Grid item xs={8} sx={{my:2}}> 
                                           <span style={{fontSize: 22}}>Order Total : 
                                           </span>
                                        </Grid>
                                        <Grid item xs={4} sx={{my:2 }}> 
                                            <span style={{fontSize: 22, mr:1}}>PKR {cartItems.reduce( (a, c)=> a+ c.price * c.quantity, 0)}
                                           </span>
                                        </Grid>
                                    </Grid>

                             <Box sx={{ m:4  }}>
                                
                                <Link to='/checkout' >
                                    <Button sx={{ width: '100%',mb:2  }} className="addButton">
                                   <span sx={{texDecoration: 'none', Color: 'white' }}>
                                    CheckOut</span> 
                                 </Button>
                                </Link>
                                </Box>    

                                </Box>

                        </Grid>
                    </Grid>
                    </Box> 
         </Container>
      </Headertop>
 </Typography>)
    )
}