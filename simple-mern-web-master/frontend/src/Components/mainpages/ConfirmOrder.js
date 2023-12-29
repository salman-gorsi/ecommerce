import React, { useContext, useReducer } from 'react';
import { Box, Button, Container, Divider, Grid, TextField, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'




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

export const ConfirmOrder =()=>{
  const navigate = useNavigate();
  const [{loading, error }, dispatch]=useReducer(reducer, {
    loading: false,
    error: '',
  })
  
 const {state , dispatch: contextDispatch} =useContext(Store);
  const { cart } = state;    
  cart.itemsSubTotal = cart.cartItems.reduce( (a, c)=> a+ c.price * c.quantity, 0)
  cart.itemsTax = 0.15 * cart.itemsSubTotal;
  cart.itemsTotal = cart.itemsSubTotal + cart.itemsTax;
  
const submitConfirmHandler = async ()=>{
try{
    dispatch({type: 'CREATE_REQUEST'})
const { data } = await axios.post('/api/orders',{
  orderItems: cart.cartItems,
  shippingAddress: cart.shippingAddress,
  paymentMethod: cart.paymentMethod,
  itemsSubTotal: cart.itemsSubTotal,
  itemsTax: cart.itemsTax,  
  itemsTotal: cart.itemsTotal,  

});
contextDispatch({type: 'CART_CLEAR'});  
dispatch({type: 'CREATE_SUCCESS'});  
localStorage.removeItem('cartItems');
  }catch(error){
    dispatch({type: 'CREATE_FAIL'});
  }

navigate('/thankyou')
}

  return(
  <Typography component={"div"}>
      <Headertop>
        <Typography my={3} variant="h4" textAlign='center'>Please Confirm your Order</Typography>
            <Container maxWidth="md">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                                <Box sx={{backgroundColor: 'lightGray'}}>
                                    <Typography sx={{p:1, textAlign: 'center'}} variant="h5" textalign='center'>
                                        Summary
                                    </Typography>
                                        <Divider sx={{mb:2}}></Divider>
                                    <Grid container sx={{p:1}}>
                                        <Grid item xs={6}>
                                           <span style={{fontSize: 16}}>SubTotal :</span> 
                                        </Grid>
                                        <Grid item xs={6}>
                                                Pkr {cart.itemsSubTotal.toFixed(2)}
                                        </Grid>
                                        <Grid item xs={6}>
                                             <span style={{fontSize: 16}}>Tax :</span>
                                        </Grid>
                                        <Grid item xs={6}>
                                                Pkr {cart.itemsTax.toFixed(2)}
                                        </Grid>
                                        <Divider ></Divider>
                                        <Grid item xs={6} sx={{my:2}}> 
                                           <span style={{fontSize: 20}}>Order Total : 
                                           </span>
                                        </Grid>
                                        <Grid item xs={6} sx={{my:2 }}> 
                                            <span style={{fontSize: 22, mr:1}}>PKR {cart.itemsTotal.toFixed(2)} 
                                            </span>
                                        </Grid>
                                    </Grid>
                                    </Box>
                                    </Grid>
                      <Grid item xs={12} md={6}>
                        {/* <Box> */}
                        <Typography gutterBottom textalign='center' mb={2} variant='h5'>SHIPPING ADDRESS
                       
                          </Typography>
                        <Typography>
                        <strong>Name:</strong> {cart.shippingAddress.fname}{' '}{cart.shippingAddress.lname}
                        </Typography><br/>
                            <Typography>
                        <strong>Address:</strong>{cart.shippingAddress.address}
                            </Typography><br/>
                            <Typography>
                        <strong>Email:</strong>{cart.shippingAddress.email}
                            </Typography><br/>
                            <Typography>
                        <strong>Mobile No:</strong>{cart.shippingAddress.phoneNum}
                            </Typography>
                            <Link to="/checkout" underline='none'>
                              Edit
                            </Link>

                    {/* </Box> */}
                      </Grid>
                  </Grid>
          {loading ? (<Button  sx={{ width: '380',my:2  }} className="addButton" type="submit">
                              Saving...
                  </Button>) : (<Button onClick={submitConfirmHandler} sx={{ width: '380',my:2  }} className="addButton" type="submit">
                              Order Confirmed
                  </Button>)}
              
        </Container>
        </Headertop>        

  </Typography>


    )
}