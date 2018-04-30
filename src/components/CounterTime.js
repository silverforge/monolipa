import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import AppColors from '../config/AppColors';

export default class CounterTime extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.time}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8
    },
    text: {
        fontSize: 28, 
        marginHorizontal: 8,
        fontFamily: 'Lora-Regular', 
        color: AppColors.TextColor
    }
});