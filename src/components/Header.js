import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to={'/loginTab'}>
                <button className='LoginButton'>Login</button>
            </Link>
            <Link to={'/registrationTab'}>
                <button className='logoutButton'>Register</button>
            </Link>
        </div>
    )
};

export default withRouter(Header);