import produce from "immer"
import { GET_MOVIES_REQUEST, GET_MOVIES_FAILURE, GET_MOVIES_SUCCESS } from './actions';

const initialState = {
    fetchingList : false,
    list: [],
    error: null,
}

const movieListReducer = (state = initialState, action) => {

    const nextState = produce(state, draftState => {
        switch(action.type){
            case GET_MOVIES_REQUEST:
            draftState.fetchingList = true;
            break;

            case GET_MOVIES_FAILURE:
            break;

            case GET_MOVIES_SUCCESS:
            draftState.fetchingList = false;
            draftState.list = draftState.list.concat(action.data.results);
            draftState.total_pages = action.data.total_pages;
            draftState.page = action.data.page;
            break;
        }

        return draftState;
    });

    return nextState;
}

export default movieListReducer;