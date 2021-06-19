import React, { useState, useEffect } from 'react';
import _get from 'lodash/get';
import { getProfileDetailsAPI } from './profile.api';
import styles from './profile.css';

export default function Profile({ id }) {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        async function getProfile(){
            const { data } = await getProfileDetailsAPI(id);
            setProfile(data);
        }
        getProfile();
    }, [id]);

    return  (
        <div className={styles.container}>
            {
                JSON.stringify(profile)
            }
        </div>
    );
}