import React, { Component } from 'react';

import {
    Platform,
    Switch,
    StyleSheet,
    Text,
    View
} from 'react-native';
import HomeServiceClient from '../network/HomeServiceClient';

export default class SettingsSwitcher extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            switched: false
        };

        this._homeServieClient = new HomeServiceClient();
    }

    async componentWillMount() {
        let result = await this._homeServieClient.getIamHome();
        console.log(`::: AMIHOME RESULT ::: ${JSON.stringify(result)}`);
        this.setState({ switched: result });
    }

    render() {
        return(
            <View style={switcherStyle.container}>
                <Text style={switcherStyle.switcherText}>I'm home</Text>
                <Switch 
                    style={switcherStyle.switch}
                    // thumbTintColor={'black'}
                    tintColor={'#5c5d67'}
                    onValueChange={async (value) => {
                        await this._setIamHome(value);
                    }}
                    value={this.state.switched} />
            </View>
        );
    }

    _setIamHome = async (value) => {
        this.setState({ switched: value });
        await this._homeServieClient.setIamHome(value);
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