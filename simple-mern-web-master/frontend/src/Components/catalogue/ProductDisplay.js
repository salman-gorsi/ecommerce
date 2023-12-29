import React, { useContext, useEffect, useReducer } from "react";
import { styled } from "@mui/material/styles";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Divider, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ExpandMore} from "@mui/icons-material";
import axios from "axios";
import { getError } from "../utils";
import { Store } from "../Store";

const Headertop = styled("div")(({ theme }) => ({
  marginTop: "130px",
  [theme.breakpoints.down("md")]: {
    marginTop: "18px",
  },
}));

const reducer=(state, action)=>{
  switch (action.type) {
    case 'FETCH_REQUEST':
        return {...state, loading: true};      
  
    case 'FETCH_SUCCESS':
        return {...state, product: action.payload ,loading: false};      
  
    case 'FETCH_FAIL':
        return {...state, loading: false, error: action.payload};      
  
    default:
     return state;
  }
}
    export const ProductDisplay = () => {
const params = useParams();
const { slug }= params;
const navigate = useNavigate();
 const [{loading, error, product}, dispatch]=useReducer(reducer, {
    loading: true,
    error: '',
    product: [],
  })
  useEffect( ()=>{
    const fetchData = async ()=>{
     dispatch({type: 'FETCH_REQUEST'});
     try{
       const  result  = await axios.get(`/api/products/slug/${slug}`);
      dispatch({type: 'FETCH_SUCCESS', payload: result.data});
     }
     catch(err){
      dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
     }
    };
    fetchData();
    
  },[ slug ]); 
const { state, dispatch: contextDispatch }= useContext(Store);
const { cart }=state;
const addtocartHandler= async ()=>{
const existItem = cart.cartItems.find( (x)=> x._id === product._id);
const quantity = existItem ? existItem.quantity + 1 : 1;
const { data }= await axios.get(`/api/products/${product._id}`);
if (data.countInStock < quantity ){
  window.alert('Soory, product is out of stock.')
  return;
}
contextDispatch( { type: 'ADD_TO_CART', payload: {...product, quantity}})
navigate("/shopping-cart");
}



  return (
    loading ? (<Headertop>
  <Typography component='div' sx={{mt: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  Loading...</Typography></Headertop>) : error ? ( <Headertop>
  <Typography component='div' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  {error}
  </Typography>
  </Headertop>): ( 
    <Typography component={"div"}>
      <Headertop>
              <Container maxWidth="xl">
          <Grid container spacing={1} >
            <Grid item xs={12} lg={5} >
              <Box sx={{display: "flex", justifyContent: 'center'}}>
              <img  className="img-fluid"     alt={product.slug}         
               src={product.image}
              ></img>
              </Box>
            </Grid>
           

            <Grid item xs={12} lg={6}  >
              <Typography component={"div"}>
                <Typography variant="h5">{product.name}</Typography>
                <Typography variant="h6">{product.countInStock ? (<span style={{color: 'green'}}>IN STOCK</span>) :
                 (<span style={{color: 'red'}}> OUT OF STOCK</span>) }</Typography>
                <Typography variant="h6">PKR {product.price}</Typography>
                <Divider></Divider>
                {product.countInStock === 0 ? (
                  <Button sx={{ width: "40%" , my:4, py:1.5 }} disabled className="addButton">
                   Product avail soon!
                  </Button>
                ) :( <Button  onClick={addtocartHandler} sx={{ width: "40%" , my:4, py:1.5 }} className="addButton">
                    Add to Cart </Button>
               )}
                
                
                
                <Typography sx={{fontSize: 14, fontWeight: 'bold',textDecoration: 'underline' }}>
                Embroidered 3 Piece
                </Typography>
                <Typography sx={{fontSize: '14px', marginBottom: '10px' }}>
                {product.embroidered1}<br/>
                {product.embroidered2}<br/>
                </Typography>
                <Typography sx={{fontSize: 14, fontWeight: 'bold',textDecoration: 'underline' }}>
             Add-On:
                </Typography>
                <Typography gutterBottom sx={{fontSize: '14px', marginBottom: '18px' }}>
                {product.addOn}<br/>
                </Typography>
              </Typography>
              <Divider></Divider>
                   <Accordion sx={{minwidth: '290', mb:2, boxShadow: "none"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>More Information</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                        <Grid container columnSpacing={{ xs: 8 }}>
                        <Grid item xs={2} sx={{fontSize: 14,mb:1}} >
                            <strong>Size</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}} sx={{fontSize: 12}}>
                          {product.size}
                        </Grid>
                        <Grid item xs={2} sx={{fontSize: 14,mb:1}}>
                            <strong>Color</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}}>
                          {product.color}
                        </Grid>
                        <Grid item xs={2} sx={{fontSize: 14,mb:1}}>
                            <strong>Product Cateogry</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}}>
                          {product.productCateogry}
                        </Grid>
                        <Grid item xs={2} sx={{fontSize: 14,mb:1}}>
                            <strong>Volume</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}}>
                          {product.volume}
                        </Grid>
                        <Grid item xs={2} sx={{fontSize: 14,mb:1}}>
                            <strong>Collection</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}}>
                          {product.procollection}
                        </Grid>
                         <Grid item xs={2} sx={{fontSize: 14,mb:1}}>
                            <strong>Design</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}}>
                          {product.design}
                        </Grid>
                        <Grid item xs={2} sx={{fontSize: 14,mb:1}}>
                            <strong>Fabric</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}}>
                          {product.febric}
                        </Grid>
                        <Grid item xs={2} sx={{fontSize: 14,mb:'1'}}>
                            <strong>Disclamier</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}}>
                          <span sx={{ml: 9}}>{product.disclamier}</span>
                        </Grid>
                        <Grid item xs={2} sx={{fontSize: 14,mb:'1'}}>
                            <strong>Note</strong>
                        </Grid>
                        <Grid item xs={10} sx={{fontSize: 13}}>
                          {product.note}
                        </Grid>
                      </Grid>
                      
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </Grid>

          </Grid>
        </Container>
      </Headertop>
    </Typography>)
  );
};
