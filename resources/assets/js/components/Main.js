import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'

import { Provider } from 'react-redux';

import store from '../store';

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Form/>
                </div>
            </Provider>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
