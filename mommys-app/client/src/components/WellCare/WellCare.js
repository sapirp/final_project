import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getWellCareTrack, deleteTrack } from '../../actions/wellCareActions'

import Navbar from '../Navbar/Navbar'
import "../Tables.css"





class WellCare extends Component {

    componentDidMount() {
        this.props.getWellCareTrack();
    }

    componentDidUpdate() {
        this.props.getWellCareTrack();
    }



    onDeleteClick = (_id) => {
        this.props.deleteTrack(_id);
    }

    render() {
        const traksItems = this.props.wellCareTracks.map(WCtrack => (
            <tbody key={WCtrack._id} className="t-body-style">
                <tr>
                    <td>{WCtrack.date.substring(0, 10)}</td>
                    <td>{WCtrack.height}</td>
                    <td>{WCtrack.weight}</td>
                    <td>{WCtrack.notes}</td>
                    <td>
                        <button className="delete-B-style"
                            onClick={this.onDeleteClick.bind(this, WCtrack._id)} >
                            X
                        </button>
                    </td>
                </tr>
            </tbody>
        ))
        return (
            <div>
                <Navbar />
                <h1 className="title-style">מעקבי טיפת-חלב שלי </h1>
                <div className="tableContiner">
                    <Link to="/new_well_care"><button className="button-style">פתחי מעקב חדש</button></Link>
                    <table className="tableStyle" >
                        <thead className="t-head-style">
                            <tr>
                                <th>תאריך</th>
                                <th>גובה</th>
                                <th>משקל</th>
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

WellCare.propTypes = {
    getWellCareTrack: PropTypes.func.isRequired,
    wellCareTracks: PropTypes.array.isRequired

}

const mapStateToProps = (state) => ({
    wellCareTracks: state.wellCareTracks.items
})

export default connect(mapStateToProps, { getWellCareTrack, deleteTrack })(WellCare);