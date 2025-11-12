
import {useRouter} from 'next/router'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';


import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function About() {
    const router = useRouter()
    // what does the router have
    console.log(router)

    const { search } = router.query

    return <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            We Love Quotes
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        justifyContent="center"
        maxWidth
        sx={{
          bgcolor: 'background.paper',
          p: 10,
        }}
      >
        <Typography variant="h2">
          About
        </Typography>
        <br/>
        <Typography variant="p">
          {"All we care about is quotes that's it that's all."}
          <br/>
          search is: {search}
        </Typography>
      </Box>
    </>
}