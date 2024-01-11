import React from 'react';

import { Avatar, Box, Button, IconButton } from '@mui/material';

import { 
  ImageOutlined,
  GifBoxOutlined,
  FormatListBulletedOutlined,
  SentimentSatisfiedAltOutlined,
  WorkHistoryOutlined,
  FmdGoodOutlined
} from '@mui/icons-material';

import NewTwitt from '../atoms/new-twitt.jsx';

import "../styles/app.css";

function UserInput({avatar}) {

  return (
    <Box className='input-container'>
      <Box className="input-avatar">
        <Avatar src={avatar} alt='user avatar'/>
      </Box>
      <Box sx={{flex:1}}>
        <NewTwitt />
        <Box className='icon-container' >
          <Box className='input-icon-list'>
            <IconButton >
              <ImageOutlined  
                className='button-icon'
              /> 
            </IconButton>
            <IconButton>
              <GifBoxOutlined 
                className='button-icon' 
              /> 
            </IconButton>
            <IconButton>
              <FormatListBulletedOutlined 
                className='button-icon' 
              /> 
            </IconButton>
            <IconButton>
              <SentimentSatisfiedAltOutlined 
                className='button-icon' 
              /> 
            </IconButton>
            <IconButton>
              <WorkHistoryOutlined 
                className='button-icon' 
              /> 
            </IconButton>
            <IconButton>
              <FmdGoodOutlined 
                className='button-icon'
              /> 
            </IconButton>
          </Box>
          {/* <Button 
            variant="contained" 
            style={{borderRadius:"100vmax", padding:"8px 24px"}}
          >
            Post
          </Button> */}
          <button className='btn' disabled >Post</button>
        </Box>
      </Box>
    </Box>
  );
}

export default UserInput;