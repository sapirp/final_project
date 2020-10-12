import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar"
import TimePicker from 'react-time-picker';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addDiaperTrack } from '../../actions/diaperActions'

import "../Form.css"

class DiaperTrack extends Component {

    state = {
        pee: false,
        poop: false,
        changing_time: '00:00',
        notes: "",
        userId: null
    }

    static propTypes = {
        addDiaperTrack: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { user } = this.props;
        if (user !== null) this.setState({ userId: user._id })
    };

    // componentDidUpdate() {
    //     const { user } = this.props;
    //     this.setState({ userId: user._id })
    // };

    handleChange = event => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    onChangeTime = time => {
        this.setState({ time })
    }

    onSubmit = e => {
        e.preventDefault();

        const { pee, poop, notes, changing_time, userId } = this.state;

        const DiaperTrack = {
            pee,
            poop,
            changing_time,
            notes,
            userId
        }

        this.props.addDiaperTrack(DiaperTrack);

        window.location = "/diaper"
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="form-container ">
                    <form className="TrackForm diperTrack" onSubmit={this.onSubmit}>
                        <h1 className="form-header">מעקב החתלה</h1>
                        <span className="br" />
                        <div className="labels-look">
                            <div>
                                <label className="form-label"> שעת ההחתלה:</label>
                                <TimePicker
                                    format="hh:mm"
                                    onChange={this.onChangeTime}
                                    value={this.state.changing_time} />
                            </div>
                            <span className="br" />
                            <div>
                                <label className="form-label"> קקי
                                    <input className="input-tag"
                                        type="checkbox"
                                        checked={this.state.poop}
                                        name="poop"
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="form-label"> פיפי
                                    <input className="input-tag"
                                        type="checkbox"
                                        checked={this.state.pee}
                                        name="pee"
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <span className="br" />
                            <div>
                                <label className="form-label"> הערות:
                                    <input className="input-tag"
                                        type="text"
                                        checked={this.state.pee}
                                        name="notes"
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div>
                            <input style={{ marginRight: "50%", borderRadius: "5px", fontSize: "16px" }}
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
})

export default connect(mapStateToProps, { addDiaperTrack })(DiaperTrack)
