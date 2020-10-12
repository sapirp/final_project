import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { Link } from 'react-router-dom';


import 'react-datepicker/dist/react-datepicker.css'


import "../Form.css"
import Header from '../Header';

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            //Check for register error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
        //if autenticated go to main page
        if (isAuthenticated) {
            window.location = "/main"
        }
    }

    handleChange = e => {
        // const { name, value } = event.target
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeDate = date => {
        this.setState({
            birth_date: date
        })
    }


    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        };

        //Attempt to login
        this.props.login(user);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="form-container ">
                    <form className="TrackForm wellCare" onSubmit={this.onSubmit}>
                        {this.state.msg ? <h4>{this.state.msg}</h4> : null}
                        <h1 className="form-header">כניסה</h1>

                        <div className="labels-look">
                            <div className="height-label">
                                <label className="form-label"> אימייל: </label>
                                <input className="input-tag"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                />
                            </div>

                            <span className="br" />
                            <div className="height-label">
                                <label className="form-label"> סיסמה: </label>
                                <input className="input-tag"
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                style={{ marginRight: "50%", borderRadius: "5px", fontSize: "16px" }}
                                type="submit" />
                        </div>
                        <span className="br" />
                        <Link
                            style={{ marginRight: "50%", fontSize: "18px", fontWeight: "bold", color: "white" }}
                            to="/register">להרשמה</Link>
                    </form>
                    <br />
                </div>
            </div>

        )
    }

}



const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { login, clearErrors })(Login)
