import Footer from '../footer/footer';

import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '../../utils/x_new_logo.png';
import google from '../../utils/google-icon.ico';
import apple from '../../utils/apple-icon.ico';

// styles
import './home.css';

function Home() {

  return (
    <Box>
      <Box className='container'>
        <Box className='logo'>
          <img src={logo} alt='X logo'/>
        </Box>
        <Box className='join-container'>
          <h1>Happening now</h1>
          <h5>Join today.</h5>
          <Box className='btn-container'>
            <button className='btn google-button'>
              <img src={google} alt='google logo'/>  Sign up with Google
            </button>
            <button className='btn apple-button'>
              <img src={apple} alt='apple logo'/> Sign up with Apple
            </button>
            <div className='hr-break'>
              <hr/> or <hr/>
            </div>
            <Link to='/signup' className='btn signup'>
              Create account
            </Link>
            <p className='agreement'>By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span>.</p>
            <p className='acct'>Already have an account?</p>
            <Link to='/signin' className='btn sign-in-button'>
              Sign in
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;