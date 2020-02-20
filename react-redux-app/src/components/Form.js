import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getNumber } from '../actions';
import Loader from 'react-loader-spinner';


const NumberForm = props => {
    const [number, setNumber] = useState('')
    const [countryCode, setCountryCode] = useState('')

    const handleGetData = () => {
        props.getNumber(Number((removeHyphens(number))), Number(countryCode))
        setNumber('');
        setCountryCode('');
    }


    const handleChangesNumber = e => {
        e.preventDefault();
        setNumber(e.target.value)
    }

    const handleChangesCountry = e => {
        e.preventDefault();
        setCountryCode(e.target.value)
    }

    const removeHyphens = (num) => {
        return num.includes('-') ? num.replace(/-/g, '') : num
    }

    const loader = () => {
        return (
            <Loader type='ThreeDots' color="#00BFFF" height="100" width="100" />
        )
    }


    return (
        <>
            <div className='form-container'>
                <div className='form'>
                    <label htmlFor="number"></label>
                    <input className="country" type="text" name="countryCode" value={countryCode} onChange={handleChangesCountry} placeholder="1" />
                    <input type="text" name="number" value={number} onChange={handleChangesNumber} placeholder="Number..." />
                </div>
                <button className='submit-button' onClick={handleGetData}>Get Info</button>
                {props.isLoading ? loader() : ''}
            </div>
            {props.data.map(item => {
                return (
                    <>
                        <div className="info-container">
                            {item.valid ?
                                <ul>
                                    <li><span>Number:</span> {item.number}</li>
                                    <li><span>Country:</span> {item.country_code}</li>
                                    <li><span>Location:</span> {item.location}</li>
                                    <li><span>Carrier:</span> {item.carrier}</li>
                                    <li><span>Line type:</span> {item.line_type}</li>
                                </ul>
                                : <div className='error'>
                                    <p className="emoji"><span role="img" aria-label="confused emoji">🧐</span></p>
                                    <p>Number not found.</p>
                                    <p>Please don't forget to enter a country code.</p>
                                </div>}
                        </div>
                    </>
                )
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        data: [...state.data],
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { getNumber })(NumberForm);
