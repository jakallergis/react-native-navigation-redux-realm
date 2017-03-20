// @flow
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import * as Actions from '../redux/actions'
import { featuredURL } from '../util/Constants'

const mapStateToProps = (state) => {
  return {
    navigationState: state.RootStackState,
    loaderState: state.LoaderState
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  let actionCreators: {} = bindActionCreators(Actions, dispatch)

  return {
    actions: {...actionCreators},
    dispatch
  }
}

import Loader from '../screens/Loader'
import Featured from '../screens/Featured'

class RootStack extends Component {
  componentDidMount(){
    const { loadData } = this.props.actions
    loadData(featuredURL, 'Featured')
  }

  render() {
    console.log('RootStack props', this.props)

    const newProps = {...this.props}
    delete newProps.dispatch
    delete newProps.navigationState

    return (
      <Stacks
        screenProps={{...newProps}}
        navigation={
          addNavigationHelpers({
            state: this.props.navigationState,
            dispatch: this.props.dispatch
          })
        }
      />
    )
  }
}

const RouteConfigs = {
  Loader: {
    screen: Loader,
    navigationOptions: {
      header: {
        visible: false
      }
    }
  },
  Featured: {
    screen: Featured,
    navigationOptions: {
      header: {
        visible: true,
        title: 'Featured',
        left: undefined
      }
    }
  }
}

export const Stacks = StackNavigator(RouteConfigs)

export default connect(mapStateToProps, mapDispatchToProps)(RootStack)