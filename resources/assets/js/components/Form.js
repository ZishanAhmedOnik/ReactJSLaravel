import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNotification } from '../actions/notificationAction';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notification: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSave() {
        const notfication = {
            notification: this.state.notification
        };

        this.props.createNotification(notfication);

        this.setState({
            notification: ''
        });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="notification-text">Notification:</label>

                    <input type="text"
                           className="form-control"
                           name="notification"
                           id="notification-text"
                           placeholder="Notification"
                           value={this.state.notification}
                           onChange={this.onChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.onSave}>Save</button>
            </div>
        );
    }
}

export default connect(null, { createNotification } ) (Form);