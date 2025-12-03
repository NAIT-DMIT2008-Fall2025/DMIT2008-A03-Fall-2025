import { useState, createContext } from 'react';
// import
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const AppNotificationContext = createContext({})


// we're wrap our entire application with this component.
export default function AppNotification({children}) {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // after the break we're going to use context
  // to share functionality to open the snackbar message with
  // a custom message and custom color
  // we're going to make this a hook.

  return <AppNotificationContext.Provider value={{}}>
    {children}
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        This is a success Alert inside a Snackbar!
      </Alert>
    </Snackbar>
  </AppNotificationContext.Provider>
}