import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addFeedingTrack } from '../../actions/feedingActions';
import TimePicker from 'react-time-picker';
import Navbar from "../Navbar/Navbar";


import "../Form.css"

class FeedingTrack extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         bottle: false,
    //         breastFeeding: false,
    //         notes: "",
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }
    state = {
        bottle: false,
        breast_feeding: false,
        notes: "",
        amount: "",
        left_side: false,
        right_side: false,
        time: '00:00',
        duration: "",
        userId: null
    };

    static propTypes = {
        addFeedingTrack: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { user } = this.props;
        if (user !== null) this.setState({ userId: user._id })
    };


    checkboxStyle = {
        display: "flex",

    }

    handleChange = event => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    };

    onChangeTime = time => {
        this.setState({ time })
    }

    onSubmit = e => {
        e.preventDefault();

        const { bottle, breast_feeding, left_side, right_side, time, duration, amount, notes, userId } = this.state;

        const feedingTrack = {
            bottle,
            breast_feeding,
            left_side,
            right_side,
            time,
            duration,
            amount,
            notes,
            userId
        }

        this.props.addFeedingTrack(feedingTrack);

        window.location = "/feeding"
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="form-container ">
                    <form className="TrackForm feedingTrack" onSubmit={this.onSubmit}>
                        <h1 className="form-header">מעקב האכלה</h1>
                        <span className="br" />
                        <div className="labels-look">

                            <div>
                                <label className="form-label"> הנקה
                                    <input className="input-tag"
                                        type="checkbox"
                                        checked={this.state.breast_feeding}
                                        name="breast_feeding"
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="form-label"> בקבוק
                                    <input className="input-tag"
                                        type="checkbox"
                                        checked={this.state.bottle}
                                        name="bottle"
                                        onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <span className="br" />
                            <div>

                                {this.state.bottle === true ?
                                    <div>

                                        <span className="br" />
                                        <div>
                                            <label className="form-label"> כמות: </label>
                                            <label className="form-label">
                                                <input className="input-tag"
                                                    name="amount"
                                                    value={this.state.amount}
                                                    onChange={this.handleChange}
                                                /> מ"ל
                                        </label>
                                        </div>
                                        <span className="br" />
                                    </div>
                                    : <div></div>
                                }
                                {this.state.breast_feeding === true ?
                                    <div>

                                        <span className="br" />
                                        <div>
                                            <h4 className="form-label"> צד: </h4>
                                            <label className="form-label"> ימין
                                            <input className="input-tag"
                                                    type="checkbox"
                                                    checked={this.state.right_side}
                                                    name="right_side"
                                                    onChange={this.handleChange}
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <label className="form-label"> שמאל
                                            <input className="input-tag"
                                                    type="checkbox"
                                                    checked={this.state.left_side}
                                                    name="left_side"
                                                    onChange={this.handleChange}
                                                />
                                            </label>
                                        </div>
                                        <span className="br" />
                                    </div>
                                    : <div></div>}

                            </div>
                            <div>
                                <label className="form-label"> שעת האכלה:</label>
                                <TimePicker
                                    format="hh:mm"
                                    onChange={this.onChangeTime}
                                    value={this.state.time} />
                            </div>
                            <span className="br" />
                            <div>
                                <label className="form-label"> משך האכלה: </label>
                                <label className="form-label">
                                    <input className="input-tag"
                                        name="duration"
                                        value={this.state.duration}
                                        onChange={this.handleChange}
                                    /> דקות
                                </label>
                            </div>
                            <span className="br" />
                            <div>
                                <label className="form-label"> הערות:
                                    <input className="input-tag"
                                        type="text"
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
});

export default connect(mapStateToProps, { addFeedingTrack })(FeedingTrack)
