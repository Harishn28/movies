import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from '../home';
import MovieDetails from '../moviedetails';

const ROUTES = {
    MOVIELIST: '/movies',
    MOVIE_DETAILS: '/movies/details/:id'
}

const Router = () => {
    return(
        <BrowserRouter basename={process.env.APP_HOSTED_PATH}>
            <Redirect exact from="/" to={ROUTES.MOVIELIST} />
            <Route exact path={ROUTES.MOVIELIST} component={Home}/>
            <Route exact path={ROUTES.MOVIE_DETAILS} component={MovieDetails}/>
        </BrowserRouter>
    )
}

export { ROUTES };
export default Router;