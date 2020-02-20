import { GET_NUMBER } from '../actions'


export const initialState = {
    data: []
}


export const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NUMBER:
            return {
                ...state,
                data: [action.payload]
            }
        default:
            return state;
    }
}