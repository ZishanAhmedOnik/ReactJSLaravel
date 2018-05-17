import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from './Form'
import List from './List';

import { Provider } from 'react-redux';

import store from '../store';

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <div style={ {'marginTop': '5%'} } className="container">
                    <Form/>

                    <hr />

                    <List/>
                </div>
            </Provider>
        );
    }
}

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
