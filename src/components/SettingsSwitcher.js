import React, { Component } from 'react';

import {
    Platform,
    Switch,
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
            <View style={ {flexDirection: 'row'} }>
                <Text>I'm home</Text>
                <Switch 
                    onValueChange={(value) => this.setState({ switched: value })}
                    value={this.state.switched} />
            </View>
        );
    }
}
