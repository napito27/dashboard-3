import React from 'react';

import {useSignin} from '../../hooks/useLogin';

import {Box, Tooltip} from '@mui/material';
import {Close} from '@mui/icons-material';

import {ImgButton} from '../../atoms/button';

import logo from '../../utils/logo-twitter.png';
import google from '../../utils/google-icon.ico';
import apple from '../../utils/apple-icon.ico';

import './sign-in.css';

import {Link} from 'react-router-dom';

function SignIn({onClick}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {error, login} = useSignin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
            onClick={onClick}
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
          <button className="btn">Sign in</button>
          {error && <p>{error}</p>}
        </form>
        </Box>
      </div>
    </Box>
  );
}

export default SignIn;