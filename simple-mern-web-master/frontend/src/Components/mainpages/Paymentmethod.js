import { Box, Button, Container, Divider, FormControlLabel, Grid, IconButton, Radio, TextField, Typography } from '@mui/material';
import React, { useContext, useReducer, useState } from 'react';
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';


const Headertop = styled("div")(({ theme }) => ({
  marginTop: "130px",
  [theme.breakpoints.down("md")]: {
    marginTop: "18px",
  },
}));

function reducer(state, action){
  switch (action.type) {
    case 'CREATE_REQUEST':
      return {...state, loading: true}
      
     case 'CREATE_SUCCESS': 
     return { ...state, loading: false} 
  
     case 'CREATE_FAIL': 
     return { ...state, loading: false} 
  
    default:
      return state;
  }
}

export const Paymentmethod=()=>{
  const navigate = useNavigate();
  const [{loading, error }, dispatch]=useReducer(reducer, {
    loading: false,
    error: '',
  })
  const {state , dispatch: contextDispatch} =useContext(Store);
  const { cart } = state;
  const { cart:{ 
    paymentMethod, 
    shippingAddress },
  } = state;
  

  const [cash, setCash]=useState(paymentMethod || 'cash');


const submitOrder = async (e)=>{
  e.preventDefault();
 contextDispatch({ type: 'SAVE_PAYMENT_METHOD',
payload: cash});
localStorage.setItem('paymentMethod',cash);
 navigate('/confirm-order') 
}



const updateCartHandler= async (x, quantity)=>{
const { data } = await axios.get(`/api/products/${x._id}`);
if( data.countInStock < quantity ) {
    window.alert('soory no product available now');
    // toast.alert("Soory no product is available.")
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

return(
    <Typography component={"div"}>
      <Headertop>
        <Typography variant="h3" textAlign='center'>Payment Method</Typography>
        <Container maxWidth="md">
        <Typography variant="h6" textAlign='center'>
            Recently we only deal with cash on delivery!</Typography>

            <form>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                <FormControlLabel value="cash" type="radio" checked={cash === 'cash'}
                onChange={(e)=>setCash(e.target.value) } 
                control={<Radio />} label="Cash on Delivery" />
                                </Grid>
               
            </Grid>
                    <Button onClick={submitOrder} sx={{ width: '380',my:2  }} className="addButton" type="submit">
                             Place an Order!
                  </Button>
            </form>
                          
                    <Box>
                <Typography my={2} textAlign='center' variant="h5">
                  YOUR SHOPPING LIST ITEMS<br/>
                  {cart.cartItems.name}gh
                </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} lg={12}>
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

                                { cart.cartItems.map( (x)=> {
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
                    </Grid>

                    </Box>



            </Container>



      </Headertop>
    </Typography>
      



    )
}