/* reference for material ui components used
https://mui.com/material-ui/react-card/#media

*/
import { useRouter } from 'next/router';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AgencyCard(props) {
  // import useRouter from next/router
  // create the variable router with the useRouter hook
  const router = useRouter()
  // create a function that will navigate to the page
  const navigateToAgencyPage = () => {
    // /agency/id (where the id is passed in)
    router.push(`/agency/${props.id}`)
  }

  // create a page using the dynamic path
  // that will take an id here.
  // get that id from router query (need useRouter)
  // print this out on the component.


  return <Card sx={{ marginTop: "8px", maxWidth: 345 }}>
    {props.imageUrl && <CardMedia
      component="img"
      height="140"
      image={props.imageUrl}
      alt="green iguana"
    />}
    <CardContent>
      <Typography variant="h5" component="div">
        {props.name}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        {props.abbreviation}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        onClick={navigateToAgencyPage}
        size="small"
      >Go to Agency</Button>
    </CardActions>
  </Card>
}