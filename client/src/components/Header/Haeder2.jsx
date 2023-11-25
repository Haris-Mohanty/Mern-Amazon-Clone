import { Box, Typography } from "@mui/material";
import React from "react";
import Nav from "../../Assets/nav.jpg";

const Haeder2 = () => {
  return (
    <Box sx={{ bgcolor: "#232F3E", mt: 8 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flex: 1,
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Typography variant="body2">All</Typography>
          <Typography variant="body2">Mobiles</Typography>
          <Typography variant="body2">BestSellers</Typography>
          <Typography variant="body2">Fashion</Typography>
          <Typography variant="body2">Customer Service</Typography>
          <Typography variant="body2">Electronics</Typography>
          <Typography variant="body2">Prime</Typography>
          <Typography variant="body2">Today's Deals</Typography>
          <Typography variant="body2">Amazon Pay</Typography>
        </Box>
        <Box>
          <img src={Nav} alt="Nav" />
        </Box>
      </Box>
    </Box>
  );
};

export default Haeder2;
