import React from 'react';
import styles from './genresLabel.css';

export default ({ genres = [] }) => {
    const genresName = genres.map(({ name }) => name);
    const genresString = genresName.join(', ');
    return (
        <div className={styles.container}>
        {
            genres.map(({ name: genre }) => (
                <div className={styles.label}>{genre}</div>
            ))
        }
        </div>
    )
}