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
    }

    render() {

        console.log(` ::: SWITCHER PROPS ::: ${JSON.stringify(this.props)} `);

        return (
            <View style={switcherStyle.container}>
                <Text style={switcherStyle.switcherText}>{this.props.caption}</Text>
                <Switch 
                    style={switcherStyle.switch}
                    // thumbTintColor={'black'}
                    tintColor={AppColors.NavigationControlBackgroud}
                    onValueChange={(value) => {
                        console.log(` ::: SWITCHER ONCHANGE ::: ${JSON.stringify(value)} `);
                        this.props.onChange(value);
                    }}
                    value={this.props.switched} />
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