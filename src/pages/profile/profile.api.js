import api from '../../api';

export const getProfileDetailsAPI = (id) => {
    return api.get(`/person/${id}`)
        .then(function (response) {
            return { data: response.data, error:null }
        })
        .catch(function (error) {
            return { data: null , error:{} }
        });
};