import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import MonoliScreen from '../views/MonoliScreen';

import HomeScreen from '../views/HomeScreen';
import SettingsScreen from '../views/SettingsScreen';

import AppColors from '../config/AppColors';

export const Screens = StackNavigator({
    Monoli: { screen: MonoliScreen },
}, {
    initialRouteName: 'Monoli',
    headerMode: 'screen'
});

export const Tabs = TabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen }
}, {
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,
    // tabBarPosition: 'bottom',
    // tabBarComponent: TabBarBottom,
    tabBarOptions: {
        activeTintColor: AppColors.NavigationControlForegroud,
        activeBackgroundColor: AppColors.NavigationControlBackgroud,
        inactiveTintColor: AppColors.NavigationControlForegroud2,
        inactiveBackgroundColor: AppColors.NavigationControlBackgroud2,
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: AppColors.NavigationControlBackgroud2
        },
        indicatorStyle: {
            backgroundColor: AppColors.Highlite
        },
        labelStyle: {
            color: AppColors.Highlite
        }
    }
});

// https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4
// https://github.com/react-community/react-navigation/blob/master/docs/api/navigators/TabNavigator.md
// https://reactnavigation.org/docs/tab-navigator.html
// https://github.com/oblador/react-native-vector-icons/issues/626
