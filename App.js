import React from 'react';
import { StyleSheet, View } from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import NewsScreen from './screens/NewsScreen';
import SettingsScreen from './screens/SettingsScreen';

//a8f31bc8eb22494a844c62dbc7b72b55 api key
export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: {screen: WelcomeScreen},
      news: {screen: StackNavigator({
        news: {screen: NewsScreen},
        settings: {screen: SettingsScreen}
      })
    }
    },{
      lazy: true
    });
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
