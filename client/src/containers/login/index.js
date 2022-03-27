import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import * as startOfDay from 'date-fns/startofday';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

// import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
// import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../../lotties/sign-up.json";
import { Theme } from "../../components/theme";

export const LoginForm = () => {
  const [Data, setData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event) => {
    // console.log({ [event.target.name]: event.target.value });
    setData({ ...Data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", Data);
    alert("submit Successfully");

    setData({
      email: "",
      password: "",
      role:''
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

  return (
    <div>
      <Theme />
      <Container
        maxWidth="sm"
        sx={{ mb: 4, backgroundColor: "rgb(17, 54, 63)" }}
      >
        {/* <div className="image">
          <img src="./images/aretec.png" alt="logo" />
        </div> */}

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
            Login In Here
          </Typography>
          <Lottie options={defaultOptions} height={120} width={100} />
          <br />
          <br />

          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              {/* <TextField
                required
                id="standard-password-Data"
                label="CNIC NO"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Data.cnicNo}
                name="cnicNo"
                onChange={handleChange}
              /> */}

              <TextField
                required
                id="standard-password-Data"
                label="Email"
                type="text"
                autoComplete="current-email"
                variant="standard"
                margin="normal"
                value={Data.email}
                name="email"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-Data"
                label="Password"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Data.password}
                name="password"
                onChange={handleChange}
              />

              <br />
              <br />
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  //sx={{marginLeft:-50}}
                >
                  Role
                </FormLabel>
                <RadioGroup
                  // value={role}
                  onChange={handleChange}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="Customer"
                    control={<Radio />}
                    label="Customer"
                  />
                  <FormControlLabel
                    value="Store Creator"
                    control={<Radio />}
                    label="Store Creator"
                  />
                  {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                </RadioGroup>
              </FormControl>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginTop: 5,
                  width: 150,
                  display: "flex",
                  marginLeft: 20,
                  backgroundColor: "rgb(30, 31, 31)",
                }}
              >
                LogIn
              </Button>
            </FormControl>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
