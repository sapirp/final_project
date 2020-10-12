import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'


import 'react-datepicker/dist/react-datepicker.css'


import "../Form.css"
import Header from '../Header';

class Register extends Component {
    state = {
        name: '',
        email: '',
        birth_date: new Date(),
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            //Check for register error
            if (error.id === 'REGISTER_FAIL') {
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

        const { name, email, birth_date, password } = this.state;

        //Create user object
        const newUser = {
            name,
            email,
            birth_date,
            password
        };

        //Attempt to register
        this.props.register(newUser);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="form-container ">
                    <form className="TrackForm wellCare" onSubmit={this.onSubmit}>
                        {this.state.msg ? <h4>{this.state.msg}</h4> : null}
                        <h1 className="form-header">הרשמה</h1>

                        <div className="labels-look">
                            <div className="height-label">
                                <label className="form-label"> שם:</label>
                                <input className="input-tag"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={this.state.name}
                                    placeholder="name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <span className="br" />
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
                            <div>
                                <label className="form-label"> תאריך לידה:
                                <DatePicker className="input-tag"
                                        selected={this.state.birth_date}
                                        onChange={this.onChangeDate}
                                        dateFormat="dd/MM/yyyy"
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                        placeholder="birth-date"
                                        id="birth-date"
                                    />
                                </label>
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
                        <br />
                        <div>
                            <input
                                style={{ marginRight: "50%", borderRadius: "5px", fontSize: "16px" }}
                                type="submit" />
                        </div>
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

export default connect(mapStateToProps, { register, clearErrors })(Register)
