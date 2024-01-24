import { Avatar, Box } from '@mui/material';

import PostBody from '../atoms/post-body';
import PostsIcons from '../atoms/posts-icons';
import PostUserInfo from '../atoms/post-user-info';


function Post({ avatar, data }) {
  
  return ( 
    <Box sx={{width:'100%'}}>
      {data?.map((post, index) => (
        <Box 
          key={index} 
          className='post-container'
        >
          <Box >
            <Avatar src={avatar} alt='user avatar' />
          </Box>
          <Box sx={{flex: 1, padding:'0 0 0 16px'}}>
            <PostUserInfo 
              user={post.user} 
              id={post.userId}
              />
            <PostBody 
              body={post.body}
              />
            <PostsIcons 
              replies={post.replies}
              reposts={post.reposts}
              likes={post.likes}
              views={post.views}
              />         
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Post;