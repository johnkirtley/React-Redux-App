import React, { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'


const Saved = () => {
    const { savedInfo } = useContext(ProductContext)
    // const [query, setQuery] = useState('')


    // const handleChanges = e => {
    //     e.preventDefault();
    //     setQuery(e.target.value)
    // }



    return (
        <div className="saved-page">
            <h2 className="saved-title">Saved Numbers</h2>
            {/* <label htmlFor="search"></label>
            <input type="text" name="search" value={query} onChange={handleChanges} placeholder="Search contact.." /> */}
            {savedInfo.map(info => (
                <div className='saved-info-container'>
                    <ul>
                        <li><span>Number:</span> {info.number}</li>
                        <li><span>Country:</span> {info.country_code}</li>
                        <li><span>Location:</span> {info.location}</li>
                        <li><span>Carrier:</span> {info.carrier}</li>
                        <li><span>Line type:</span> {info.line_type}</li>
                        <li className="flag"><span>Country Flag: </span> <img src={`https://www.countryflags.io/${info.country_code}/flat/64.png`} alt={`${info.country_code} flag`}></img></li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Saved;