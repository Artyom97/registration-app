import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends React.Component {
    constructor ( props ) {
        super ( props );
        this.logout = this.logout.bind(this);
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.props.setUser(null);
        this.props.history.push('/login');
    };

    render () {
        return (
            <div className='header'>
                {(this.props.isAuth) ? (
                    <div className='logoutButton'>
                        <button onClick={this.logout} className='button'>Logout</button>
                    </div>
                ) : (
                    <div>
                        <div className='loginButton'>
                            <Link to={ '/login' } className='button'>Login</Link>
                        </div>
                        <div className='registrationButton'>
                            <Link to={ '/registration' } className='button'>Register</Link>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default withRouter(Header);