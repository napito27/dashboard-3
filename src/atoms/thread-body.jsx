import { Box } from '@mui/material';

function ThreadBody({ body }) {

  return (
    <Box className='thread-body'> 
      {body}
    </Box>
  );
}

export default ThreadBody;