import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppNavigator } from '../router/Router';

import store from '../store/index';

export default class ShellScreen extends Component {

    render() {
        return(
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}