// create the component docs
// with three props
// - a title
// - body (which is going to take some jsx as the value)
// - actions (which is also going to be some jsx)
// use the Card from MUI to do this.
// docs here: https://mui.com/material-ui/react-card/
// all of these below are from mui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


export default function CustomCard({title, body, actions}) {
    // we need to return a card
    return <Card>
        <CardContent>
            {/* we're going to add a title
            Note the component below is using the sx prop which is a styling
            prop for MUI, this is custom and takes an object
            */}
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {title}
            </Typography>
            {/* we're going to actually pass jsx into our component into the prop body*/}
            {body}
        </CardContent>
        <CardActions>
            {/* we're doing the same as the above. */}
            {actions}
        </CardActions>
    </Card>
}
