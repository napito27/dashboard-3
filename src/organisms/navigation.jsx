import {useLogout} from '../hooks/useLogout';

import { 
  Avatar, 
  Box, 
  IconButton, 
  MenuList 
} from '@mui/material';

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

function Navigation({avatar, themeMode}) {
  const {logout} = useLogout();

  return (
    <Box className="nav-container scroll-container">
      <IconButton className='logo-btn'>
      <img alt='X logo' src={logo} 
        style={{ width:'100%', filter: themeMode === 'dark' ?  'invert(1)' : '' }}/>
      </IconButton>

      <MenuList className='nav-menu-list'>
        <a href='/' className=' nav-menu-item'>
          <HomeOutlined className='nav-menu-icon'/>
          <span>Home</span>
        </a>
        
        <a href='/explore' className=' nav-menu-item'>
          <SearchOutlined className='nav-menu-icon'/>
          <span>Explore</span>
        </a>

        <a href='/notifications' className=' nav-menu-item'>
          <NotificationsNoneOutlined className='nav-menu-icon'/>
          <span>Notifications</span>
        </a>

        <a href='/messages' className=' nav-menu-item'>
          <MailOutlineOutlined className='nav-menu-icon'/>
          <span>Messages</span>
        </a>

        <a href='/grok' className=' nav-menu-item'>
          <OpenInNewOutlined className='nav-menu-icon'/>
          <span>Grok</span>
        </a>

        <a href='/lists' className=' nav-menu-item'>
          <FeaturedPlayListOutlined className='nav-menu-icon'/>
          <span>Lists</span>
        </a>

        <a href='/communities' className=' nav-menu-item'>
          <PeopleOutlined className='nav-menu-icon'/>
          <span>Communities</span>
        </a>

        <a href='/premium' className=' nav-menu-item'>
          <img src={logo} alt='X logo' className='premium-icon'
            style={{filter: themeMode === 'dark' ?  'invert(1)' : '' }}
          />
          <span>Premium</span>
        </a>

        <a href='/profile' className=' nav-menu-item'>
          <PermIdentityOutlined className='nav-menu-icon'/>
          <span>Profile</span>
        </a>

        <a href='/more' className=' nav-menu-item'>
          <PendingOutlined className='nav-menu-icon'/>
          <span>More</span>
        </a>

      </MenuList>

      <button className='btn'>Post</button>

      <Box className='user-name-btn'>
        <Avatar src={avatar} alt='user avatar'/>
        <Box>
          <span>userName</span>
          <span>@userId</span>
        </Box>
        <MoreHorizOutlined onClick={logout}/>
      </Box>
    </Box>  
  );
}

export default Navigation;