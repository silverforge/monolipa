import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppColors from '../config/AppColors';

import Texter from '../components/Texter';

export default class SettingsScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Settings', 
        tabBarLabel: 'settings',
        tabBarIcon: ({focused, tintColor}) => (<Icon name="settings-outline" color={tintColor} size={26} />),
        headerRight: (
            <View style={styles.righContainer}>
                <Icon.Button 
                    name="check" 
                    backgroundColor={AppColors.NavigationControlBackgroud2} 
                    color={AppColors.Highlite} size={26}
                    />
            </View>
        ),
    });

    render() {
        return (
            <View>
                <Texter caption="Home url" inputText="http://alma.fi" />
                <Texter caption="Remote url" inputText="https://farfaraway.com" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    righContainer: {
        marginHorizontal: 4
    }
});