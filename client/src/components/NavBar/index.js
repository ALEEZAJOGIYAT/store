import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Button } from "@mui/material";
import Lottie from "react-lottie";
import animationData from "../../lotties/header.json";
import { useSelector } from "react-redux";
import { CreateStore } from "../../containers/Store Manager/CreateStore";

// import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import PostJob from "../Pages/storeCreator/PostJob";

export const NavBar = () => {
  const userData = useSelector((state) => state.addUser);

  // console.log(userData.data[0].data.role,'redux state')

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
  const role = userData?.data[0]?.data?.role
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
      to: "./product",
      name: "Products",
    },
    {
      to: "./profile",
      name: "Profile",
    },
  ];
  const customer = [
    {
      to: "./dashboard",
      name: "Stores",
    },
    {
      to: "./purchaseproducts",
      name: "Purchased Products",
    },
    // {
    //   to: "./appliedjobs",
    //   name: "Applied Jobs",
    // },
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
            <Lottie options={defaultOptions} height={50} width={50} />
          </Navbar.Brand>
          <Nav className="me-auto">
            {role === "Customer"
              ? customer.map((value) => (
                  <Nav.Link as={Link} to={value.to}>
                    {value.name}
                  </Nav.Link>
                ))
              : role === "store Creator"
              ? storeCreator.map((value) => (
                  <Nav.Link as={Link} to={value.to}>
                    {value.name}
                  </Nav.Link>
                ))
              : null}
          </Nav>
          {role === "Customer" ? (
            <div>
              <Button
                variant="contained"
                onClick={showModal}
                sx={{ backgroundColor: "rgb(55, 139, 139) " }}
              >
                Cart
              </Button>

              <Button
                variant="contained"
                onClick={showModal}
                sx={{ backgroundColor: "rgb(55, 139, 139) " }}
              >
                Logout
              </Button>
            </div>
          ) : role === "store Creator" ? (
            <>
              <Button
                variant="contained"
                onClick={showModal}
                sx={{ backgroundColor: "rgb(55, 139, 139) " }}
              >
                Create Store
              </Button>
              <Button
                sx={{ marginLeft: 5, backgroundColor: "rgb(55, 139, 139)" }}
                variant="contained"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
};
