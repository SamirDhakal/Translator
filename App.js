import * as React from 'react';
import LoginScreen from './screens/LoginScreen';
import MyHeader from './component/MyHeader';
import { View } from 'react-native';
import TranslateScreen from './screens/TranslateScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return(
      <View>
        <AppContainer/>
      </View>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen : {screen : LoginScreen},
  TranslateScreen : {screen : TranslateScreen}
})

const AppContainer = createAppContainer(SwitchNavigator)