import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Card, IconButton, CardActionArea, CardContent, CardActions, CardMedia, Typography} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false
    }
  }

  render() {
    const poster_src =
    (this.props.poster === 'N/A')?
      'empty_poster.png' : this.props.poster;

  const style = {
      Media: { height: 345 },
      Card: {width: 280, marginTop: 10, marginBottom: 10, marginLeft:10, marginRigth:10}
  }

  return(
    <Card style={style.Card}>
      <CardActionArea onClick={() => this.props.viewMovieDetail(this.props.movieId)}>
        <CardMedia
          style={style.Media}
          image={poster_src}
          title="poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => this.props.viewMovieDetail(this.props.movieId)}>
          Detail
        </Button>
        <IconButton aria-label="add to favorites"
          onClick={() => {
            this.setState({ isFavorite: !this.state.isFavorite});
            this.props.updateFavorites(this.props.movieId)
          }}
        >
          <StarIcon color={this.props.checkFavorite(this.props.movieId)? 'secondary': 'inherit'}/>
        </IconButton>
      </CardActions>
    </Card>
  )
  }
}

export default Movie;
