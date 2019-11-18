import React from 'react';
import Movie from './Movie';
import { GridList } from '@material-ui/core';

const MovieList = (props) => {
    if (!props.movies) {
        return(
            <h2>No or too many results</h2>
        )
    }

    return(
        <GridList cellHeight={345} style={{justifyContent: 'center', marginLeft: -10}}>
        {
            props.movies.map((movie, i) => {
                return (
                    <Movie key={i}
                        updateFavorites={props.updateFavorites}
                        checkFavorite={props.checkFavorite}
                        viewMovieDetail={props.viewMovieDetail}
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
