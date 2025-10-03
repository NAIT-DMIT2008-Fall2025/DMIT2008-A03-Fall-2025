
// I want you to read the docs and see if you can add
// a container: refer to docs here https://mui.com/material-ui/react-container/
import Container from '@mui/material/Container';
// a grid: https://mui.com/material-ui/react-grid/
import Grid from '@mui/material/Grid';
// a typography component with a title that says MUI example


// gut the index page
export default function Home() {
  return (
    <Container maxWidth="lg">

      <Grid container spacing={2}>
        <Grid size={12}>
          {/* we're going to put the title here */}
          <h1>Home</h1>
        </Grid>
      </Grid>
    </Container>
  );
}
