// I want you to use a basic app bar
// with no login button
// that will take a title as a prop
// use https://mui.com/material-ui/react-app-bar/#basic-app-bar
// add to home page.
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar({ title }) {

  return <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App bar: {title}

        </Typography>
      </Toolbar>
    </AppBar>

  </Box>
}