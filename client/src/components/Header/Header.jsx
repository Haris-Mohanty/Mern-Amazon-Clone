import React from "react";
import "./HeaderStyles.css";
import { AppBar, Box, Toolbar } from "@mui/material";
// import { Link } from "react-router-dom";
import logo from "../../Assets/amazon.png";

const Header = () => {
  return (
    <>
      <AppBar component={"nav"}>
        <Toolbar>
          <Box className="left">
            <Box width={"14%"}>
              {/* <Link to={"/"}> */}
                <img src={logo} alt="mern amazon logo" width={"100%"} />
              {/* </Link> */}
            </Box>
          </Box>
          <Box className="right"></Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
