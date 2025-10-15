
/*
use a MUI container
use an MUI GRID
i want a title with Typography
that will say "Our TodoList"

*/
// we are going import useState from react
import { useState } from 'react'

import Container from '@mui/material/Container';
// the file in material will be the name of the component
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// note: add roboto it'll be a good idea.
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// let's get the list item pieces
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Home() {
  // we're going to create a stateful
  // variable that will be in synced
  // up with our text field
  const [todoText, setTodoText] = useState('')

  const RANDOM_TODOS = [
    'create the list in mui',
    'get the text and update state.',
    'make sure we understand lists'
  ]


  // we're going to add an event handler
  // it's going to set the state of the todoText
  const textFieldHandler = (event) => {
    // for your purposes the event object
    // is essentially the same as plain old js.
    // we're going to set todoText
    setTodoText(event.target.value)
  }

  // is we're going to add an event
  // listener on the click of the
  // button.

  const addTodoToList = () => {
    console.log('clicked')
    // we're going create a new state and also loop over the items.
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant={'h2'}>
            Our TodoList
          </Typography>
        </Grid>

        <Grid size={10}>
          {/* my text field */}
          <TextField
            id="todo-input"
            label="What are you going to do?"
            variant="outlined"
            fullWidth
            onChange={textFieldHandler}
            value={todoText}
          />
          {/*
            1. above we're going to add an event listener
            that listen change
            2. set the value of the textfield to todoText

          https://mui.com/material-ui/react-text-field/#full-width */}
        </Grid>
        <Grid size={10}>
          {/* my button */}
          <Button
            variant="contained"
            onClick={addTodoToList}
          >
            Add Todo
          </Button>
        </Grid>
        {/* Let's add this list */}
        <List>
          {RANDOM_TODOS.map((todo, index) => {
            return <ListItem key={index}>
              <ListItemText
                primary={todo}
                secondary={`item at index ${index}`}
              />
            </ListItem>
          })}
        </List>
      </Grid>
    </Container>
  );
}
