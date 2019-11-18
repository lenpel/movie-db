import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {Card, CardMedia, CardContent, IconButton, Typography} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const MovieDetail = (props) => {
    const poster_src =
      (props.currentMovie.Poster === 'N/A')?
        'empty_poster.png' : props.currentMovie.Poster;

    const style = {
        Card: { maxWidth: 500, margin: 'auto' },
        Media: { height: 400, maxWidth: 320, margin: '15px auto' },
        MovieDetails: { color: 'blue' }
    };

    // when displaying all the fields from JSON, we can exclude some
    const excludeProps = ['Title', 'Response', 'Poster', 'Plot'];
    const [isFavorite, setIsFavorite] = useState(props.checkFavorite(props.currentMovie.imdbID));
    const starIconColor = isFavorite ? 'secondary': 'inherit';

    return(
        <div>
            <Button onClick={props.closeMovieDetail}>Go back</Button>

            <Card style={style.Card}>
                <CardMedia
                    style={style.Media}
                    image={poster_src}
                    title={props.currentMovie.Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align='center'>
                        {props.currentMovie.Title}
                        <div>{props.currentMovie.imdbID}</div>
                        <IconButton aria-label="add to favorites"
                            onClick={() => {
                                setIsFavorite(!isFavorite);
                                props.updateFavorites(props.currentMovie.imdbID)
                            }}
                        >
                            <StarIcon
                                color={starIconColor}/>
                        </IconButton>
                    </Typography>

                    <Typography component="p" gutterBottom>
                    {props.currentMovie.Plot}
                    </Typography>

                    {Object.entries(props.currentMovie).map((el, i) =>
                        excludeProps.indexOf(el[0]) === -1 ?
                        <div key={i}>
                            <Typography display="inline" variant="body1" style={style.MovieDetails}>
                                {el[0] + ':'}
                            </Typography>
                            <Typography display="inline" variant="body1" >
                            {' ' + el[1]}
                            </Typography>
                        </div>
                         :
                        null
                    )}

                </CardContent>
            </Card>
        </div>
    )
}

export default MovieDetail;
