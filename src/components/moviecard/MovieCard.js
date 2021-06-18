import React, { Component } from 'react';
import movieCardStyles from './moviecard.module.css';

class MovieCard extends Component{

    onClick = () => {
        const { movie, onClick } = this.props;
        onClick(movie);
    }

    render(){
        const { movie } = this.props;
        const { poster_path = '', title = '', overview = '' } = movie || {};
        
        return(
            <div className={movieCardStyles.moviecard} onClick={this.onClick}>
                <img className={movieCardStyles.poster_image}
                 src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}/>
            </div>
            
        );
    }
}

export default MovieCard;