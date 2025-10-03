
// I want you to read the docs and see if you can add
// a container: refer to docs here https://mui.com/material-ui/react-container/
import Container from '@mui/material/Container';
// a grid: https://mui.com/material-ui/react-grid/
import Grid from '@mui/material/Grid';
// a typography component with a title that says MUI example
// docs: https://mui.com/material-ui/react-typography/
import Typography from '@mui/material/Typography';

// Let's import our Card
import CustomCard from '@/components/CustomCard';

// gut the index page
export default function Home() {
  return (
    <Container maxWidth="lg">

      <Grid container spacing={2}>
        <Grid size={12}>
          {/* we're going to put the title here
          note component is the html element to be used here
          and variant is how it will look in the docs */}
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
          >
            Intro to MUI
          </Typography>
        </Grid>
        {/* Let's make a few items in the grid */}
        <Grid size={6}>
          <CustomCard
            title="A few components to use"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
