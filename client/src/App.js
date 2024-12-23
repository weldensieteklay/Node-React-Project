import React, { useState } from 'react';
import {
  // CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Box,
  // ThemeProvider,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Profile from './components/common/Profile';
import ErrorBoundary from './components/common/ErrorBoundary';
import HomePage from './components/HomePage';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from './hooks/AuthContext';
import Menu from './routes/Menu';

const App = () => {
  const { logout, user } = useAuth(); 
  const [menuOpen , setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = ()=>{
     setMenuOpen(!menuOpen)
  }


  return (
 
      <ErrorBoundary>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            overflowX: 'hidden',
          }}
        >
          <AppBar position="static">
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <a href="/">
                  <HomeIcon style={{ cursor: 'pointer', color: 'white' }} />
                </a>
                {user?.token && (
                       <MenuIcon 
                          onClick={toggleMenu}
                          style={{ cursor: 'pointer', marginLeft: '16px' }}
                        />
                  
                )}
              </Box>
              {user?.token && (
                <>
                  <Box
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Profile
                      fullName={user.first_name + ' ' + user.last_name}
                      onLogout={handleLogout}
                    />
                  </Box>
                </>
              )} 
            </Toolbar>
          </AppBar>
          {user?. token && (
          <Menu open={menuOpen} onClose={toggleMenu} data={user}/>
          )}
          {!user?.token ? (
            <Box style={{ flex: 1, overflow: 'auto' }}>
              <HomePage />
            </Box>
          ) : (
            <Box style={{ flex: 1, overflow: 'auto' }} />
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
