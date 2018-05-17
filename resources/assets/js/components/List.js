import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchNotification } from '../actions/notificationAction';
import index from "../reducers";

class List extends Component {
    componentWillMount() {
        this.props.fetchNotification();
    }

    render() {
        const notifactionItems = this.props.notifications.map(item => (
            <div className={"alert alert-success animated zoomIn" } role="alert" key={item.id}>
                <h2 className="alert-heading">{ item.notification }</h2>

                <hr/>

                <p style={{ 'textAlign': 'right' }}>Created At: { item.created_at }</p>
            </div>
        ));

        return(
            <div>
                { notifactionItems }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notifications: state.notifications.items
});

export default connect(mapStateToProps, { fetchNotification } ) (List);