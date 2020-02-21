import { GET_NUMBER, LOADING, SAVED } from '../actions'


export const initialState = {
    data: [],
    isLoading: false,
    isSaved: false
}


export const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                data: [],
                isLoading: true
            }
        case GET_NUMBER:
            return {
                ...state,
                data: [action.payload],
                isLoading: false
            }
        case SAVED:
            return {
                ...state,
                data: [],
                isSaved: action.payload
            }
        default:
            return state;
    }
}