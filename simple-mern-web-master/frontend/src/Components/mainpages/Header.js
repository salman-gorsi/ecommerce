import React, { useContext, useState } from "react";
//import '../App.css';
import { AppBar, Badge, Box, Drawer, IconButton, Link, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Store } from "../Store";
import {  useNavigate } from "react-router-dom";
import { ArrowRightAltRounded } from "@mui/icons-material";
const Root1 = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const Rootnone = styled("div")(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 1,
    top: 22,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Header = () => {
const { state }= useContext(Store);
  const { cart } = state;
  const navigate = useNavigate();
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const browseTo=()=>{
      navigate('/catalogues');
  }
const browseToCart=()=>{
    navigate('/shopping-cart')
}
const goToHome=()=>{
    navigate('/')
}

return (
    <>
      <Root1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 1,
        px: 2,borderBottom: 1,
    borderColor: "grey.300",
    boxShadow: 2,
          }}
        >
          <Box>
                <MenuIcon />
            <p style={{color: 'black', marginTop: "-8px ", fontSize: "10px" }}>Menu</p>
            <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box width="250px" textAlign="left" role="presentation">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  pl: 1,
                  background: "#404040",
                  width: "250px",
                  lineHeight: "50px",
                  color: "black",
                  height: "50px",
                }}
              >
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  pl: 1,
                  mt: 2,
                  mb: 2,
                  fontSize: "20px",
                }}
              >
                Products
              </Typography>
              <ListItemButton  onClick={browseTo} sx={{ mt: 1 }}>
                <ListItemIcon>
                  <ArrowRightAltRounded  />{' '}Nishatlinen
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton  onClick={browseTo} sx={{ mt: 1 }}>
                <ListItemIcon>
                  <ArrowRightAltRounded />{' '} Alkarams
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton  onClick={browseTo} sx={{ mt: 1 }}>
                <ListItemIcon>
                  <ArrowRightAltRounded />{' '} Junaid Jamshed
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton  onClick={browseTo} sx={{ mt: 1 }}>
                <ListItemIcon>
                  <ArrowRightAltRounded />{' '}Watches
                </ListItemIcon>
              </ListItemButton>
            </Box>
            
          

          </Drawer>
          
          </Box>
          <Box>
           <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray", fontSize: 40, cursor: 'pointer'}}
              component="button"
              variant="body2"
              onClick={goToHome}
            > J</Link>
          </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {cart.cartItems.length > 0 ?( <IconButton aria-label="cart" sx={{mt: -3}}>
      <StyledBadge badgeContent={cart.cartItems.length} color="secondary">
        <ShoppingBagIcon fontSize='medium'/>
      </StyledBadge>
    </IconButton> ) : (<IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.cartItems.length} color="secondary">
        <ShoppingBagIcon fontSize='medium'/>
      </StyledBadge>
    </IconButton> )} 
              <Box sx={{ pl: 1 }}>
                <SearchIcon />
                <p style={{ marginTop: "-5px ", fontSize: "12px" }}>Search</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Root1>
      {/* menu item start================== */}
      <Rootnone>
        <AppBar
          sx={{
            background: "white",

            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            px: 2,
            borderBottom: 1,
            borderColor: "grey.300",
            boxShadow: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            {" "}
            <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray", fontSize: 40, cursor: 'pointer'}}
              component="button"
              variant="body2"
              onClick={goToHome}
            > J</Link>
          </Box>
          <Box sx={{ fontSize: "18px", mb: 1, mx: "auto" }}>
            <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray" }}
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              NEW ARRIVALS
            </Link>
            <Link
              sx={{ mr: 5, color: "darkgray" }}
              underline="none"
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              ONLINE EDITION
            </Link>
            <Link
              sx={{ mr: 5, color: "darkgray" }}
              underline="none"
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              CAST & CREW
            </Link>
            <Link
              sx={{ mr: 5, color: "darkgray" }}
              underline="none"
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              WOMEN
            </Link>
            <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray" }}
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              MEN
            </Link>
            <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray" }}
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              BOYS & GIRLS
            </Link>
            <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray" }}
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              FRAGRANCE
            </Link>
            <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray" }}
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              MAKEUP
            </Link>
            <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray" }}
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              CATALOGUE
            </Link>
            <Link
              underline="none"
              sx={{ mr: 5, color: "darkgray" }}
              component="button"
              variant="body2"
              onClick={browseTo}
            >
              BOYS & BOYS
            </Link>
 {cart.cartItems.length > 0 ?( <IconButton aria-label="cart" sx={{mt: -3}}>
      <StyledBadge badgeContent={cart.cartItems.length} color="secondary">
        <ShoppingBagIcon fontSize='medium'/>
      </StyledBadge>
    </IconButton> ) : (<IconButton aria-label="cart" onClick={browseToCart}>
      <StyledBadge badgeContent={cart.cartItems.length} color="secondary">
        <ShoppingBagIcon fontSize='medium'/>
      </StyledBadge>
    </IconButton> )}              

          </Box>
        </AppBar>
      </Rootnone>
      {/* menu item end================== */}
    </>
  );
};
