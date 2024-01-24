import { Box } from '@mui/material';

function PostBody({ body }) {

  return (
    <Box className='thread-body'> 
      {body}
    </Box>
  );
}

export default PostBody;