import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import SettingsSwitcher from './components/SettingsSwitcher';

export default class MainView extends Component {

    render() {
        return(
            <View style={mainStyle.container}>
                <View style={mainStyle.subContainer}>
                    <Text style={mainStyle.titleText}>Monoli PA</Text>
                    <SettingsSwitcher />
                </View>
            </View>
        );
    }
}

const topMargin = Platform.select({
    ios: 40,
    default: 0
});

const mainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdaea',
    },
    subContainer: {
        flex: 1,
        marginTop: topMargin,
    },
    titleText: {
        fontSize: 48,
        margin: 8,
        alignSelf: 'center',
        fontFamily: 'Rubik-Regular',
        color: '#5c5d67'
    }
}); 