import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import userFormData from '../constants/userFormsData';
import AuthForm from './common/AuthForm';
import { useAuth } from '../hooks/AuthContext'; 


const signUpLinkStyle = {
  color: '#1976d2',
  textDecoration: 'underline', 
  cursor: 'pointer',
};

const HomePage = () => {

  const [isSignedUp, setIsSignedUp] = useState(false);
  const { userDetails } = useAuth()

  const handleSignUpClick = () => {
    setIsSignedUp(true);

  };
  const handleSignInClick = () => {
    setIsSignedUp(false);
  };

  const handleSubmit = (formData) => {
    userDetails(formData)
};

  return (
    <Container maxWidth="md" sx={{ paddingTop: 8, paddingBottom: 8, textAlign: 'center' }}>

      <Typography variant="h3" component="h1" gutterBottom>
        Welcome to Our Website
      </Typography>
      {!isSignedUp ? <AuthForm modeConfig={userFormData.signInConfig} handleSubmitProp={handleSubmit} /> : <AuthForm modeConfig={userFormData.signUpConfig} handleSubmitProp={handleSubmit}/>}
      <Box component='div' style={{ margin: '16px 0' }} />
      {!isSignedUp ? ( <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
        Don't have an account?{' '}
        <span onClick={handleSignUpClick} style={signUpLinkStyle}>
            Sign Up
        </span>
      </Typography>
       ) : (
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
        Already have an account?{' '}
        <span onClick={handleSignInClick} style={signUpLinkStyle}>
            Sign In
        </span>
      </Typography>
        )}
      
    </Container>
  );
}

export default HomePage;
