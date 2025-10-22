
// as a rule I want your components to be the same
// name as the file.


// we're just going to need to import the MUI
// components that we're using.
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// we're going to need to pass in movies as a prop
export default function MovieList({ movies }) {
  return <List sx={{width: `100%`}}>
      {/* the default value of movies is
      the MOVIE_LIST so we can change this to movies */}
      { movies.map((movieData, index)=> {
          return <ListItem key={index}>
            <ListItemText>
              <Typography variant="p" component="div">
                {movieData.name} ({movieData.year})
              </Typography>
            </ListItemText>
          </ListItem>
        })
      }
    </List>
}