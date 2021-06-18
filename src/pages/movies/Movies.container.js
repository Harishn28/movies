import React from 'react';
import { connect } from 'react-redux';
import Movies from './Movies';
import { getMovies } from './actions';
import { withRouter } from "react-router";

const MoviesContainer = (props) => <Movies {...props}/>

function mapStateToProps(state, props){
    return {
        isFetchingList: state.moviesList.fetchingList,
        page: state.moviesList.page,
        totalPages: state.moviesList.total_pages,
        movies: state.moviesList.list
    }
}

function mapDispatchToProps(dispatch, props){
    return {
        getMoviesAction: (movieType, page) => { 
            const action = getMovies(movieType, page);
            dispatch(action) 
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesContainer));