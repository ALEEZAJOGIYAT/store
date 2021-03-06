import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Lottie from "react-lottie";
import animationData from "../../lotties/header.json";
import { useSelector } from "react-redux";
import axios from "axios";
import  Axios  from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="./home">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export const ShowProduct = () => {
  const [proData, setProData] = useState([]);

  // const storeData=useSelector((state)=>state.storeDetails)
  // console.log(storeData?.data[0]?.data?.productName)

  const handleDelete = (id) => {
    //console.log(id)
    axios.delete(`http://localhost:4001/user/delete/${id}`).then((response) => {
       console.log(response)
    }).catch((err)=>{
      console.log(err)
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    axios.get("http://localhost:4001/user/getstore").then((response) => {
      setProData(response.data);
    });
  }, [proData]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ backgroundColor: "rgb(28, 28, 29)" }}>
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Lottie options={defaultOptions} height={50} width={50} />

          {/* <Typography variant="h6" color="inherit" noWrap>
            Products of The Store
          </Typography> */}
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            All Products
          </Typography>
          <br />
          <br />
          <br />
          {/* End hero unit */}
          <Grid container spacing={4}>
            {proData?.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.productName}
                    </Typography>
                    <Typography>{card.productDetails}</Typography>
                    <Typography>{card.productPrice}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      onClick={() => handleDelete(card._id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};
