import { GET_NUMBER, LOADING } from '../actions'


export const initialState = {
    data: [],
    isLoading: false
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
        default:
            return state;
    }
}