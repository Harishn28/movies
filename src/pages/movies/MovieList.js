import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieCard from '../../components/moviecard/MovieCard';

class MovieList extends Component {

  constructor(props){
    super(props);
    this.scrollView = React.createRef();
  }

  render() {
    const { movies, onMovieClick } = this.props;
    return (
      <div style={{
        display: 'flex',
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent:'center',
      }}>
      {
        movies.map(movie => <MovieCard movie={movie} key={movie.id} onClick={onMovieClick}/>)
      }
      </div>
    );
  }
}

export default MovieList;