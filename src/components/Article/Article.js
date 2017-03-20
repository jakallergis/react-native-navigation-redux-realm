import React, { Component } from "react"
import { StyleSheet, View, Text, Image, WebView } from "react-native"

export default class Article extends Component {
  render() {
    console.log('inside Article', this.props)
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.ImageColumn}>
              <Image source={{uri: this.props.navigation.state.params.photo}} style={styles.picture}/>
              <Text style={styles.title}>
                {this.props.navigation.state.params.title}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <WebView source={{html: this.props.navigation.state.params.article.content}} style={styles.content}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ecf0f1'
  },
  column: {
    flex: 1,
    flexDirection: 'row'
  },
  ImageColumn: {
    flex: 1
  },
  picture: {
    flex: 1,
    height: 250
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10,
    color: '#2980b9'
  },
  ContentColumn: {
    flex: 3
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  }
})