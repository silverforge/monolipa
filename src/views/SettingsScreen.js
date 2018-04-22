import React, { Component } from 'react';
import {
    View
} from 'react-native';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings', 
        tabBarLabel: 'settings',
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