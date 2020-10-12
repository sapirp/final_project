import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFeedingTrack, deleteTrack } from '../../actions/feedingActions'

import Navbar from '../Navbar/Navbar'
import "../Tables.css"



class Feeding extends Component {

    componentDidMount() {
        this.props.getFeedingTrack();
    }

    componentDidUpdate() {
        this.props.getFeedingTrack();
    }



    onDeleteClick = (_id) => {
        this.props.deleteTrack(_id);

    }

    render() {
        const traksItems = this.props.feedingTracks.map(FTrack => (
            <tbody key={FTrack._id} className="t-body-style">
                <tr>
                    <td>{FTrack.date.substring(0, 10)}</td>
                    <td>{FTrack.time}</td>
                    <td>{FTrack.duration}</td>
                    <td>{FTrack.bottle === true ? 'V' : 'X'}</td>
                    <td>{FTrack.amount}</td>
                    <td>{FTrack.breast_feeding === true ? 'V' : 'X'}</td>
                    <td>{FTrack.right_side === true ? 'V' : 'X'}</td>
                    <td>{FTrack.left_side === true ? 'V' : 'X'}</td>
                    <td>{FTrack.notes}</td>
                    <td>
                        <button className="delete-B-style"
                            onClick={this.onDeleteClick.bind(this, FTrack._id)} >
                            X
                        </button>
                    </td>
                </tr>
            </tbody>
        ))
        return (
            <div>
                <Navbar />
                <h1 className="title-style">מעקבי האכלה  </h1>
                <div className="tableContiner">
                    <Link to="/new_feeding"><button className="button-style">פתחי מעקב חדש</button></Link>
                    <table className="tableStyle" >
                        <thead className="t-head-style">
                            <tr>
                                <th>תאריך</th>
                                <th>שעה</th>
                                <th>משך האכלה</th>
                                <th>בקבוק</th>
                                <th>כמות (במ"ל)</th>
                                <th>הנקה</th>
                                <th>ימין</th>
                                <th>שמאל</th>
                                <th>הערות</th>
                                <th>מחק</th>
                            </tr>
                        </thead>
                        {traksItems}
                    </table>
                </div>
                <br />
            </div>
        )
    }
}

Feeding.propTypes = {
    getFeedingTrack: PropTypes.func.isRequired,
    feedingTracks: PropTypes.array.isRequired

}

const mapStateToProps = (state) => ({
    feedingTracks: state.feedingTracks.fitems
})

export default connect(mapStateToProps, { getFeedingTrack, deleteTrack })(Feeding);