import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SettingsSwitcher from './src/components/SettingsSwitcher';

const topMargin = Platform.select({
  ios: 40,
  default: 0
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={ {flex: 1, marginTop: topMargin} }>
        <SettingsSwitcher />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
