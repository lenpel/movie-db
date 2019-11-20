import React, {Component} from 'react';
import {Card, CardMedia, CardContent, IconButton, Typography} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

class MovieDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movieData: '',
        isFavorite: false,
      }
    }

    componentDidMount() {
        const apiKey = process.env.REACT_APP_API;
        const id = this.props.match.params.imdbID;
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`)
        .then(data => data.json())
        .then(data => {
            if (data.Response) {
              this.setState({ movieData : data });
            }
        })
    }

    render() {
        const { checkFavorite, updateFavorites} = this.props;
        const currentMovie = this.state.movieData;
        const poster_src =
        (currentMovie.Poster === 'N/A')?
            'empty_poster.png' : currentMovie.Poster;

        const style = {
            Card: { maxWidth: 500, margin: 'auto' },
            Media: { height: 400, maxWidth: 320, margin: '15px auto'},
            MovieDetails: { color: 'blue', align: 'left' }
        };

        // when displaying all the fields from JSON, we can exclude some
        const excludeProps = ['Title', 'Response', 'Poster', 'Plot'];
        const isFavorite = checkFavorite(currentMovie.imdbID);
        const starIconColor = isFavorite ? 'secondary': 'inherit';

        return(
            <div>
                <Card style={style.Card}>
                    <CardMedia src='picture'
                        style={style.Media}
                        image={poster_src}
                        title={currentMovie.Title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align='center'>
                            {currentMovie.Title}
                            <IconButton aria-label="add to favorites"
                                onClick={() => {
                                    this.setState({isFavorite: !isFavorite});
                                    updateFavorites(currentMovie.imdbID)
                                }}
                            >
                                <StarIcon
                                    color={starIconColor}/>
                            </IconButton>
                        </Typography>

                        <Typography component="p" gutterBottom>
                        {currentMovie.Plot}
                        </Typography>

                        {Object.entries(currentMovie).map((el, i) =>
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
}

export default MovieDetail;
