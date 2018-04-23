import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import HomeScreen from '../views/HomeScreen';
import SettingsScreen from '../views/SettingsScreen';

import AppColors from '../config/AppColors';

export const AppNavigator = StackNavigator({
    Monoli: { 
        screen: TabNavigator({
            Home: { screen: HomeScreen },
            Settings: { screen: SettingsScreen }        
        }, {
            initialRouteName: 'Home',
            animationEnabled: true,
            swipeEnabled: true,
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
        })
    }
}, {
    initialRouteName: 'Monoli',
    headerMode: 'screen',
    navigationOptions: {
        headerStyle: {
            backgroundColor: AppColors.NavigationControlBackgroud2,
            paddingVertical: 4
        },
        headerTitle: 'MoNoLi Pa',
        headerTintColor: AppColors.Highlite,
        headerTitleStyle: {
            fontFamily: 'Rubik',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: 22,
            marginVertical: 8
        }        
    }
});

// https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4
// https://github.com/react-community/react-navigation/blob/master/docs/api/navigators/TabNavigator.md
// https://reactnavigation.org/docs/tab-navigator.html
// https://github.com/oblador/react-native-vector-icons/issues/626
