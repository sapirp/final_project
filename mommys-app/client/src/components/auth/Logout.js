import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    logginOut = () => {
        this.props.logout();
        return ("/")
    }

    render() {
        return (
            <div>
                <Link onClick={this.props.logout} to="/"> יציאה</Link>
            </div>

        )
    }
}

export default connect(null, { logout })(Logout)