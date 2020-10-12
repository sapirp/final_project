import React, { Component } from 'react';
import TimePicker from 'react-time-picker';

class TimePickerComp extends Component {
    state = {
        time: '00:00',
    }

    onChange = time => this.setState({ time })

    render() {
        return (
            <div>
                <TimePicker
                    onChange={this.onChange}
                    value={this.state.time}
                />
            </div>
        );
    }
}

export default TimePickerComp