import React from 'react';
import ContentLoader from 'react-content-loader'
import movieCardStyles from './moviecard.module.css';

const MovieCardLoading = () => {

    return (
        <div className={movieCardStyles.moviecard}>
            <ContentLoader
                height={250}
                speed={2}
                primaryColor="#f2f1ef"
                secondaryColor="#E0E2E3">
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
                {/* <rect x="10" y="210" rx="0" ry="0" width="100%" height="20" /> */}
            </ContentLoader>
        </div>
    );
}

export default MovieCardLoading;