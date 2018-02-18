import React, { Component } from 'react';

import {
    Platform,
    Switch,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class SettingsSwitcher extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            switched: false
        };
    }

    render() {
        return(
            <View style={switcherStyle.container}>
                <Text style={switcherStyle.switcherText}>I'm home</Text>
                <Switch 
                    style={switcherStyle.switch}
                    // thumbTintColor={'black'}
                    tintColor={'#5c5d67'}
                    onValueChange={(value) => this.setState({ switched: value })}
                    value={this.state.switched} />
            </View>
        );
    }
}

const switcherStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32
    },
    switcherText: {
        fontSize: 20, 
        marginHorizontal: 8,
        fontFamily: 'Lora-Regular', 
        color: '#5c5d67'
    },
    switch: {
        marginHorizontal: 16
    }
});