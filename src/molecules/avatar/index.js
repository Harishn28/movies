import { useCallback } from 'react';
import React from 'react';
import styles from './avatar.css';

export default function Avatar({ name, image, id, onClick}){

    const onClickCb = useCallback(
        () => { onClick(id) },
        [id],
      );
    
    return (
        <div className={styles.container} onClick={onClickCb}>
            <img src={image} alt={name} className={styles.container}></img>
        </div>
    )
}