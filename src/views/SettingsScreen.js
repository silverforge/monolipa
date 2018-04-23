import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings', 
        tabBarLabel: 'settings',
        tabBarIcon: ({focused, tintColor}) => (<Icon name="settings-outline" color={tintColor} size={26} />)
    };

    render() {
        return (
            <View>
                
            </View>
        );
    }
}