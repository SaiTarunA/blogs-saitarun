import React from "react";
import NavigationBar from "../components/Common/NavigationBar";
import { Box, Container } from "@mui/material";

/**
 * This is used to Maka a generic layout for
 * @example ../routes/PublicRoute.js
 *
 * Ex: Adding a Navigation Bar without Profile Icon in it, Adding Footer which will be for all Public Routes
 * @param {NodeList} children
 */
const PublicLayout = ({ children }) => {
  return (
    <Box>
      <NavigationBar isPublic={true} />
      <Container maxWidth="xl">
        <Box sx={{ my: 3 }}>{children}</Box>
      </Container>
    </Box>
  );
};

export default PublicLayout;
