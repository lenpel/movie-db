import React from 'react';
import Movie from './Movie';
import { GridList } from '@material-ui/core';

const MovieList = (props) => {
    let movies;
    if (props.match.url === '/favorites') {
        movies = JSON.parse(localStorage.getItem('favoriteMovies'));
        if (!movies) {
            movies = [];
        }
    } else {
        movies = props.movies;

    }
    if (!movies || movies.length === 0) {
        return(
            <h2>No results</h2>
        )
    }

    return(
        <GridList cellHeight={345} style={{justifyContent: 'center', marginLeft: -10}}>
        {
            movies.map((movie, i) => {
                return (
                    <Movie key={i}
                        updateFavorites={props.updateFavorites}
                        checkFavorite={props.checkFavorite}
                        movieId={movie.imdbID}
                        poster={movie.Poster}
                        title={movie.Title}/>
                )
            })
        }
        </GridList>

    )

}

export default MovieList;
