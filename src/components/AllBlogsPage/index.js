import {
  Box,
  Button,
  Chip,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DefaultLoader from "../Common/loader";
import { CommonSection } from "../HomePage/styles";
import SearchIcon from "@mui/icons-material/Search";

const AllBlogsPage = (props) => {
  const {
    allBlogsLoading,
    handleBlogClick,
    searchTerm,
    setSearchTerm,
    filteredBlogs,
  } = props;

  return (
    <Box>
      {allBlogsLoading && <DefaultLoader />}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ flexWrap: "wrap" }}
      >
        <Typography variant="h3" marginBottom={2}>
          All Blogs
        </Typography>
        <TextField
          sx={{ my: 2 }}
          id="input-with-icon-textfield"
          placeholder="Search Blogs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Box>

      {filteredBlogs.map((obj) => (
        <CommonSection key={obj.uuid} sx={{ mb: 1 }} elevation={2}>
          <Typography variant="h6">{obj.title}</Typography>
          <Typography variant="subtitle2">{obj.minRead} min Read</Typography>
          <Box
            display="fex"
            justifyContent="space-between"
            sx={{ flexWrap: "wrap", columnGap: 2 }}
          >
            <Typography variant="subtitle2">
              Keywords:{" "}
              {obj.keywords.map((word) => (
                <Chip
                  sx={{ m: 0.25 }}
                  label={word}
                  key={word}
                  variant="outlined"
                />
              ))}
            </Typography>
            <Typography variant="caption">
              <i>By: {obj.user}</i>
            </Typography>
          </Box>
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
    </Box>
  );
};

export default AllBlogsPage;
