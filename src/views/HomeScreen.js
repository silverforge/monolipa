import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SettingsSwitcher from '../components/SettingsSwitcher';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home', 
        tabBarLabel: 'home',
        tabBarIcon: ({focused, tintColor}) => (<Icon name="home-assistant" color={tintColor} size={26} />),
//        header: null
    };
    
    render() {
        return (
            <View>
            </View>
        );
    }
}
