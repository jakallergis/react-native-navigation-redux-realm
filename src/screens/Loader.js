// @flow
import React, { Component } from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { featuredURL } from '../util/Constants'

export default class Loader extends Component {
  componentDidUpdate() {
    const { data, content, isLoading } = this.props.screenProps.loaderState
    if (!isLoading && data) {
      console.log('ITS NOT LOADING')
      this.props.navigation.navigate(content, data)
    }
  }

  render() {
    console.log('Loader props', this.props)

    const { status, content } = this.props.screenProps.loaderState

    return (
      <LinearGradient
        style={styles.container}
        colors={['#f27600', '#A60000']}
        start={{x: 0, y: 0}} end={{x: 0, y: 2}}
      >
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.title}>{content}</Text>
        <Text style={styles.subtitle}>{status}</Text>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 56
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    fontSize: 15,
    color: 'white'
  }
})