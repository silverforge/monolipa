import React, { Component } from 'react';
import {
    View
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Switcher from '../components/Switcher';
import CounterTime from '../components/CounterTime';

class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home', 
        tabBarLabel: 'home',
        tabBarIcon: ({focused, tintColor}) => (<Icon name="home-assistant" color={tintColor} size={26} />)
    };
    
    render() {
        return (
            <View>
                <Switcher caption={"I'm home"} />
                <CounterTime />
                <Switcher caption={"Notifications"} />
            </View>
        );
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        iamhome: state.iamhome
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
