import React from "react"
import "./Header.css"
import logo from "../../src/logo-small.png"
import Logout from "./auth/Logout"
//import { Link } from 'react-router-dom'



function Header() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    let timeOfDayIcon

    const textColor = {
    }

    if (hours >= 5 && hours < 12) {
        timeOfDay = "בוקר טוב"
        timeOfDayIcon = "far fa-sun"
        textColor.color = "#2dded9"
        //  timeOfDayIcon = "fas fa-sun"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "צהריים טובים"
        timeOfDayIcon = "fas fa-sun"
        textColor.color = "#f5c711"
        //   timeOfDayIcon = "fas fa-sun"
    } else if (hours >= 17 && hours < 22) {
        timeOfDay = "ערב טוב"
        timeOfDayIcon = "far fa-moon"
        textColor.color = "#da3064"
    } else {
        timeOfDay = "לילה טוב"
        timeOfDayIcon = "fas fa-cloud-moon"
        textColor.color = "#3a1877"
    }


    return (
        <header className="Header">
            <img className="Logo" src={logo} alt="Logo"></img>
            <h1 className="header-logo">  אימל'ה </h1>
            <h2 style={textColor} className="header-blessing">{timeOfDay} <i className={timeOfDayIcon}></i> </h2>

        </header>
    )
}

export default Header