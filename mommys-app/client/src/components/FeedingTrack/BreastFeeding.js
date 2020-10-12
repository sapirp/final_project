import React, { Component } from 'react';
import TimePickerComp from "../TimePickerComp"

import "../Form.css"

class BreastFeeding extends Component {
    constructor() {
        super()
        this.state = {
            left: false,
            right: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    checkboxStyle = {
        display: "flex",

    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <div>
                    <label className="form-label"> שעת ההחתלה:</label>
                    <TimePickerComp />
                </div>
                <div>
                    <label className="form-label"> שעת סיום:</label>
                    <TimePickerComp />
                </div>
                <span className="br" />
                <div>
                    <h4 className="form-label"> צד: </h4>
                    <label className="form-label"> ימין
                        <input className="input-tag"
                            type="checkbox"
                            checked={this.state.right}
                            name="right"
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label className="form-label"> שמאל
                        <input className="input-tag"
                            type="checkbox"
                            checked={this.state.left}
                            name="left"
                            onChange={this.handleChange}
                        />
                    </label>
                </div>
                <span className="br" />
            </div>
        )
    }

}

export default BreastFeeding
