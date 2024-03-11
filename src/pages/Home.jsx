import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box bgcolor={"grey"} height={"100%"} alignItems={"center"} display={"flex"} justifyContent={"center"}>
      <Typography p={"2rrem"} variant="h5" textAlign={"center"}>
        select a friend <br/><span> to chat</span>
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
