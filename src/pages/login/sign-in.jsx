import React from 'react';

import { Box, Paper, Tooltip } from '@mui/material';
import { Close } from '@mui/icons-material';

import logo from '../../utils/logo-twitter.png';
import google from '../../utils/google-icon.ico';
import apple from '../../utils/apple-icon.ico';

import './sign-in.css';
import { Link } from 'react-router-dom';
import { Button, ImgButton } from '../../atoms/button';

function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <Box className='signin-container'>
      <div 
        className='signin-inner-container'
      >
        <Box>
          <Tooltip title='Close'>
            <Link to='/'>
              <Close />
            </Link>
          </Tooltip>
          <img src={logo} alt='logo'/>
        </Box>

        <Box className='button-container'>
          <h5>Sign in to X</h5> 

          <ImgButton 
            src={google}
            label='Sign in with Google'
            className='google-button btn'
          />

          <ImgButton 
            src={apple}
            label='Sign in with Apple'
            className='apple-button btn'
          />

          <div className='divider'><span></span> or <span></span></div>

          <form onSubmit={handleSubmit}>
          
            <input
              placeholder='Email'
              required
              type='email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          
            <input
              placeholder='Password'
              required
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          <Link 
            to='/signin' 
            className='btn sign-in'
          >
            Sign in
          </Link>
        </form>
        
          {/* <Link 
            to='/signup' 
            className='btn signup'
          >
            Create account
          </Link> */}
                    
        </Box>
      </div>
    </Box>
  );
}

export default SignIn;