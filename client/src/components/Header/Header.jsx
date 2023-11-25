import React from "react";
import "./HeaderStyles.css";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import logo from "../../Assets/amazon.png";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import {NavLink} from 'react-router-dom'
import Haeder2 from "./Haeder2";

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
            <a to="/login">Sign in</a>
            </Box>
            <Box className="cart_btn">
              <IconButton aria-label="cart">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon sx={{ color: "#fff", mr: 0.7, mt: 0.3 }} />
                </Badge>
              </IconButton>
              <Typography variant="body2" sx={{fontWeight:"bold", mr:2}}>Cart</Typography>
            </Box>
            <Avatar className="avatar" />
          </Box>
        </Toolbar>
      </AppBar>
      <Haeder2/>
    </>
  );
};

export default Header;
