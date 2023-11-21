import React from 'react';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import { Avatar, Box, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

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
          <Avatar style={{backgroundColor: "white", color: "black"}}>X</Avatar>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <HomeOutlinedIcon />
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <SearchOutlinedIcon />
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <NotificationsNoneOutlinedIcon />
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <MailOutlineOutlinedIcon />
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <FeaturedPlayListOutlinedIcon />
            <ListItemText primary="Lists" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <PeopleOutlinedIcon />
            <ListItemText primary="Communities" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <ClearOutlinedIcon />
            <ListItemText primary="Premium" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <PermIdentityOutlinedIcon />
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton className='list-button'>
            <PendingOutlinedIcon />
            <ListItemText primary="More" />
          </ListItemButton>
        </ListItem>
      </List>
      <Button variant="contained" style={{borderRadius:"32px", padding:"8px 64px"}}>Post</Button>
    </Box>  
  );
}

export default Navigation;