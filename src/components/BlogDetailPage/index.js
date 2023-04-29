import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Error404 from "../../pages/Error404";
import DefaultLoader from "../Common/loader";
import { useStyles } from "./overrideStyles";

const BlogDetailPage = (props) => {
  const classes = useStyles();
  const { allBlogs, allBlogsLoading, blogDetail } = props;
  const [sections, setSections] = useState([]);

  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Get all elements with a tag name and add the className attribute
    if (blogDetail) {
      const elements = document.querySelectorAll("#div-block *");
      elements.forEach((element, index) => {
        const tagName = element.tagName.toLowerCase();
        if (classes[tagName]) {
          element.classList.add(classes[tagName]);
        }
      });
      const divElement = document.querySelector("#div-block"); // Select the div element by ID
      const h5Elements = divElement.querySelectorAll("h5");
      h5Elements.forEach((element, index) => {
        element.id = `section-${index + 1}`;
      });
      setSections(
        Array.from({ length: h5Elements.length }, (_, i) => `section-${i + 1}`)
      );
    }
  }, [classes, blogDetail]);

  const drawerWidth = 240;

  return (
    <React.Fragment>
      {allBlogsLoading && <DefaultLoader />}
      {blogDetail ? (
        <Box>
          <Grid container>
            <Grid item>
              <Drawer
                variant="permanent"
                sx={{
                  display: { xs: "none", md: "flex" },
                  width: drawerWidth,
                  flexShrink: 0,
                  [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    zIndex: 900,
                  },
                }}
              >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                  <List>
                    <ListItemText
                      sx={{
                        px: 2,
                        py: 1,
                        color: ({ palette }) => palette.primary.main,
                      }}
                      primary={"Blog Content"}
                    />
                    <Divider />
                    {sections.map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton
                          onClick={() => handleSectionClick(text)}
                        >
                          <ListItemText
                            primary={
                              document
                                .getElementById(text)
                                .querySelector("strong").innerHTML
                            }
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Grid>
            <Grid item xs={true}>
              <Typography variant="h3">{blogDetail.title}</Typography>
              <Box
                id="div-block"
                dangerouslySetInnerHTML={{ __html: blogDetail.jsxData }}
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Error404 />
      )}
    </React.Fragment>
  );
};

export default BlogDetailPage;
