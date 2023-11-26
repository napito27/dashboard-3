import React from 'react';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import { Avatar, Box, Button, InputBase, IconButton, Stack, Tab } from '@mui/material';

import "../styles/app.css";
import LabTabs from '../atoms/tabButtons.tsx';
import TabList from '@mui/lab/TabList';

const BUTTON_STYLES = {
  flex: 1,
  color: "#656A6E",
  fontWeight: "bold"
}

function Header() {

  return (
    <Box>
      <Box  className='header-title'>
        <h3>Home</h3>
      </Box>
      <LabTabs />
      {/* <Stack direction="row" >
          <Tab label="For you" style={BUTTON_STYLES}/>
          <Tab label="Following" style={BUTTON_STYLES}/>
      </Stack> */}
        {/* <Button variant="text" style={BUTTON_STYLES}>For you</Button>
        <Button variant="text" style={BUTTON_STYLES}>Following</Button> */}
      {/* <hr /> */}
      <Box className="input-header">
        <Avatar style={{backgroundColor: "#00589E"}}>V</Avatar>
        <InputBase placeholder="What is happening?!"/>
      </Box>
      <Box className='icon-container'>
        <Box className='header-icon-list'>
          <IconButton >
            <ImageOutlinedIcon  className='button-icon'/> 
          </IconButton>
          <IconButton>
            <GifBoxOutlinedIcon className='button-icon' /> 
          </IconButton>
          <IconButton>
            <FormatListBulletedOutlinedIcon className='button-icon' /> 
          </IconButton>
          <IconButton>
            <SentimentSatisfiedAltOutlinedIcon className='button-icon' /> 
          </IconButton>
          <IconButton>
            <WorkHistoryOutlinedIcon className='button-icon' /> 
          </IconButton>
          <IconButton>
            <FmdGoodOutlinedIcon className='button-icon' /> 
          </IconButton>
        </Box>
        <Button variant="contained" disabled style={{borderRadius:"32px", padding:"8px 32px"}}>Post</Button>
      </Box>
    </Box>
  );
}

export default Header;