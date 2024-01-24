import {  Box, IconButton, Tooltip } from '@mui/material';

import { Verified, MoreHorizOutlined, } from '@mui/icons-material';

function PostUserInfo({ user, id }) {

  return (
    <Box className='post-user-info' >

      <Box className='thread-user-info' >
        <span>{user}</span>
        <Verified fontSize='medium' className='verified-icon'/>
        <span>@{id}</span>
      </Box>

      <Tooltip title="More">
        <IconButton className='post-icon-more'>
          <MoreHorizOutlined className='more-icon'/>
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default PostUserInfo;