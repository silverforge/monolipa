import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import AppColors from '../config/AppColors';

export default class Texter extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.caption}</Text>
                <TextInput 
                    style={styles.textInput} 
                    autoFocus={true}
                    autoCorrect={false} 
                    value={this.props.inputText} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: 32
    },
    text: {
        fontSize: 20, 
        marginHorizontal: 8,
        fontFamily: 'Lora-Regular', 
        color: AppColors.TextColor
    },
    textInput: {
        fontSize: 14, 
        marginVertical: 4,
        marginHorizontal: 8,
        fontFamily: 'Lora-Regular', 
        color: AppColors.TextColor        
    }
});