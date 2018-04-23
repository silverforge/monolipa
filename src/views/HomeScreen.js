import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Switcher from '../components/Switcher';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home', 
        tabBarLabel: 'home',
        tabBarIcon: ({focused, tintColor}) => (<Icon name="home-assistant" color={tintColor} size={26} />)
    };
    
    render() {
        return (
            <View>
                <Switcher caption={"I'm home"} />
                <Switcher caption={"Notifications"} />
            </View>
        );
    }
}
