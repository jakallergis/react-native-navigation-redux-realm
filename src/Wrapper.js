import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './redux/Store'
const store = configureStore()

import RootStack from './navigators/RootStack'

class ProtoThema extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ProtoThema', () => ProtoThema)