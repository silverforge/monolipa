import {StatusBar, AppRegistry } from 'react-native';
import ShellScreen from './src/views/ShellScreen';

StatusBar.setBarStyle('light-content', true);

AppRegistry.registerComponent('MoNoLiPa', () => ShellScreen);
