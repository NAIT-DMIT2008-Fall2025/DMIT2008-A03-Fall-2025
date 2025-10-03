
// I want you to read the docs and see if you can add
// add the alert
import Alert from '@mui/material/Alert';

// a container: refer to docs here https://mui.com/material-ui/react-container/
import Container from '@mui/material/Container';
// a grid: https://mui.com/material-ui/react-grid/
import Grid from '@mui/material/Grid';
// a typography component with a title that says MUI example
// docs: https://mui.com/material-ui/react-typography/
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';

// icon used
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';

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
          {/* in react you can actually pass in
            jsx as a prop to another component.
          */}
          <CustomCard
            title="A few components to use"
            body={<div>
              {/* we're passing in jsx
                I want you to add an alert and a button
                button here from mui
              */}
              <Alert
                icon={<AirlineSeatFlatIcon />}
                severity='warning'
              >
                Dans Voice might cause sleepiness.
              </Alert>
              <Button variant="contained">
                Remove sleepiness
              </Button>
            </div>}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
