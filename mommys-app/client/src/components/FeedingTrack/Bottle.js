import React, { Component } from 'react';
import TimePickerComp from "../TimePickerComp"

import "../Form.css"

class Bottle extends Component {
    constructor() {
        super()
        this.state = {
            amount: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    checkboxStyle = {
        display: "flex",

    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <div>
                    <label className="form-label"> שעת האכלה:</label>
                    <TimePickerComp />
                </div>
                <span className="br" />
                <div>
                    <label className="form-label"> כמות </label>
                    <label className="form-label">
                        <input className="input-tag"
                            name="amount"
                            onChange={this.handleChange}
                        /> מ"ל
                    </label>
                </div>
                <span className="br" />
            </div>
        )
    }

}

export default Bottle
