import React, { Component } from 'react';
import _get from 'lodash/get';
import styles from './movieDetails.css';
import { formatDate } from 'utils/dateUtils';
import { formatRunTime } from 'utils/timeUtils';
import { GenresLabel }  from 'components/labels';

class MovieDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            movieDetails: null
        }
      }

    componentDidMount(){
        const { match: { params: { id } }} = this.props;
        this.getMovieDetails(id);
    }

    getMovieDetails = async(movieId)=> {
        const { getMovieDetailsAPI } = this.props;
        const { data: movieDetails } = await getMovieDetailsAPI(movieId);
        this.setState({ movieDetails });
    }

    render(){
        const { movieDetails } = this.state;

        if(!movieDetails) return null;

        const { 
            poster_path: posterPath,
            original_title:originalTitle,
            release_date: releaseDate,
            overview,
            runtime,
            genres = [],
         } = movieDetails;


        return(
            <div>
            <div className={styles.landing_container}>
                <img className={styles.poster_image} src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${posterPath}`}/>
                <div className={styles.landing_info}>
                    <p className={styles.title}>{originalTitle}</p>
                    <p className={styles.secondaryInfo}>{`(${formatDate(releaseDate, 'YYYY')}) ${formatRunTime(runtime)}`}</p>
                    <GenresLabel genres={genres}/>
                    <p className={styles.secondaryHeader}>{'Overview'}</p>
                    <p className={styles.secondaryInfo}>{overview}</p>
                </div>
            </div>
            
            <p>Movie Details</p>
            </div>
        );
    }
}

export default MovieDetails;