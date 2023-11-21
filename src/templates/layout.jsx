import React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Box, CssBaseline, Paper } from '@mui/material';

import "../styles/app.css";

function Layout( {children}) {
  const [navigation, search, header] = children;

  return (
    <Box style={{textAlign: "center"}}>
      <CssBaseline />
      <Grid container style={{paddingLeft: "5vw", paddingRight: "5vw", flexGrow: 1}} justifyContent={'center'} spacing={2}>
        
        {/** column 1*/ }
        <Grid item flexBasis={220} >
          <Grid xs={12}>
            {navigation}
          </Grid>
        </Grid>

        {/** column 2 */}  
        <Grid item container flexBasis={630} rowSpacing={2} >
            <Grid item xs={12}>
              {header}
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: "147px", background: "lightgray" }}> User Input</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: "440px", background: "lightgray" }}> Thread</Paper>
            </Grid>
        </Grid>

        {/** column 3 */}  
        <Grid item container flexBasis={380} rowSpacing={2}>
          <Grid item xs={12} sx={{paddingTop:"16px"}}>
            {search}
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "110px", background: "lightgray" }}> Container 1</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "385px", background: "lightgray" }}> Container 2</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "110px", background: "lightgray" }}> Container 3</Paper>
          </Grid>
        </Grid> 
      </Grid>
    </Box>
  );
}

export default Layout;