// import { Modal } from '@mui/material'
import React, { useState, useEffect } from "react";
//import { Modal } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { storeData } from "../../redux/storeData/actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CreateStore = ({ open, toggleModal }) => {
  const userData = useSelector((state) => state.addUser);

  const history = useHistory();
  const dispatch=useDispatch()

  const type = [
    {
      value: "Clothes",
      label: "Clothes",
    },
    {
      value: "Dairy Products",
      label: "Dairy Products",
    },
    {
      value: "Shoes",
      label: "Shoes",
    },
    {
      value: "Electronics",
      label: "Electronics",
    },
    {
      value: "Accessories",
      label: "Accessories",
    },
    {
      value: "Tools",
      label: "Tools",
    },
  ];
  const [storeDetails, setStoreDetails] = useState({
    storeName: "",
    storeType: "",
    productName: "",
    productPrice: "",
    productDetails: "",
  });

  const [show, setShow] = useState(false);

  //for image
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const[url,setUrl]=useState('')


  //to post file in api u need to use formdata as required in documentations

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handleChange = (e) => {
    setStoreDetails({ ...storeDetails, [e.target.name]: e.target.value });
  };

  const addProduct = (e) => {
    e.preventDefault();
    console.log(storeDetails, "store data--->");
    setShow(true);

    const imageUp=new FormData()
    imageUp.append('file',selectedImage)
    imageUp.append("upload_preset","store-clone")
    imageUp.append("cloud_name","dzfcrzmzc")


    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios
        .post(
          "http://localhost:4001/user/storedata",
          {
            storeName:storeDetails.storeName,
            storeType:storeDetails.storeType,
            productName:storeDetails.productName,
            productPrice:storeDetails.productPrice,
            productDetails:storeDetails.productDetails,
            productImage:url
          },
          config
        )
        .then((response) => {
        dispatch(storeData(response.data));
          console.log(response.data);
        });
        

        fetch("https://api.cloudinary.com/v1_1/dzfcrzmzc/image/upload",{
          method:"post",
          body:imageUp
        }).
        then((response)=>{
          response.json()
        })
        .then((data)=>{
          setUrl(data.url)
          console.log(data)
        }).catch((err)=>{
          console.log(err)
        })


      //      localStorage.setData("userInfo", JSON.stringify(data));
    } catch (er) {
      console.log("er", er);
    }

    setStoreDetails({
      storeName: "",
      storeType: "",
      productName: "",
      productPrice: "",
      productDetails: "",
      });
      setSelectedImage('')
    // history.push("/addproduct");
  };

  useEffect(() => {}, [userData]);


  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{
          mb: 4,
          // backgroundColor: "rgb(17, 54, 63)"
        }}
      >
        <Paper
          sx={{
            fontSize: 4,
            boxShadow: 4,
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            margin: "auto",
            maxWidth: 500,
          }}
          elevation={3}
        >
          <Typography
            variant="h5"
            component="h2"
            textAlign="center"
            sx={{ fontWeight: "bolder" }}
          >
            Create Store
          </Typography>
          <Divider />
          <br />
          <br />

          <form
          // onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  required
                  id="outlined-required"
                  label="Name of Store"
                  name="storeName"
                  value={storeDetails.storeName}
                  onChange={handleChange}
                />
                <TextField
                  sx={{
                    width: "45%",
                    marginLeft: 5,
                  }}
                  id="outlined-select-currency"
                  select
                  label="Type of Store"
                  value={storeDetails.storeType}
                  name="storeType"
                  onChange={handleChange}
                  helperText="Please select anyone"
                >
                  {type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <br />
              <Divider />
              <br />
              <br />
              <Typography
                variant="h5"
                component="h2"
                textAlign="center"
                sx={{ fontWeight: "bolder" }}
                //variant="h6"
                gutterBottom
              >
                Product Details
              </Typography>
              <Divider />
              <br />
              <br />
              <div>
                <br />
                <br />

                <TextField
                  sx={{ width: "90%" }}
                  required
                  id="outlined-required"
                  label="Product Name"
                  name="productName"
                  value={storeDetails.productName}
                  onChange={handleChange}
                />

                <br />
                <br />
                <br />
                <br />
                <br />

                <TextField
                  sx={{ width: "90%" }}
                  required
                  id="outlined-required"
                  label="Details"
                  name="productDetails"
                  value={storeDetails.productDetails}
                  onChange={handleChange}
                />
                <br />
                <br />
                <br />
                <br />
                <br />

                <TextField
                  sx={{ width: "90%" }}
                  required
                  id="outlined-required"
                  type="number"
                  label="Price"
                  name="productPrice"
                  value={storeDetails.productPrice}
                  onChange={handleChange}
                />
                <br />
                <br />
                <br />
                <br />
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
                        width: "300%",
                        fontWeight: 800,
                      }}
                    >
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
                <br />
                <br />

                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    marginTop: 3,
                    marginLeft: 30,
                    width:'45%',
                    backgroundColor: "rgb(28, 28, 29)",
                  }}
                  onClick={addProduct}
                >
                  Add Products
                </Button>
              </div>
            </FormControl>
          </form>
        </Paper>
      </Container>
    </div>
  );
};


