import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Box, InputBase } from '@mui/material';

function Search() {

  return (
    <Box className="search-container">
      <SearchOutlinedIcon  />
      <InputBase 
        className='search-input' 
        placeholder="Search"
        type='text'
      />
    </Box>
  );
}

export default Search;