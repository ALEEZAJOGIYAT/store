import { Container } from "@mui/material";
import React from "react";
import { NavBar } from "../../components/NavBar";
import { CreateStore } from "./CreateStore";

export const StoreHome = () => {
  return (
    <div sx={{ backgroundColor: "rgb(81, 147, 151)" }}>
      <div>
        <NavBar />
        <CreateStore />
      </div>
      {/* <Container>a</Container> */}
    </div>
  );
};
