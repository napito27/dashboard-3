import {  Box, IconButton, Tooltip } from '@mui/material';

import {
  FavoriteBorderOutlined,
  RepeatOutlined,
  FileUploadOutlined,
  BarChartOutlined,
  BookmarkBorder,
  ModeCommentOutlined
} from '@mui/icons-material';

const ICON_COLOR = {
  color:'#4B4E52'
}

function ThreadIcons({ replies, reposts, likes, views }) {

  return (
    <Box className='thread-icon-container'>
      <Box>
        <Tooltip title="Reply" >
          <div role='button' className='post-icon-cont'>
            <IconButton 
              sx={ICON_COLOR} 
              className='reply-icon'
            >
              <ModeCommentOutlined />
            </IconButton>
              <span className='replies'>{replies}</span>
          </div>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Repost" >
          <div role='button' className='post-icon-cont'>
            <IconButton 
            sx={ICON_COLOR}
            className='repost-icon'
            >
              <RepeatOutlined />  
            </IconButton>
            <span className='reposts'>{reposts}</span>
          </div>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="Like" >
          <div role='button' className='post-icon-cont'>
            <IconButton 
              sx={ICON_COLOR}
              className='likes-icon'
            >
              <FavoriteBorderOutlined /> 
            </IconButton>
            <span className='likes'>{likes}</span>
          </div>
        </Tooltip>
      </Box>
      <Box>
        <Tooltip title="view" >
          <div role='button' className='post-icon-cont'>
            <IconButton 
              sx={ICON_COLOR} 
              className='views-icon'
            >
              <BarChartOutlined />
            </IconButton>
              <span className='views'>{views}</span>
          </div>
        </Tooltip>
      </Box> 
      <Box className='book-share-icons'>
        <Tooltip title="Bookmark" >
          <div role='button' className='bookmark'>
            <IconButton 
              sx={ICON_COLOR} 
              className='bookmark-icon'
            >
              <BookmarkBorder />
            </IconButton>
          </div>
        </Tooltip>
        <Tooltip title="Share" disableTouchListener>
          <div role='button' className='share'>
            <IconButton 
              sx={ICON_COLOR} 
              className='share-icon'
            >
              <FileUploadOutlined />
            </IconButton>
          </div>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default ThreadIcons;