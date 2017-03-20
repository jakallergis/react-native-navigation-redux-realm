import React, { Component } from 'react'
import { StyleSheet, ListView, View, Image, Text, TouchableNativeFeedback } from 'react-native'

export default class FeaturedList extends Component {
  constructor(props) {
    console.log('FEATURED RECHED ____________________________________')
    console.log(props)
    super(props)
    this.state = {dataSource: this.recreateDataSource(this.props.navigation.state.params)}
  }
  
  recreateDataSource(newItems) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    return ds.cloneWithRows(newItems)
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({dataSource : this.recreateDataSource(nextProps.navigation.state.params)})
  }
  
  render () {
    return (
      <View style={{flex : 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <FeaturedListItem
          data={rowData} navigation={this.props.navigation}/>}
          enableEmptySections={true}
        />
      </View>
    )
  }
}

class FeaturedListItem extends Component {
  goToItem(item) {
    this.props.navigation.navigate('ArticleView', item)
  }
  
  render () {
    return (
      <TouchableNativeFeedback onPress={() => this.goToItem(this.props.data)}>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={styles.ImageColumn}>
              <Image source={{uri: this.props.data.photo}} style={styles.picture}/>
            </View>
            <View style={styles.SummaryColumn}>
              <Text style={styles.title} numberOfLines={2}>
                {this.props.data.title}
              </Text>
              <Text style={styles.summary} numberOfLines={3}>
                {this.props.data.summary}
              </Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: '#ecf0f1'
  },
  column: {
    flex: 1,
    flexDirection: 'row'
  },
  ImageColumn: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  picture: {
    flex: 1
  },
  SummaryColumn: {
    flex: 3
  },
  title: {
    fontSize: 16,
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10,
    color: '#2980b9'
  },
  summary: {
    fontSize: 13,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  }
})
