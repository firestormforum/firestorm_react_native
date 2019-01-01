import React from 'react'
import { BackHandler, View } from 'react-native'
import * as NavigatorService from '../Navigation/NavigatorService'
import { withNavigation } from 'react-navigation'

class Screen extends React.Component {
  constructor(props) {
    super(props)
  }

  onBackButtonPressAndroid = () => {
    this.props.navigation.goBack()
    return true
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
  }

  render () {
    return <View style={{ backgroundColor: 'white', flex: 1 }}>{this.props.children}</View>
  }
}

export default Screen
