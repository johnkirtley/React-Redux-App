import axios from 'axios';

export const GET_NUMBER = 'GET_NUMBER';
export const LOADING = 'LOADING';
export const SAVED = 'SAVED';

export const getNumber = (number, country) => dispatch => {
    dispatch({
        type: LOADING
    })
    axios
        .get(`http://apilayer.net/api/validate?access_key=23e1a51ded2651cebb22c57942d3be32&number=${country}${number}`)
        .then(res => {
            console.log(res.data)
            setTimeout(() => dispatch({
                type: GET_NUMBER,
                payload: res.data
            }), 1000)
        })
}

export const saved = () => dispatch => {
    dispatch({
        type: SAVED,
        payload: true
    })

    setTimeout(() => dispatch({
        type: SAVED,
        payload: false
    }), 750)
}