import React from "react";
import "./HeaderStyles.css";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import logo from "../../Assets/amazon.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/icons-material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <>
      <AppBar component={"nav"} sx={{ bgcolor: "#131921" }}>
        <Toolbar>
          <Box
            className="left"
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            flex={".7"}
          >
            <Box width={"10%"} mt={0.7}>
              <img src={logo} alt="mern amazon logo" width={"100%"} />
            </Box>
            <Box className="nav_searchbaar">
              <input type="text" />
              <Box className="search_icon">
                <SearchIcon />
              </Box>
            </Box>
          </Box>
          <Box className="right">
            <Box className="nav_btn">
              <a href="#">SignIn</a>
            </Box>
            <Box className="cart_btn">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon className="icon" />
              </Badge>
              <p>Cart</p>
            </Box>
            <Avatar className="avatar" />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
