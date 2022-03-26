import  React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Divider, TextField } from '@mui/material';
import { Container } from '@mui/material';
import { Paper } from '@mui/material';
import Lottie from 'react-lottie'
import animationData from '../../lotties/add-products.json'

// import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const AddProduct=()=> {
    const[productData,setProductData]=useState({
        productName:'',
        productPrice:'',
        productDetails:'',
    })
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

      const handleSubmit=(e)=>{
          e.preventDefault()
          setProductData({
            "productName":'',
            "productPrice":'',
            "productDetails":'',
    
          })
      }

      const handleChange=(e)=>{
          setProductData=({...productData,[e.target.name]:[e.target.value]})
      }

  return (
    <>
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

        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography variant="h6" gutterBottom>
        Product Details
      </Typography>
      <Divider/>
      <br/>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
        sx={{width:"200%"}}
            required
            id="outlined-required"
            label="Product Name"
            name="productName"
          value={productData.productName}
          onChange={handleChange}
          />

          <br/>
          <br/>
          <TextField
                  sx={{width:"200%"}}

            required
            id="outlined-required"
            label="Details"
            name="detail"
            value={productData.productDetails}
            onChange={handleChange}
  
          />
                  <br/>
          <br/>
          <TextField
                  sx={{width:"200%"}}

            required
            id="outlined-required"
            label="Image"
            name="image"
        //   value={storeDetails.name}
        //   onChange={handleChange}
          />


        <br/>
          <br/>
          <TextField
                  sx={{width:"200%"}}

            required
            id="outlined-required"
            type='number'
            label="Price"
            name="price"
            value={productData.productPrice}
            onChange={handleChange}
  
          />
          <br/>
          <br/>

        <Button variant='contained' size='medium'
        onClick={handleSubmit}
                       sx={{marginLeft:25,backgroundColor:'rgb(43, 46, 46)' , width:'45%' }}

         >Add Item</Button>

        </Grid>
        </Grid>
      </Paper>
      </Container>
    </>
  );
}