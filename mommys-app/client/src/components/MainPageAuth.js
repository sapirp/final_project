import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import Header from "./Header"
import "./Main.css"
class MainPageAuth extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                <Header />
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="block-2 red">
                                    <span className="wrap-icon">
                                        <span><i className="fas fa-utensils"></i></span>
                                    </span>
                                    <Link style={{ textDecoration: "none" }} to="/feeding" ><h2>מעקב האכלה</h2></Link>
                                    <p>התחילי מעקב האכלה חדש...</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="block-2 yellow">
                                    <span className="wrap-icon">
                                        <span><i className="fas fa-baby"></i></span>
                                    </span>
                                    <Link style={{ textDecoration: "none" }} to="/diaper" ><h2>מעקב החתלה</h2> </Link>
                                    <p>התחילי מעקב החתלה חדש...</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="block-2 teal">
                                    <span className="wrap-icon">
                                        <span><i className="fas fa-baby-carriage"></i></span>
                                    </span>
                                    <Link style={{ textDecoration: "none" }} to="/well_care"><h2>מעקב טיפת חלב</h2> </Link>
                                    <p> התחילי מעקב- גובה, משקל וביקור רופא </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(MainPageAuth);