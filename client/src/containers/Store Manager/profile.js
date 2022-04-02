import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { NavBar } from "../../components/NavBar/index";

export const CompanyProfile = () => {
  const [close, setClose] = useState(false);

  const userData = useSelector((state) => state.addUser);
//  const role = userData?.data[0]?.data?.role;

  useEffect(() => {}, [userData]);

  return (
    <div>
      <NavBar />
      <Container
        maxWidth="sm"
        sx={{
          mb: 4,
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
            variant="h6"
            // component="h2"
            textAlign="center"
            sx={{ fontWeight: "bolder" }}
          >
          Role:{userData?.data[0]?.data?.role}
          </Typography>
          <Divider/>
          <br />
          <br />
          <Typography
            variant="h6"
            // component="h2"
            textAlign="center"
            sx={{ fontWeight: "bolder" }}
          >
           Name: {userData?.data[0]?.data?.firstName}
          </Typography>
          <br/>
          <br/>
          <Divider/>
          <br/>
          <br/>
          <Typography
            variant="h6"
            // component="h2"
            textAlign="center"
            sx={{ fontWeight: "bolder" }}
          >
           Email: {userData?.data[0]?.data?.email}
          </Typography>
          <br/>
          <br/>
          <br/>
          <Divider/>
          <br/>
          <br/>

        </Paper>
      </Container>
    </div>
  );
};

{
  /* <Container
maxWidth="sm"
sx={{
  mb: 4,
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
    PROFILE
  </Typography>
  <br />
  <br />

  <form>
    <FormControl fullWidth>
      <TextField
        required
        id="standard-password-Data"
        label="CNIC NO"
        type="text"
        autoComplete="current-text"
        variant="standard"
        margin="normal"
        value={value.cnicNo}
      />
      <br />
      <br />

      <TextField
        required
        id="standard-password-Data"
        label="Email"
        type="text"
        autoComplete="current-email"
        variant="standard"
        margin="normal"
        value={value.email}
        name="email"
      />
      <TextField
        required
        id="standard-password-Data"
        label="Password"
        type="text"
        autoComplete="current-text"
        variant="standard"
        margin="normal"
        value={value.name}
      />

      <br />
      <br />
    </FormControl>
  </form>
</Paper>
</Container> */
}
