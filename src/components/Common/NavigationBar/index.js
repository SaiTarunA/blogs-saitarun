import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import React from "react";
import ThemeChanger from "./ThemeChanger";
import LogoContainer from "./LogoContainer";
import MenuIcon from "@mui/icons-material/Menu";
import { changeThemeMode } from "../../../app/actions";
import { connect } from "react-redux";
import { CONFIG } from "../../../config";
import { useNavigate } from "react-router-dom/dist";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

/**
 * This is the Navigation Bar. We use this in all the pages(Public and Private).
 *
 * @param {string} mode
 */
const NavigationBar = (props) => {
  const config = CONFIG.NavigationBar;
  const pages = config.NavLinks;
  const settings = config.ProfileSettings;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link) => {
    if (link) {
      navigate(link);
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (link) => {
    if (link) {
      navigate(link);
    }
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <LogoContainer />
              </Box>

              {!!pages?.length && (
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    title="Menu"
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={() => handleCloseNavMenu()}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page.name}
                        onClick={() => handleCloseNavMenu(page.link)}
                      >
                        <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <LogoContainer />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    title={page.name}
                    key={page.name}
                    onClick={() => handleCloseNavMenu(page.link)}
                    sx={{ my: 2, display: "block" }}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>

              <Box display="flex" alignItems="center" sx={{ flexGrow: 0 }}>
                <ThemeChanger
                  mode={props.mode}
                  changeThemeMode={props.changeThemeMode}
                />
                {!props.isPublic && !!settings?.length && (
                  <IconButton
                    title="Open Settings"
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                )}
                {!props.isPublic && !!settings?.length && (
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={() => handleCloseUserMenu()}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting.name}
                        onClick={() => handleCloseUserMenu(setting.link)}
                      >
                        <Typography textAlign="center">
                          {setting.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { common } = state;
  return {
    mode: common.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeThemeMode: (type, mode) => {
      dispatch(changeThemeMode(type, mode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
