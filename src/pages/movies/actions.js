import api from '../../api';

const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';



const getMovies = (movieType, page) => (dispatch) => {
    dispatch({ type: GET_MOVIES_REQUEST });

    console.log('-----page ', page);

    api.get(`/movie/now_playing?page=${page}`)
        .then(function (response) {
            if(response && response.data && response.data.results){
                dispatch({ type: GET_MOVIES_SUCCESS, data:response.data });
            }
        })
        .catch(function (error) {
            dispatch({ type: GET_MOVIES_FAILURE });
            console.log('failure', error);
        })
        .then(function () {
            // always executed
        });



};

export {
    getMovies,
    GET_MOVIES_REQUEST,
    GET_MOVIES_FAILURE,
    GET_MOVIES_SUCCESS
}