import axios from 'axios';

export const GET_NUMBER = 'GET_NUMBER';

export const getNumber = (number) => dispatch => {
    axios
        .get(`http://apilayer.net/api/validate?access_key=23e1a51ded2651cebb22c57942d3be32&number=${number}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: GET_NUMBER, payload: res.data })
        })
}