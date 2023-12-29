import React from "react";
//import '../App.css';
import {
  Box,
  Container,
  Grid,
Link,
  ImageListItem,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel} from "swiper";
import { NavLink, useNavigate } from 'react-router-dom'
const Handwoven = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: "0px 190px ",
  background: "white",
  [theme.breakpoints.down("xl")]: {
    padding: "50px ",
  },
  [theme.breakpoints.down("md")]: {
    padding: "50px ",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px ",
  },
}));


const Headertop = styled("div")(({ theme }) => ({
  marginTop: "130px",
  [theme.breakpoints.down("md")]: {
    marginTop: "10px",
  },
}));


export const MainBody = () => {
  const navigate = useNavigate();

  const imagehandler=()=>{
    navigate('/catalogues');
    console.log("farhan")
  }
  return (
    <>
      {/* Slider Start========================= */}
      <Headertop>
        <Box sx={{ marginTop: "20px", mx: 1 }}>
          <Swiper
            sx={{
              height: "50vh",
              width: "96vw",
              display: "flex",
              justifyContent: "center",
            }}
            cssMode={true}
            pagination={{ clickable: true }}
            navigation={true}
            mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel]}
            className="mySwiper"
          >
            <SwiperSlide>
              <ImageListItem>
                <img alt=""
                  sx={{ height: "50px", width: "100%" }}
                  src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner123_4.jpg"
                  loading="lazy"
                />
              </ImageListItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageListItem>
                <img alt=""
                  sx={{ height: "50px", width: "100%" }}
                  src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/f/n/fnc_6.jpg"
                  loading="lazy"
                />
              </ImageListItem>
            </SwiperSlide>
            <SwiperSlide>
              <ImageListItem>
                <img alt=""
                  sx={{ height: "50px", width: "100%" }}
                  src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/b/a/banner123_4.jpg"
                  loading="lazy"
                />
              </ImageListItem>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Headertop>
      {/* =====================Slider end === */}

      {/* ====================   showCASPRODUCT START ------------------------- */}
      <Box sx={{ mt: 2 }}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={8}>
              <NavLink to="/catalogues">
              <img alt=""
                className="img-fluid"
                src="https://www.junaidjamshed.com/media/wysiwyg/GFS-1.jpg"
              />
              <Typography>Unstitched</Typography>
                <strong>Shop Now </strong>
              </NavLink>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Grid item sx={{ mb: 1, width: "100%" }}>
                <NavLink to="/catalogues">
                <img alt=""
                  sx={{ height: "180px" }}
                  className="img-fluid"
                  src="https://www.junaidjamshed.com/media/wysiwyg/GFS-3.jpg"
                />
                <Typography>Kuti</Typography>
                  <strong>Shop Now </strong>
                </NavLink>
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <NavLink to="/catalogues">
              
                <img alt=""
                  sx={{ height: "180px" }}
                  className="img-fluid"
                  src="https://www.junaidjamshed.com/media/wysiwyg/GFS-2_1.jpg"
                />
                <Typography>Stitched</Typography>
                  <strong>Shop Now </strong>
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ====================   showCASPRODUCT END ------------------------- */}
      <Box sx={{ mt: 2 }}>
        <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Grid item sx={{ mb: 1, width: "100%" }}>
                <NavLink to="/catalogues">     
                           <img alt=""
                  sx={{ height: "180px" }}
                  className="img-fluid"
                  src="https://www.junaidjamshed.com/media/wysiwyg/GFS-5.jpg"
                />

                <Typography>Shalwar Kamiz</Typography>
                  <strong>Shop Now </strong>
                </NavLink>
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <img alt=""
                  sx={{ height: "180px" }}
                  className="img-fluid"
                  src="https://www.junaidjamshed.com/media/wysiwyg/GFS-6.jpg"
                />
                <Typography>Stitched</Typography>
                <Link to="">
                  <strong>Shop Now </strong>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={8}>
              <img alt=""
                className="img-fluid"
                src="https://www.junaidjamshed.com/media/wysiwyg/GFS-4.jpg"
              />
              <Typography>Unstitched</Typography>
              <Link to="">
                <strong>Shop Now </strong>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* jdot handwoven start-------------------- */}
      <Box item xs={12}>
        <Handwoven>
          <Box sx={{ background: "#ff9e80", py: 3 }}>
            <img alt=""
              className="img-fluid "
              style={{ width: "950px" }}
              src="https://www.junaidjamshed.com/media/wysiwyg/Naerang.jpg"
            />
          </Box>
        </Handwoven>
      </Box>

      {/* jdot handwoven end -------------------- */}

      <Box item xs={12} mt={2}>
        <Handwoven>
          <Box sx={{ background: "#ff9e80", py: 3 }}>
            <img alt=""
              className="img-fluid "
              style={{ width: "950px" }}
              src="https://www.junaidjamshed.com/media/wysiwyg/Underwear_1.jpg"
            />
          </Box>
        </Handwoven>
      </Box>

      {/* jdot handwoven end -------------------- */}
      {/* New Arrival Start -------------------- */}
      <Box sx={{ height: "auto" }}>
        <Link alt=""
          component="p"
          sx={{ color: "black" }}
          textAlign="center"
          underline="always"
        >
          {"NEW ARRIVALS"}
        </Link>
        <Typography variant="h2" textAlign="center">
          Boys & Girls
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", px: 1 }}
          className="newarrival"
        >
          <Box sx={{ mr: 1 }} className="newarrival1">
            <Grid item xs={12} className="newarrival2">
              <img alt=""
                className="img-fluid "
                width="350px"
                height="600px"
                sx={{ objectFit: "cover" }}
                src="https://www.junaidjamshed.com/media/wysiwyg/GFS-7.jpg"
              />
            </Grid>
          </Box>
          <Box>
            <Box sx={{ display: "flex" }} className="newArrivalRight">
              <Grid item xs={4} sx={{ mr: 1 }} className="newArrivalRight1">
                <img alt=""
                  className="img-fluid "
                  width="200px"
                  height="300px"
                  style={{
                    objectFit: "cover",
                  }}
                  src="https://www.junaidjamshed.com/media/wysiwyg/GFS-7.jpg"
                />
              </Grid>
              <Grid item xs={4} sx={{ mr: 1 }} className="newArrivalRight1">
                <img alt=""
                  className="img-fluid "
                  width="200px"
                  height="300px"
                  style={{
                    objectFit: "cover",
                  }}
                  src="https://www.junaidjamshed.com/media/wysiwyg/GFS-7.jpg"
                />
              </Grid>
              <Grid item xs={4} className="newArrivalRight1">
                <img alt=""
                  className="img-fluid "
                  width="200px"
                  height="300px"
                  style={{
                    objectFit: "cover",
                  }}
                  src="https://www.junaidjamshed.com/media/wysiwyg/GFS-7.jpg"
                />
              </Grid>
            </Box>

            <Box sx={{ mt: 7 }}>
              <Grid item xs={12} textAlign="center">
                <Typography variant="h4">
                  <strong>New Collection </strong>
                </Typography>
                <Typography variant="h5">DRESS BRIGHT AND LIVELY</Typography>
                <Typography variant="h4">
                  <strong>With j. youngsters collection</strong>
                </Typography>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* New Arrival end -------------------- */}
     
    </>
  );
};
