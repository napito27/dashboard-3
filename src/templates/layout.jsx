import Grid from '@mui/material/Unstable_Grid2';

import { Box, CssBaseline } from '@mui/material';

import "../styles/app.css";

function Layout({ children }) {
  const [navigation, search, header, userInput, thread, subscribe, happening, follow] = children;

  return (
    <Box style={{ textAlign: "center" }}>
      <CssBaseline />
      <Grid container style={{ flexGrow: 1, margin:'0 130px' }}>
        
        {/** column 1*/ }
        <Grid item flexBasis={280} >
          <Grid xs={12}>
            { navigation }
          </Grid>
        </Grid>

        {/** column 2 */}  
        <Grid item container flexBasis={600} 
          className='body-inner-container scroll-container'
        >
          <Grid item xs={12} >
            { header }
          </Grid>
          <Grid item xs={12}>
            { userInput }
          </Grid>
          <Grid item xs={12} 
          >
            { thread }
          </Grid>
        </Grid>

        {/** column 3 */}  
        <Grid item container flexBasis={370} rowSpacing={2}
          className='scroll-container'
          sx={{padding:'0 0 0 32px', height:'100vh', overflowY:'auto'}}
        >
          <Grid item xs={12} sx={{paddingTop:"0"}}>
            { search }
          </Grid>
          <Grid item xs={12}>
            { subscribe }
          </Grid>
          <Grid item xs={12}>
            { happening }
          </Grid>
          <Grid item xs={12}>
            { follow }
          </Grid>
        </Grid> 
      </Grid>
    </Box>
  );
}

export default Layout;