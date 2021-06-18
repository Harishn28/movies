import React from 'react';
import { connect } from 'react-redux';
import MovieDetails from './MovieDetails';
import { getMovieDetailsAPI } from './movieDetails.api';

const MovieDetailsContainer = (props) => <MovieDetails {...props}/>

function mapStateToProps(state, props){
    return {
        getMovieDetailsAPI
    }
}

function mapDispatchToProps(dispatch, props){
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);