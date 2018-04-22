import React, { Component } from 'react';
import {
} from 'react-native';

import { Tabs } from '../router/Router';

export default class MonoliScreen extends Component {
    static navigationOptions = {
        title: 'MonoliPa', 
        tabBarLabel: 'monolipa',
//        tabBarIcon: ({tintColor}) => (<Icon name="calendar-question" color={tintColor} size={26} />),
//        header: null
    };

    render() {
        return (
            <Tabs/>
        );
    }
}