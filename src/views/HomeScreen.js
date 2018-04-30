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
import HomeServiceClient from '../network/HomeServiceClient';

class HomeScreen extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Home', 
        tabBarLabel: 'home',
        tabBarIcon: ({focused, tintColor}) => (<Icon name="home-assistant" color={tintColor} size={26} />)
    });

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            countdown: "00:00:00"
        }

        this.homeServiceClient = new HomeServiceClient();
    }

    async componentWillMount() {
        await this._getData();
    }

    componentDidMount() {
        this._interval = setInterval(async () => {
            await this._getData();
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    render() {
        // console.log(` ::: HOME PROPS ::: ${JSON.stringify(this.props)} `);
        
        return (
            <View>
                <Switcher 
                    caption={"I'm home"} 
                    switched={this.props.iamhome} 
                    onChange={async (value) => await this._handleIamHomeSwitcherChanged(value)}
                    />
                <CounterTime time={this.state.countdown} />
                <Switcher 
                    caption={"Notifications"}
                    switched={false}
                    onChange={(value) => console.log(`ALMA`)}
                    />
            </View>
        );
    }

    _handleIamHomeSwitcherChanged = async (value) => {
        this.props.updateIAmHome(value);
        await this.homeServiceClient.setIamHome(value);
        await this._getData();
    }

    _getData = async () => {
        await this._amIHome();
        await this._setHourMin();
    }

    _amIHome = async () => {
        let result = await this.homeServiceClient.getIamHome();
        console.log(` ::: IH ::: ${JSON.stringify(result)} `);

        this.props.updateIAmHome(result);        
    }

    async _setHourMin() {
        if (this.props.iamhome) {
            let countDownTimeSpan = await this.homeServiceClient.getCountDownTime();
            // console.log(` ::: CT ::: ${JSON.stringify(countDownTimeSpan)} `);

            let hourMin = countDownTimeSpan.substring(0, 5);
            console.log(` ::: HM ::: ${JSON.stringify(hourMin)} `);

            this.setState({ countdown: hourMin });
        } else {
            this.setState({ countdown: "00:00" });
        }
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {

    // console.log(` ::: HOME STATE ::: ${JSON.stringify(state)} `);

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
