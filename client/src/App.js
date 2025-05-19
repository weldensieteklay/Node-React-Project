import React, { useState } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
import {
  // CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
<<<<<<< HEAD
  ThemeProvider,
=======
  // ThemeProvider,
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Profile from "./components/common/Profile";
import ErrorBoundary from "./components/common/ErrorBoundary";
import HomePage from "./components/HomePage";
<<<<<<< HEAD

import { useAuth } from "./hooks/AuthContext";

const App = () => {
  const { logout, user } = useAuth();
=======
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "./hooks/AuthContext";
import Menu from "./routes/Menu";
import { FaShoppingCart } from "react-icons/fa";
// import CartItems from './components/cart/CartItems';
import CartMenu from "./components/cart/CartMenu";
// import { useNavigate } from 'react-router-dom';
const App = () => {
  const { logout, user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679

  const handleLogout = () => {
    logout();
  };

<<<<<<< HEAD
=======
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
  return (
    <ErrorBoundary>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <a href="/">
                <HomeIcon style={{ cursor: "pointer", color: "white" }} />
              </a>
<<<<<<< HEAD
=======
              {user?.token && (
                <MenuIcon
                  onClick={toggleMenu}
                  style={{ cursor: "pointer", marginLeft: "16px" }}
                />
              )}
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
            </Box>
            {user?.token && (
              <>
                <Box
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
<<<<<<< HEAD
=======
                  <CartMenu />
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
                  <Profile
                    fullName={user.first_name + " " + user.last_name}
                    onLogout={handleLogout}
                  />
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
<<<<<<< HEAD
=======
        {user?.token && (
          <Menu open={menuOpen} onClose={toggleMenu} data={user} />
        )}
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
        {!user?.token ? (
          <Box style={{ flex: 1, overflow: "auto" }}>
            <HomePage />
          </Box>
        ) : (
<<<<<<< HEAD
          <Box style={{ flex: 1, overflow: "auto" }} />
=======
          <Box style={{ flex: 1, overflow: "auto" }}></Box>
>>>>>>> 1bbe259aa0fc66749efa6aeac34c899b4415f679
        )}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="body2" align="center">
              © 2023 My App. All rights reserved.
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ErrorBoundary>
  );
};

export default App;
