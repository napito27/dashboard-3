import {  Box, IconButton, Tooltip } from '@mui/material';

import { Verified, MoreHorizOutlined, } from '@mui/icons-material';

function ThreadUserInfo({ user, id }) {

  return (
    <Box sx={{display:'flex'}}>
      <Box className='thread-user-info' >
        <span>{user}</span>
        <Verified fontSize='small' className='button-icon'/>
        <span>@{id}</span>
      </Box>
      <Tooltip title="More">
        <IconButton className='thread-icon-more' 
          sx={{color:'#4B4E52', padding:'0'}}
        >
          <MoreHorizOutlined />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default ThreadUserInfo;