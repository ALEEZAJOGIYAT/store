import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, Divider, TextField } from "@mui/material";
import { Container } from "@mui/material";
import { Paper } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../../lotties/add-products.json";
import { Box } from "@mui/material";
// import TextField from '@mui/material/TextField';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Theme } from "../../components/theme";

export const AddProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDetails: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductData({
      productName: "",
      productPrice: "",
      productDetails: "",
    });
  };

  const handleChange = (e) => {
    setProductData = { ...productData, [e.target.name]: [e.target.value] };
  };

  return (
    <>
    <Theme/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "initial",
            
          }}
        >
          <Lottie
            style={{ marginTop: 12 }}
            options={defaultOptions}
            height={100}
            width={100}
          />
          </div> */}

        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h6" gutterBottom>
            Product Details
          </Typography>
          <Divider />
          <br />
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ width: "200%" }}
                required
                id="outlined-required"
                label="Product Name"
                name="productName"
                value={productData.productName}
                onChange={handleChange}
              />

              <br />
              <br />
              <TextField
                sx={{ width: "200%" }}
                required
                id="outlined-required"
                label="Details"
                name="detail"
                value={productData.productDetails}
                onChange={handleChange}
              />
              <br />
              <br />
              <TextField
                sx={{ width: "200%" }}
                required
                id="outlined-required"
                type="number"
                label="Price"
                name="price"
                value={productData.productPrice}
                onChange={handleChange}
              />
              <br />
              <br />

              <div>
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="select-image">
                  <Button
                   variant="contained"  
                   component="span"
                      sx={{
                        //marginLeft: 25,
                        backgroundColor: "rgb(22, 128, 128)",
                        width: "350%",
                        fontWeight:800
                      }}>
                    Upload Image
                  </Button>
                </label>
                {imageUrl && selectedImage && (
                  <Box mt={2} textAlign="center">
                    <div>Image Preview:</div>
                    <img
                      src={imageUrl}
                      alt={selectedImage.name}
                      height="100px"
                    />
                  </Box>
                )}
              </div>
              <br/>
              <br/>
              <Button
                variant="contained"
                size="medium"
                onClick={handleSubmit}
                sx={{
                  marginLeft: 50,
                  backgroundColor: "rgb(43, 46, 46)",
                  width: "45%",
                }}
              >
                Add Item
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};
