import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { newUsers } from "../../redux/user/actions";

import { alignProperty } from "@mui/material/styles/cssUtils";

const RegistrationForm = () => {
  const theme = useTheme();
  const userData = useSelector((state) => state.addUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const [Input, setInput] = useState({
    cnicNo: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNo: "",
    password: "",
    role: "",
  });

  // const [auth,setAuth]=useState('')

  const handleChange = (event) => {
    // console.log({ [event.target.name]: event.target.value });
    setInput({ ...Input, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", Input);
    alert("submit Successfully");

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios
        .post(
          "http://localhost:4001/user/add",
          {
            cnicNo: Input.cnicNo,
            firstName: Input.firstName,
            lastName: Input.lastName,
            email: Input.email,
            address: Input.address,
            phoneNo: Input.phoneNo,
            password: Input.password,
            role: Input.role,
          },
          config
        )
        // .then((response) => {
        // dispatch(newUsers(response.data));
        //   console.log(response.data);
        // });

      //      localStorage.setData("userInfo", JSON.stringify(data));
    } catch (er) {
      console.log("er", er);
    }
    history.push('./login')

    setInput({
      cnicNo: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phoneNo: "",
      password: "",
      role: "",
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

  // useEffect(() => {
  //   axios.get("http://localhost:4001/user/role").then((response)=>{

  //     // setAuth(response.data)
  //     // console.log(response.data.role,'role')
  //   })
  // }, []);

  return (
    <div>
      <Theme />
      <Container
        maxWidth="sm"
        sx={{ mb: 4,
          // backgroundColor: "rgb(17, 54, 63)" 
          }}
      >
        {/* <div className="image">
          <img src="./images/aretec.png" alt="logo" />
        </div> */}
//        <Lottie options={defaultOptions} height={120} width={100} />

        <Paper
          sx={{
            fontSize: 4,
            boxShadow: 4,
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            // my: { xs: 3, md: 6 },
            // p: 5,
            //            paddingTop:3,
            margin: "auto",
            maxWidth: 500,
            // flexGrow: 1,
            // backgroundColor: (theme) =>
            //   theme.palette.mode === "dark" ? "red" : "#fff",
          }}
          elevation={3}
        >
          <Typography
            variant="h5"
            component="h2"
            textAlign="center"
            sx={{ fontWeight: "bolder" }}
          >
            Registration Form
          </Typography>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                required
                id="standard-password-input"
                label="CNIC NO"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.cnicNo}
                name="cnicNo"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="First Name"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.firstName}
                name="firstName"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Last Name"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.lastName}
                name="lastName"
                onChange={handleChange}
              />

              <TextField
                required
                id="standard-password-input"
                label="Email"
                type="text"
                autoComplete="current-email"
                variant="standard"
                margin="normal"
                value={Input.email}
                name="email"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Password"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.password}
                name="password"
                onChange={handleChange}
              />

              <TextField
                required
                id="standard-password-input"
                label="Mobile Number"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.phoneNo}
                name="phoneNo"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Address"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.address}
                name="address"
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
                  name="role"
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
                Register
              </Button>
            </FormControl>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default RegistrationForm;
