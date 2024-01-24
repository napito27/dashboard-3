import React from 'react';

// external libraries
import {Brightness4} from '@mui/icons-material';
import {ThemeProvider, createTheme} from '@mui/material';

// customized components
import Follow from '../atoms/follow';
import Happening from '../atoms/happening';
// import Header from "../atoms/header";
import Home from './home/home';
import Layout from "../templates/layout";
import Navigation from "../organisms/navigation";
// import UserInput from '../organisms/create-new-twitt';
import Search from "../organisms/search";
import SignIn from './login/sign-in';
import Signup from './signup/signup';
import Subscribe from '../atoms/subscribe';
// import Thread from '../atoms/thread';

// images
import avatar from '../utils/man-beard.webp';

// styles
import '../styles/styles.scss';

// utilities
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import PostsDisplay from '../organisms/posts-display';
import { useAuthContext } from '../hooks/useAuthContext';
import Dashboard from '../organisms/dashboard';

const themeFont = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  
  MuiTooltip: {
    tooltip: {
      fontSize: '30px', 
    },
  }, 
});

function App () {
  const [theme, setTheme] = React.useState('light');
  const [postData, setPostData] = React.useState([]);
  // const [signin, setSignin] = React.useState(false);
  const {user, authIsReady} = useAuthContext();

  React.useEffect(() => {
    async function fetchPostData() {
      const response = await fetch("http://localhost:3006/post");
      const data = await response.json();
      
      setPostData(data);
    }
    
    fetchPostData();
  }, []);

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  // const handleVisible = () => {
  //   setSignin(true);
  // }

  return (
    <ThemeProvider 
      theme={themeFont}
    >
      <div className={theme}>
        <Brightness4 
          onClick={toggleTheme}
          className='theme-mode'
        />
        {/* {authIsReady && ( */}
          {/* <BrowserRouter>
            <Routes>
              <Route 
                path='/' 
                element={<Home />}
                // element={user ? <Dashboard /> : <Navigate to="/Home" />}
              />
              <Route 
                path='/signup' 
                element={<Signup />}
                // element={!user ? <Navigate to="/signup" /> : <Dashboard />}
              />
              <Route 
                path='/signin' 
                // element={!user ? <Navigate to="/login" /> : <Dashboard />}
                element={<SignIn />}
                // onClick={handleVisible}
              /> 
              {/* <Route 
                path='/dashboard'
                element={}
              /> */}
            {/* </Routes>        
          </BrowserRouter> */}
        {/* )}   */}
          <Layout>
            <Navigation themeMode={theme} avatar={avatar}/>
            <Search />
            <PostsDisplay avatar={avatar} data={postData}/>
            <Subscribe theme={theme}/>
            <Happening />
            <Follow avatar={avatar}/>
          </Layout>
      </div>
    </ThemeProvider>
  );
};

export default App;
