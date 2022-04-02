import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../../lotties/sign-up.json";
import { Theme } from "../../components/theme";
import { users } from "../../redux/user/actions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
  const userData = useSelector((state) => state.addUser);

  // console.log(userData.data[0].data.role,'redux state')

  const dispatch = useDispatch();
  const history=useHistory()

  const [data, setData] = useState({
    email: "",
    password: "",
    cnicNo: "",
  });

  // const[auth,setAuth]=useState()

  const handleChange = (event) => {
    // console.log({ [event.target.name]: event.target.value });
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("data", data);
    // alert("submit Successfully");
    // ali123
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      axios
        .post(
          "http://localhost:4001/user/login",
          {
            email: data.email,
            password: data.password,
            //          cnicNo: data.cnicNo,
          },
          config
        )
        .then((response) => {
          dispatch(users(response.data));
          console.log(response.data);
        });
    } catch (err) {
      console.log(err, "error");
    }

    if(userData.data[0].data.role==='Customer') {
      history.push('./custhome')
    } else{
      history.push('./storehome')
    }

    setData({
      email: "",
      password: "",
      // cnicNo: "",
    });
  };

  useEffect(() => {
  }, [userData]);

  // axios.get("http://localhost:4001/user/role").then((response) => {
  //   console.log(response.data);
  // });

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
      {/* {userData?.data?.map(({ data, id }, index) => {
        const { email, role } = data;
        return (
          <div>
            <h4>{email}</h4>
          </div>
        );
      })} */}

      <Theme />
      {/* <div>
        
      </div> */}
      <Container
        maxWidth="sm"
        sx={{
          mb: 4,
          // backgroundColor: "rgb(17, 54, 63)"
        }}
      >
        <Lottie options={defaultOptions} height={120} width={100} />

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
                value={data.cnicNo}
                name="cnicNo"
                onChange={handleChange}
              /> */}
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
                value={data.email}
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
                value={data.password}
                name="password"
                onChange={handleChange}
              />

              <br />
              <br />
              {/* <FormControl>
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
                </RadioGroup>
              </FormControl> */}
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
      <div></div>
    </div>
  );
};
