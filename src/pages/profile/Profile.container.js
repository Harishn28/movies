import React from 'react';
import _get from 'lodash/get';
import Profile from './Profile';

const ProfileContainer = (props) => <Profile {...props} id={_get(props, ['match', 'params', 'id'])}/>

export default ProfileContainer;