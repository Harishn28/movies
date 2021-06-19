import React, { useState, useEffect } from 'react';
import _get from 'lodash/get';
import Avatar from 'molecules/avatar';
import { getMovieCredits as getMovieCreditsAPI } from '../../movieDetails.api';
import styles from './movieCredits.css';


export default function CastAndCrew({ movieId, openProfilePage }) {
    const [cast, setCast] = useState([]);
    useEffect(() => {
        async function getMovieCredits(){
            const { data: movieCredits } = await getMovieCreditsAPI(movieId);
            console.log('abcd cast in asyn', movieCredits, JSON.parse(JSON.stringify(cast)));
            setCast(_get(movieCredits, 'cast') || []);
        }
        getMovieCredits();
    }, [movieId]);

    return (
        <div className={styles.container}>
            {
                cast.map(({ name, profile_path, id }) => (
                    <Avatar
                        name={name}
                        image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${profile_path}`}
                        id={id}
                        onClick={openProfilePage}
                    />
                ))
            }
        </div>
    );
}