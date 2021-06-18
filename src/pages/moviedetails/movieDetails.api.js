import api from '../../api';

export const getMovieDetailsAPI = (movieId) => {
    return api.get(`/movie/${movieId}`)
        .then(function (response) {
            return { data: response.data, error:null }
        })
        .catch(function (error) {
            return { data: null , error:{} }
        });
};
