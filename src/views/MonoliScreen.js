import React, { Component } from 'react';
import {
} from 'react-native';

import { Tabs } from '../router/Router';

export default class MonoliScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'MoNoLi Pa'
        }
    };

    render() {
        return (
            <Tabs/>
        );
    }
}