import { MoreHorizOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

function Happening() {

  return (
    <div className='happening-container'>
      <h3>What's happening</h3>

      <div>
        <div>
          <h5>Politics · Trending</h5>
          <h4>AR-15</h4>
          <p>7,327 posts</p>  
        </div>
        <Tooltip title="More">        
          <MoreHorizOutlined className='more-icon'/>       
        </Tooltip>
      </div>
      <div>
        <div>
          <h5>Politics · Trending</h5>
          <h4>AR-15</h4>
          <p>7,327 posts</p>  
        </div>
        <Tooltip title="More">        
          <MoreHorizOutlined className='more-icon'/>       
        </Tooltip>
      </div>
      <div>
        <div>
          <h5>Politics · Trending</h5>
          <h4>AR-15</h4>
          <p>7,327 posts</p>  
        </div>
        <Tooltip title="More">        
          <MoreHorizOutlined className='more-icon'/>       
        </Tooltip>
      </div>
      <div>
        <div>
          <h5>Politics · Trending</h5>
          <h4>AR-15</h4>
          <p>7,327 posts</p>  
        </div>
        <Tooltip title="More">        
          <MoreHorizOutlined className='more-icon'/>       
        </Tooltip>
      </div>
      <button>Show more</button>
    </div>
  );
}

export default Happening;