import ThreadBody from '../atoms/thread-body';
import ThreadIcons from '../atoms/thread-icons';
import ThreadUserInfo from '../atoms/thread-user-info';
import UserAvatar from '../atoms/user-avatar';

import { Avatar, Box } from '@mui/material';

function Post({ avatar, data }) {
  
  return ( 
    <Box sx={{width:'100%'}}>
      {data?.map((post, index) => (
        <Box 
          key={index} 
          className='post-container'
        >
          {/* <UserAvatar avatar={avatar}/> */}
          <Box >
            <Avatar src={avatar} alt='user avatar' />
          </Box>
          <Box sx={{flex: 1, padding:'0 0 0 16px'}}> {/** post body */}
            <ThreadUserInfo 
              user={post.user} 
              id={post.userId}
              />
            <ThreadBody 
              body={post.body}
              />
            <ThreadIcons 
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