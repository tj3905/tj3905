import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  const handleDrawerToggle = () => {
    setMobileView(!mobileView);
  };

  const drawer = (
    <Box onclick={handleDrawerToggle} sx={{ textAlign: "center", bgcolor: "black" }}>
      <Typography
        color={"greenyellow"}
        component={"div"}
        variant="h5"
        sx={{ flexGrow: 1 , my: 2 }}
      >
        <RamenDiningIcon />
        My Resturant
      </Typography>
      <Divider sx={{ bgcolor: "greenyellow" }}/>
      <Divider sx={{ bgcolor: "greenyellow" }}/>
      <ul className="mobile-nav">
        <li>
          <NavLink activeClassName='active' to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <RestaurantMenuIcon />
            </IconButton>
            <Typography
              color={"greenyellow"}
              component={"div"}
              variant="h6"
              sx={{ flexGrow: 1 }}
            >
              <RamenDiningIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav-menu">
                <li>
                  <NavLink activeClassName='active' to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileView}
            onClose={handleDrawerToggle}
            sx={{display: { xs: 'block', sm: 'none'},
            "& .MuiDrawer-paper":{
              boxSizing: 'border-box',
              width: '240px',
            }}}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
        <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;
