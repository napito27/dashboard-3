import {  Box, IconButton, Tooltip } from '@mui/material';

import {
  FavoriteBorderOutlined,
  RepeatOutlined,
  FileUploadOutlined,
  BarChartOutlined,
  BookmarkBorder,
  ModeCommentOutlined
} from '@mui/icons-material';

function PostsIcons({ replies, reposts, likes, views }) {

  return (
    <Box className='thread-icon-container'>

      <Tooltip title="Reply" >
        <Box role='button' className='post-icon-box'>
          <IconButton className='reply-icon'>
            <ModeCommentOutlined className='icon-color reply'/>
          </IconButton>
          <span className='replies'>{replies}</span>
        </Box>
      </Tooltip>

      <Tooltip title="Repost" >
        <Box role='button' className='post-icon-box'>
          <IconButton className='repost-icon'>
            <RepeatOutlined className='icon-color repost'/>  
          </IconButton>
          <span className='reposts'>{reposts}</span>
        </Box>
      </Tooltip>

      <Tooltip title="Like" >
        <Box role='button' className='post-icon-box'>
          <IconButton className='likes-icon'>
            <FavoriteBorderOutlined className='icon-color like'/> 
          </IconButton>
          <span className='likes'>{likes}</span>
        </Box>
      </Tooltip>

      <Tooltip title="view" >
        <Box role='button' className='post-icon-box'>
          <IconButton className='views-icon'>
            <BarChartOutlined className='icon-color view'/>
          </IconButton>
            <span className='views'>{views}</span>
        </Box>
      </Tooltip>
      
      <Box className='book-share-icons'>
        <Tooltip title="Bookmark" >
          <IconButton className='bookmark-icon'>
            <BookmarkBorder className='icon-color bookmark'/>
          </IconButton>
        </Tooltip>

        <Tooltip title="Share" disableTouchListener>
          <IconButton className='share-icon'>
            <FileUploadOutlined className='icon-color share'/>
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default PostsIcons;