import React from 'react';

import { Avatar, Box, Button, IconButton, ListItemText, MenuItem, MenuList } from '@mui/material';

import { 
  HomeOutlined,
  SearchOutlined,
  NotificationsNoneOutlined,
  MailOutlineOutlined,
  FeaturedPlayListOutlined,
  PeopleOutlined,
  PermIdentityOutlined,
  PendingOutlined,
  BookmarkBorder,
  OpenInNewOutlined,
  MoreHorizOutlined
} from '@mui/icons-material';

import logo from '../utils/x-logo.ico';

import "../styles/app.css";

const menu_items = {
  fontSize: "28px",
  borderRadius: "100vmax",
  gap: "16px",
  padding: "10px 24px 10px 12px",
  width: "max-content",
  "&:hover": {
    backgroundColor: "rgba(24, 24, 24, 0.7)",
    color: "#fff",
  }
}

const primary_text = {
  fontWeight: "400",
  fontSize: "20px",
  textAlign: "left"
}

const secondary_text = {
  fontWeight: "400",
  fontSize: "14px",
  textAlign: "left",
  color: "gray"
}

function Navigation({onClick, themeMode, avatar}) {

  return (
    <Box className="nav-container scroll-container">
      <IconButton 
        sx={{width:'40px', height:'40px', borderRadius:'50%', padding:'0px', marginLeft:'10px',
          "&:hover": {
            backgroundColor: "rgba(24, 24, 24, 0.7)",
            color: "#fff",
          }
        }}
      >
      <img alt='X logo' src={logo} 
        style={{ width:'100%', filter: themeMode === 'dark' ?  'invert(1)' : '' }}
      />
      </IconButton>

      <MenuList sx={{ textAlign:'left', fontWeight:'800'}}>
        <MenuItem sx={menu_items}>
          <HomeOutlined fontSize='inherit'/>
          <ListItemText 
            primary="Home" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>

        <MenuItem sx={menu_items}>
          <SearchOutlined fontSize='inherit'/>
          <ListItemText 
            primary="Explore" 
            primaryTypographyProps={{ style: primary_text }} 
          />
        </MenuItem>

        <MenuItem sx={menu_items}>
          <NotificationsNoneOutlined fontSize='inherit'/>
          <ListItemText 
            primary="Notifications" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
        <MenuItem sx={menu_items}>
          <MailOutlineOutlined fontSize='inherit'/>
          <ListItemText 
            primary="Messages" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
        <MenuItem sx={menu_items}>
          <OpenInNewOutlined fontSize='inherit'/>
          <ListItemText 
            primary="Grok" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
        <MenuItem sx={menu_items}>
          <FeaturedPlayListOutlined fontSize='inherit'/>
          <ListItemText 
            primary="Lists" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
        <MenuItem sx={menu_items}>
          <BookmarkBorder fontSize='inherit'/>
          <ListItemText 
            primary="Bookmarks" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
        <MenuItem sx={menu_items}>
          <PeopleOutlined fontSize='inherit'/>
          <ListItemText 
            primary="Communities" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
        <MenuItem sx={menu_items}>
          {/* <PeopleOutlined fontSize='inherit'/> */}
          <IconButton 
            sx={{width:'40px', height:'40px', borderRadius:'50%', padding:'0px', marginLeft:'-7px'
            }}
          >
          <img alt='X logo' src={logo} 
            style={{ width:'100%', filter: themeMode === 'dark' ?  'invert(1)' : '' }}
          />
      </IconButton>
          <ListItemText 
            primary="Premium" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
        <MenuItem sx={menu_items}>
          <PermIdentityOutlined fontSize='inherit'/>
          <ListItemText 
            primary="Profile" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
        <MenuItem sx={menu_items}>
          <PendingOutlined fontSize='inherit'/>
          <ListItemText 
            primary="More" 
            primaryTypographyProps={{ style: primary_text }}
          />
        </MenuItem>
      </MenuList>

      <button className='btn'>Post</button>

      <MenuItem 
        onClick={onClick}
        sx={menu_items} 
        style={{padding:'4px 16px', margin:'20px 0px', width:'100%'}}
      >
        <Avatar src={avatar} alt='user avatar'/>
        <ListItemText 
          primary="User" 
          secondary="@UserID" 
          primaryTypographyProps={{ style: primary_text }}
          secondaryTypographyProps={{ style: secondary_text }}
        />
        <MoreHorizOutlined />
      </MenuItem>
    </Box>  
  );
}

export default Navigation;