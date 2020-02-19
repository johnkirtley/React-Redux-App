import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getNumber } from '../actions';


const NumberForm = props => {
    const [number, setNumber] = useState('')
    console.log(number)

    const handleGetData = e => {
        e.preventDefault();
        props.getNumber(Number(number))
    }

    const handleChanges = e => {
        e.preventDefault();
        setNumber(e.target.value)
    }

    return (
        <>
            <label htmlFor="number">Enter Number</label><input type="text" name="number" value={number} onChange={handleChanges} />
            <div><button onClick={handleGetData}>Get Data</button></div>
            {props.data.map(item => {
                return (
                    <>
                        {item.valid ?
                            <ul>
                                <li>Number: {item.number}</li>
                                <li>Country: {item.country_code}</li>
                                <li>Location: {item.location}</li>
                                <li>Carrier: {item.carrier}</li>
                            </ul>
                            : 'Number is not valid'}
                    </>
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        data: [...state.data]
    }
}

export default connect(mapStateToProps, { getNumber })(NumberForm);
