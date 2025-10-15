
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

// for the remove button
import IconButton from '@mui/material/IconButton';

const RANDOM_TODOS = [
  'create the list in mui',
  'get the text and update state.',
  'make sure we understand lists'
]

export default function Home() {
  // we're going to create a stateful
  // variable that will be in synced
  // up with our text field
  const [todoText, setTodoText] = useState('')
  // above we have state for the input
  // let's add some state here for the list
  // remember that on the right side you can put the data type into
  // the state as the original value.
  const [todoListItems, setTodoListItems] = useState(RANDOM_TODOS)
  // the original state here is the todos!


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
    // we're going to add to the existing items by setting a new list.
    const tempTodos = [
      ...todoListItems, // only copies the items for the array
      todoText
    ]
    console.log(tempTodos)
    // now that I have that list above
    // how can i change the value of todolist todoListItems
    // i'm going to call setTodoListItems
    setTodoListItems(tempTodos)
    // I can also reset the input here with setTodoText
    setTodoText('')
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
          {/* we're going to change RANDOM_TODOS to the
          stateful value of todoListItems
           */}
          {todoListItems.map((todo, index) => {
            // inside of this function we access to
            // todo and index.
            // this will be useful when we create the delete

            return <ListItem key={index}>
              {/* we're going to add a delete button
              to remove the stateful value. */}
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
