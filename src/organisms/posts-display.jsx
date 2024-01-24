import { Box } from '@mui/material';

import CreateNewPost from './create-new-post'; 
import Header from '../atoms/header'; 
import Post from '../organisms/post'; 

function PostsDisplay({avatar, data}) {
  return (
    <Box className='body-inner-container scroll-container'>
      <Header />
      <CreateNewPost avatar={avatar}/>
      <Post avatar={avatar} data={data} />
    </Box>
  );
}

export default PostsDisplay;