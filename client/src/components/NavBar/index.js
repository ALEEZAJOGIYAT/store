import React, { useState } from "react";
import {Container, Nav, Navbar } from "react-bootstrap";
import {Button} from '@mui/material'
import Lottie from 'react-lottie'
import animationData from '../../lotties/header.json'


// import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import PostJob from "../Pages/storeCreator/PostJob";


export const NavBar = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
    
//   const state = useSelector((state) => state);
//   const auth = state.auth;
const role='storeCreator'
//   const role = auth?.users?.role;

  const [open, setOpen] = useState(false);

  const history = useHistory();

  const showModal = () => {
    setOpen(true);
  };

  const toggleModal = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    history.push("/");
  };

  const storeCreator = [
    {
      to: "./createStore",
      name: "Stores",
    },
    {
      to: "./profile",
      name: "Profile",
    },
  ];
  const customer = [
    {
      to: "./companies",
      name: "Companies",
    },
    {
      to: "./alljobs",
      name: "All Jobs",
    },
    {
      to: "./appliedjobs",
      name: "Applied Jobs",
    },
    {
      to: "./profile",
      name: "Profile",
    },
  ];

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./vacancies">
          <Lottie
            options={defaultOptions}
            height={50}
            width={50}
          />

          </Navbar.Brand>
          <Nav className="me-auto">
            {role === "customer"
              ? customer.map((value) => (
                  <Nav.Link as={Link} to={value.to}>
                    {value.name}
                  </Nav.Link>
                ))
              : role === "storeCreator"
              ? storeCreator.map((value) => (
                  <Nav.Link as={Link} to={value.to}>
                    {value.name}
                  </Nav.Link>
                ))
              : null}
          </Nav>
          {role === "customer" ? (
            <Button
              className="buttonlogout"
              variant="outline-light"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : role === "storeCreator" ? (
            <>
              <Button
                variant="contained"
                onClick={showModal}
                sx={{backgroundColor:'rgb(55, 139, 139) '}}
              >
               Create Store
              </Button>
              <Button
              sx={{marginLeft:5,backgroundColor:'rgb(55, 139, 139)' }}
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : null}
        </Container>
      </Navbar>

      {/* <PostJob open={open} toggleModal={toggleModal} /> */}
    </div>
  );
};

