import React from "react";
import NavigationBar from "../components/Common/NavigationBar";
import { Box, Container } from "@mui/material";

/**
 * This is used to Maka a generic layout for
 * @example ../routes/PrivateRoute.js
 *
 * Ex: Adding a Navigation Bar and Profile Icon in it, Adding Footer which will be for all Private Routes
 * @param {NodeList} children
 */
const PrivateLayout = ({ children }) => {
  return (
    <Box>
      <NavigationBar />
      <Container maxWidth="xl">
        <Box sx={{ my: 3 }}>{children}</Box>
      </Container>
    </Box>
  );
};

export default PrivateLayout;
