import React, { Component } from 'react';
import {
    Switch,
    StyleSheet,
    Text,
    View
} from 'react-native';

import AppColors from '../config/AppColors';

export default class Switcher extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            switched: false
        };
    }

    render() {
        return (
            <View style={switcherStyle.container}>
                <Text style={switcherStyle.switcherText}>{this.props.caption}</Text>
                <Switch 
                    style={switcherStyle.switch}
                    // thumbTintColor={'black'}
                    tintColor={AppColors.NavigationControlBackgroud}
                    onValueChange={async (value) => {
                    }}
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
        color: AppColors.TextColor
    },
    switch: {
        marginHorizontal: 16
    }
});