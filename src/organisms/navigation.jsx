import React from 'react';

import { Avatar, Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { 
  HomeOutlined,
  SearchOutlined,
  NotificationsNoneOutlined,
  MailOutlineOutlined,
  FeaturedPlayListOutlined,
  PeopleOutlined,
  PermIdentityOutlined,
  PendingOutlined
} from '@mui/icons-material';

import logo from '../utils/logo-twitter.png'

import "../styles/app.css";


  // borderRadius: "8px",
  // gap: "16px"
  // "&:hover": {
  //   backgroundColor: "#EFF3F4",
  //   fontWeight:"900"
  // }


function Navigation() {
  
  return (
    <Box className="navigation-container">
      <List>
        <ListItem >
          <Avatar alt='X logo' src={logo} />
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <HomeOutlined />
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <SearchOutlined />
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <NotificationsNoneOutlined />
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <MailOutlineOutlined />
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <FeaturedPlayListOutlined />
            <ListItemText primary="Lists" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <PeopleOutlined />
            <ListItemText primary="Communities" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{padding: "6px", gap: "10px"}} >
            <Avatar disablePadding alt='X logo' src={logo} />
            <ListItemText primary="Premium" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <PermIdentityOutlined />
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <PendingOutlined />
            <ListItemText primary="More" />
          </ListItemButton>
        </ListItem>
      </List>
      <Button variant="contained" style={{borderRadius:"32px", padding:"8px 64px"}}>Post</Button>
    </Box>  
  );
}

export default Navigation;