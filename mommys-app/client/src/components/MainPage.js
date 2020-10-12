import React, { Component } from 'react';
import Login from './auth/Login'
import { Link } from 'react-router-dom'


import "./Main.css"

class MainPage extends Component {

    render() {
        return (
            <Login />
        )
    }
}

export default MainPage