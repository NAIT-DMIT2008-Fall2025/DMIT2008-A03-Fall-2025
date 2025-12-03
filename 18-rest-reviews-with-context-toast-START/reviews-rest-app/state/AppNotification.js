import { useState, createContext, useContext } from 'react';
// import
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export const AppNotificationContext = createContext({})

// we can actually simplify this even further by creating our own hook.
export function useNotification() {
  // I'm going to get the context
  const context = useContext(AppNotificationContext)
  // throw an error if it's not in a AppNotfication wrapper.
  if (!context) {
    throw new Error('useNotification must be used within AppNotification')
  }
  // return the context
  return context
}


// we're wrap our entire application with this component.
export default function AppNotification({children}) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success")
  const [message, setMessage] = useState("")

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

  const showNotification = ({type, text}) => {
    if (!type) {
      type = "info"
    }
    setSeverity(type)
    setMessage(text)
    setOpen(true)
  }

  // pass my function into the provider value
  return <AppNotificationContext.Provider value={{showNotification}}>
    {children}
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  </AppNotificationContext.Provider>
}