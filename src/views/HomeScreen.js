import React, { Component } from 'react';
import {
    View
} from 'react-native';

import SettingsSwitcher from '../components/SettingsSwitcher';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home', 
        tabBarLabel: 'home',
//        tabBarIcon: ({tintColor}) => (<Icon name="calendar-question" color={tintColor} size={26} />),
//        header: null
    };
    
    render() {
        return (
            <View>
            </View>
        );
    }
}
