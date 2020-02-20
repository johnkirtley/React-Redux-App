import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getNumber } from '../actions';


const NumberForm = props => {
    const [number, setNumber] = useState('')
    console.log(number)

    const handleGetData = e => {
        e.preventDefault();
        props.getNumber(Number(number))
        setNumber('')
    }

    const handleChanges = e => {
        e.preventDefault();
        setNumber(e.target.value)
    }

    return (
        <>
            <div className='form-container'>
                <div className='form'>
                    <label htmlFor="number"></label>
                    <input type="text" name="number" value={number} onChange={handleChanges} placeholder="Enter a number..." />
                </div>
                <button className='submit-button' onClick={handleGetData}>Get Info</button>
            </div>
            {props.data.map(item => {
                return (
                    <div className="info-container">
                        {item.valid ?
                            <ul>
                                <li><span>Number:</span> {item.number}</li>
                                <li><span>Country:</span> {item.country_code}</li>
                                <li><span>Location:</span> {item.location}</li>
                                <li><span>Carrier:</span> {item.carrier}</li>
                            </ul>
                            : <div className='error'>
                                <p className="emoji"><span role="img" aria-label="confused emoji">🧐</span></p>
                                <p>Number is not valid.</p>
                                <p>Please don't forget country code.</p>
                            </div>}
                    </div>
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
