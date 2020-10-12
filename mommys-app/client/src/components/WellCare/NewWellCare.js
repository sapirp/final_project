import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addWellCareTrack } from '../../actions/wellCareActions'
//import axios from 'axios';

import 'react-datepicker/dist/react-datepicker.css'
import Navbar from "../Navbar/Navbar"

//import SubmitFile from "./SubmitFile"

import "../Form.css"

class NewWellCare extends Component {
    state = {
        date: new Date(),
        height: "",
        weight: "",
        notes: "",
        userId: null
    };

    static propTypes = {
        addWellCareTrack: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { user } = this.props;
        if (user !== null) this.setState({ userId: user._id })
    }



    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onChangeDate = date => {
        this.setState({
            date: date
        })
    }


    onSubmit = e => {
        e.preventDefault();

        const { date, height, weight, notes, userId } = this.state;

        const wellCareTrake = {
            date,
            height,
            weight,
            notes,
            userId
        }

        this.props.addWellCareTrack(wellCareTrake);

        window.location = "/well_care"
    }

    render() {

        return (
            <div>
                <Navbar />
                <div className="form-container ">
                    <form className="TrackForm wellCare" onSubmit={this.onSubmit}>
                        <h1 className="form-header">מעקב טיפת-חלב</h1>
                        <div className="labels-look">
                            <label className="form-label"> מועד התור:
                            <DatePicker className="input-tag"
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                    dateFormat="dd/MM/yyyy"
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                />
                            </label>
                        </div>
                        <span className="br" />
                        <div className="labels-look">
                            <div className="height-label">
                                <label className="form-label"> גובה:</label>
                                <label className="form-label">
                                    <input className="input-tag"
                                        value={this.state.height}
                                        name="height"
                                        onChange={this.handleChange}
                                    /> ס"מ
                            </label>
                            </div>
                            <span className="br" />
                            <div className="weight-label">
                                <label className="form-label"> משקל: </label>
                                <label className="form-label">
                                    <input className="input-tag"
                                        value={this.state.weight}
                                        name="weight"
                                        onChange={this.handleChange}
                                    /> ק"ג
                            </label>
                            </div>
                            <div>
                                <span className="br" />
                                <label className="form-label">הערות:</label>
                                <textarea className="input-tag"
                                    value={this.state.notes}
                                    name="notes"
                                    onChange={this.handleChange}
                                />
                            </div>

                        </div>
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
    user: state.auth.user
});

export default connect(mapStateToProps, { addWellCareTrack })(NewWellCare)
