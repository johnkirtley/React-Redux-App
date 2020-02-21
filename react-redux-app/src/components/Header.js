import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className="header-container">
            <div className='title'>
                Phone Number Lookup
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/saved'>View Saved</Link>
            </nav>
        </div>
    )
}

export default Header;