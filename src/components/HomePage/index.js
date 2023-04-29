import React from "react";
import DefaultLoader from "../Common/loader";
import { Box, Button, Typography } from "@mui/material";
import { CommonSection } from "./styles";

const HomePage = (props) => {
  const {
    allBlogsLoading,
    handleAllBlogsClick,
    handleBlogClick,
    featuredBlogs,
    MAX_FEATURED_BLOGS,
  } = props;
  return (
    <Box>
      {allBlogsLoading && <DefaultLoader />}
      <CommonSection sx={{ mb: 2 }} elevation={1}>
        <Typography variant="h2" color="primary" marginBottom={5}>
          Developers Stop...
        </Typography>
        <Typography variant="h5" marginBottom={2}>
          Discover, Invent and Reinvent
        </Typography>
        <Typography variant="h6" marginBottom={2}>
          Blogs made to Read, Understand and Learn
        </Typography>
        <Button
          title="Start Reading"
          variant="contained"
          onClick={handleAllBlogsClick}
        >
          Start Reading
        </Button>
      </CommonSection>
      <CommonSection elevation={1}>
        <Typography variant="h5" marginBottom={2}>
          Blogs you may like
        </Typography>
        {!!featuredBlogs?.length &&
          featuredBlogs.slice(0, MAX_FEATURED_BLOGS).map((obj) => (
            <CommonSection key={obj.uuid} sx={{ mb: 2 }} elevation={2}>
              <Typography variant="h6">{obj.title}</Typography>
              <Typography variant="caption">
                <i>By: {obj.user}</i>
              </Typography>
              <br />
              <Button
                title="Read this"
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => handleBlogClick(obj)}
              >
                Read this
              </Button>
            </CommonSection>
          ))}
        <CommonSection
          elevation={2}
          sx={{ p: "0 !important", mb: 2 }}
          onClick={handleAllBlogsClick}
        >
          <Typography
            variant="h4"
            fontSize={24}
            fontWeight={600}
            padding={2}
            display="flex"
            justifyContent="space-between"
            title="Show All"
          >
            <Box>Show All</Box>
            <Box>&rarr;</Box>
          </Typography>
        </CommonSection>
      </CommonSection>
    </Box>
  );
};

export default HomePage;
