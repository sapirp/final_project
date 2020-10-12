import React, { useState } from 'react'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import "./Form.css"

const ReactCalendar = () => {
    const [date, setDate] = useState(null)

    const onChange = date => {
        setDate(date)
    }

    return (
        <div className="labels-look">
            <label className="form-label"> מועד התור:
            <DatePicker className="input-tag"
                    selected={date}
                    onChange={onChange}
                    dateFormat="dd/MM/yyyy"
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                />
            </label>
        </div>
    )
}

export default ReactCalendar
