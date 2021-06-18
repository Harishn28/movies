import React from 'react';
import MovieList from './MovieList';
import Loader from '../../atoms/loaders';
import LoadingIndicator from './LoadingIndicator';
import { ROUTES } from '../app/Routes';

class Movies extends React.Component{
    componentDidMount(){
        this.props.getMoviesAction('popular', 1);
        console.log('----Movies CDM.');
    }

    fetchNextPage = () => {
        const { isFetchingList, totalPages, page } = this.props;
        if(isFetchingList) return;
        if(page >= totalPages) return;

        console.log('---------fetching next page ', page, totalPages);
        this.props.getMoviesAction('popular', page+1);
    }

    onScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        // console.log('------',scrollTop, scrollHeight, clientHeight);
    
        if((scrollTop + clientHeight) >= scrollHeight){
          this.fetchNextPage();
        }
    }

    onMovieClick = movie => {
        const { history } = this.props;
        const { id } = movie;
        const path = ROUTES.MOVIE_DETAILS.replace(':id', id);
        history.push(path);
    }
      

    render(){
        const { movies, isFetchingList } = this.props;
        return(
            <div style={{
                display:'flex',
                flexDirection:'column',
                maxHeight:'100%',
                overflow:'scroll',
                alignItems:'center',
            }} onScroll={this.onScroll}>
                <MovieList 
                        movies={movies} 
                        fetchNextPage={this.fetchNextPage}
                        onMovieClick={this.onMovieClick}
                    />
                {isFetchingList && <Loader/>}
            </div>
            
        );
    }
}

export default Movies;