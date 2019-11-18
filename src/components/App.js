import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import MovieList from './MovieList';
import Pagination from './Pagination';
import MovieDetail from './MovieDetail';

class App extends Component {
  constructor() {
    super();
    this.state ={
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    }
    this.apiKey = process.env.REACT_APP_API
  }

  shouldComponentUpdate(nextProps, nextState) {
    // it should update only on submit of a searchTerm
    // not on every change in searchTerm
    const answer = nextState.searchTerm === this.state.searchTerm? true:false;
    return (answer)
    }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      if (data.Response) {
        this.setState({ movies: data.Search, totalResults: data.totalResults})
      }
    })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  nextPage = (pageNumber) => {
    fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&s=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      if (data.Response) {
        this.setState({ movies: data.Search, currentPage: pageNumber})
      }
    })
  }

  viewMovieDetail = (id) => {
    fetch(`http://www.omdbapi.com/?apikey=${this.apiKey}&i=${id}`)
    .then(data => data.json())
    .then(data => {
      if (data.Response) {
        this.setState({ currentMovie: data})
      }
    })
  }

  closeMovieDetail = () => {
    // go back to the list
    this.setState({currentMovie: null})
  }

  updateFavorites(id) {
    // update local storage - called onClick
    let favorites = localStorage.getItem('favoriteMovies');
    let arr = [];
    if (favorites) {
      arr = JSON.parse(favorites);
    }
    if (!arr || !arr.includes(id)) {
      // movie not found in favorites so add it
      arr.push(id);
    } else {
      // remove the movie from favorites
      let index = arr.indexOf(id);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }
    localStorage.setItem('favoriteMovies', JSON.stringify(arr));
  }

  checkFavorite(id) {
    // get the array from local storage
    // parse the array and check if movie is in favorites
    let favorites = localStorage.getItem('favoriteMovies');

    if (favorites) {
      const arr = JSON.parse(favorites);
      if (arr.includes(id)) {
        return true;
      }
    }
    return false;
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults / 10);

    return (
      <div className="App">
          <table className='titleBar'>
            <tbody>
              <tr>
                <td>
                  <img alt='app icon' width='50' src='free-movies-icon-21.jpg' />
                </td>
                <td width='8' />
                <td>
                  <h1>Movies DB Search</h1>
                </td>
              </tr>
            </tbody>
          </table>

          {this.state.currentMovie !== null ?
            <MovieDetail currentMovie={this.state.currentMovie}
              closeMovieDetail={this.closeMovieDetail}
              updateFavorites={this.updateFavorites}
              checkFavorite={this.checkFavorite}/> :
            <div>
              <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
              <MovieList movies={this.state.movies}
                viewMovieDetail={this.viewMovieDetail}
                updateFavorites={this.updateFavorites}
                checkFavorite={this.checkFavorite}/>
              { this.state.totalResults > 10 ?
                <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> :
                ''
              }
            </div>
          }


        </div>
    );
  }

}

export default App;
