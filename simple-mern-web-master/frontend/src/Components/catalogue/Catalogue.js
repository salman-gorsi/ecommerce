import React, { useEffect, useReducer, useState } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
// import  Products from '../../apis/productsapi'
import { Button  } from "@mui/material";
import { Link } from 'react-router-dom';
import axios from 'axios';
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
        return {...state, products: action.payload ,loading: false};      
  
    case 'FETCH_FAIL':
        return {...state, loading: false, error: action.payload};      
  
    default:
     return state;
  }
}

export const Catalogue = () => {
  //const[products, setproducts] = useState([]);
  const [{loading, error, products}, dispatch]=useReducer(reducer, {
    loading: true,
    error: '',
    products: [],
  })
  
  
  useEffect( ()=>{
    const fetchData = async ()=>{
     dispatch({type: 'FETCH_REQUEST'});
     try{
       const  result  = await axios.get('/api/products');
      dispatch({type: 'FETCH_SUCCESS', payload: result.data});
     }
     catch(err){
      dispatch({type: 'FETCH_FAIL', payload: err.message});
     }
     //setproducts(result.data);
      
    };
    fetchData();
    
  },[]); 
  // // const catpro = products.filter( (item)=> item.category === 'Un-Stitched' )
  // const catpro2 = Math.floor(Math.random(products) * 10 );
  // console.log(typeof catpro2)
  console.log(products)
  return (
loading ? (<Headertop>
  <Typography component='div' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  Loading...</Typography></Headertop>) : error ? ( <Typography component='div' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  Loading...</Typography>): ( 

<div style={{  px:1 }}>
      <Headertop>
      <Container maxWidth="lg">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "15px",
        }}
      >
    {  products.map((x) => {
          return(
                    <Card  key={x.slug}    sx={{ '&:hover': {boxShadow: 5, border: '10px solid #f9fbe7'}}}>
          <CardMedia
            component="img"
            // width="250"
            image={x.image}
            alt={x.slug}
            />
          <CardContent>
            <Typography variant="h6" gutterBottom color="text.secondary">
            {x.name}</Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
                   Rs.{x.price} 
      </Typography>
      <Link to={`/products-detail/${x.slug}`}>
      <Button 
      sx={{width: '70%'}} className="addButton" >Add to cart</Button>
          </Link>
          </CardContent>
        </Card>
          )
        })
        }
</div>

     


      </Container>
</Headertop>
    </div>
    )
    );
};
