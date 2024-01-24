import React from 'react';

import { Avatar, Box, IconButton, Tooltip, InputBase } from '@mui/material';

import { 
  ImageOutlined,
  GifBoxOutlined,
  FormatListBulletedOutlined,
  SentimentSatisfiedAltOutlined,
  WorkHistoryOutlined,
  FmdGoodOutlined,
  PublicOutlined
} from '@mui/icons-material';

function CreateNewPost({avatar}) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Box className='input-container'>
      <Box className="input-avatar">
        <Avatar src={avatar} alt='user avatar'/>
      </Box>
      <Box sx={{flex:1}}>

        <Box className='input-base-box'>
          <InputBase 
            type='text'
            placeholder="What is happening?!"
            onFocus={() => setIsActive(true)}
            // onBlur={() => setIsActive(false)}
            className='new-twitt-input'
          />

          {isActive && 
            <Box className='reply-options-btn'>
              <button>
                <PublicOutlined/> 
                  Everyone can reply
              </button>
              <hr />
            </Box>
          }
        </Box>

        <Box className='icon-container' >
          <Box className='input-icon-list'>
            <Tooltip title="Media" className='input-icon-btn'>
              <IconButton  >
                <ImageOutlined className='btn-icon'/>
              </IconButton>
            </Tooltip>

            <Tooltip title="GIF" className='input-icon-btn'>
              <IconButton  >
                <GifBoxOutlined className='btn-icon'/>
              </IconButton>
            </Tooltip>

            <Tooltip title="Poll" className='input-icon-btn'>
              <IconButton  >
                <FormatListBulletedOutlined className='btn-icon'/>
              </IconButton>
            </Tooltip>

            <Tooltip title="Emoji" className='input-icon-btn'>
              <IconButton  >
                <SentimentSatisfiedAltOutlined className='btn-icon'/>
              </IconButton>
            </Tooltip>

            <Tooltip title="Schedule" className='input-icon-btn'>
              <IconButton  >
                <WorkHistoryOutlined className='btn-icon'/>
              </IconButton>
            </Tooltip>

            <Tooltip className='input-icon-btn'>
              <IconButton  >
                <FmdGoodOutlined className='btn-icon'/>
              </IconButton>
            </Tooltip>
          </Box>

          <button className='btn' disabled >Post</button>

        </Box>
      </Box>
    </Box>
  );
}

export default CreateNewPost;