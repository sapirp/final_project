import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getDiaperTrack, deleteTrack } from '../../actions/diaperActions'

import Navbar from '../Navbar/Navbar'
import "../Tables.css"





class Diaper extends Component {

    componentDidMount() {
        this.props.getDiaperTrack();
    }

    componentDidUpdate() {
        this.props.getDiaperTrack();
    }


    onDeleteClick = (_id) => {
        this.props.deleteTrack(_id);
    }

    render() {
        const traksItems = this.props.diaperTracks.map(Dtrack => (
            <tbody key={Dtrack._id} className="t-body-style">
                <tr>
                    <td>{Dtrack.date.substring(0, 10)}</td>
                    <td>{Dtrack.changing_time}</td>
                    <td>{Dtrack.pee === true ? 'V' : 'X'}</td>
                    <td>{Dtrack.poop === true ? 'V' : 'X'}</td>
                    <td>{Dtrack.notes}</td>
                    <td>
                        <button className="delete-B-style"
                            onClick={this.onDeleteClick.bind(this, Dtrack._id)} >
                            X
                        </button>
                    </td>
                </tr>
            </tbody>
        ))
        return (
            <div>
                <Navbar />
                <h1 className="title-style">מעקבי החתלה </h1>
                <div className="tableContiner">
                    <Link to="/new_diaper"><button className="button-style">פתחי מעקב חדש</button></Link>
                    <table className="tableStyle" >
                        <thead className="t-head-style">
                            <tr>
                                <th>תאריך</th>
                                <th>שעה</th>
                                <th>פיפי</th>
                                <th>קקי</th>
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

Diaper.propTypes = {
    getDiaperTrack: PropTypes.func.isRequired,
    diaperTracks: PropTypes.array.isRequired

}

const mapStateToProps = (state) => ({
    diaperTracks: state.diaperTracks.items
})

export default connect(mapStateToProps, { getDiaperTrack, deleteTrack })(Diaper);