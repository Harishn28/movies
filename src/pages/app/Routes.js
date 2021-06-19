import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from '../home';
import MovieDetails from '../moviedetails';
import ProfileDetails from '../profile';

const ROUTES = {
    MOVIELIST: '/movies',
    MOVIE_DETAILS: '/movies/details/:id',
    PROFILE_DETAILS: '/profile/details/:id'
}

const Router = () => {
    return(
        <BrowserRouter basename={process.env.APP_HOSTED_PATH}>
            <Route exact path={ROUTES.MOVIELIST} component={Home}/>
            <Route exact path={ROUTES.MOVIE_DETAILS} component={MovieDetails}/>
            <Route exact path={ROUTES.PROFILE_DETAILS} component={ProfileDetails}/>
            {/* <Redirect exact from="/" to={ROUTES.MOVIELIST} /> */}
        </BrowserRouter>
    )
}

export { ROUTES };
export default Router;