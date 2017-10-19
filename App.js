import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import AppWithNavigationState from './src/navigators/AppNavigator'
import Store from './src/Store'

export default class Root extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     appIsReady: true,
  //   }
  // }
  render() {
    return (
      <Provider store={Store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Root', () => Root)
