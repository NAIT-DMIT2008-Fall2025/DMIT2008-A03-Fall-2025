
/*
use a MUI container
use an MUI GRID
i want a title with Typography
that will say "Our TodoList"

*/
import Container from '@mui/material/Container';
// the file in material will be the name of the component
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// note: add roboto it'll be a good idea.
import TextField from '@mui/material/TextField';

export default function Home() {
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
          />
          {/*  */}
        </Grid>
        <Grid size={10}>
          {/* my button */}

        </Grid>
      </Grid>
    </Container>
  );
}
