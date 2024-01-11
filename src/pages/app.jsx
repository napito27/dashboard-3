import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material';

import Header from "../atoms/header";
import Layout from "../templates/layout";
import Navigation from "../organisms/navigation";
import UserInput from '../organisms/user-input';
import Search from "../organisms/search";
import Thread from '../atoms/thread';

import avatar from '../utils/man-beard.webp';
import Follow from '../atoms/follow';
import Happening from '../atoms/happening';
import Subscribe from '../atoms/subscribe';
import Home from './home/home';

import "../styles/app.css";
import { BorderOuter, Brightness4 } from '@mui/icons-material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './signup/signup';
import SignIn from './login/sign-in';

const themeFont = createTheme({
  typography: {
    fontFamily: 'Open Sans',
  }
});

const App = () => {
  const [theme, setTheme] = React.useState('light');
  const [postData, setPostData] = React.useState([])

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

  return (
    <ThemeProvider 
      theme={themeFont}
    >
      <div className={theme}>
        <Brightness4 
          onClick={toggleTheme}
          className='theme-mode'
        />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/signin' element={<SignIn />}/>            
          </Routes>        
        </BrowserRouter>
        {/* <Layout>
          <Navigation onClick={toggleTheme} themeMode={theme} avatar={avatar}/>
          <Search />
          <Header/>
          <UserInput avatar={avatar}/>
          <Thread avatar={avatar} data={postData}/>
          <Subscribe theme={theme}/>
          <Happening />
          <Follow />
        </Layout> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
