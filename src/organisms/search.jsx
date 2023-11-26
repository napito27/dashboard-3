import React from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Box, InputBase } from '@mui/material';

import "../styles/app.css";

function Search() {

  return (
    <Box className="search-container">
      <SearchOutlinedIcon />
      <InputBase className='search-input' placeholder="Search"/>
    </Box>
  );
}

export default Search;